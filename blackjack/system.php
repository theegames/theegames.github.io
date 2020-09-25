<?

function cashFormat($amount)
{
  $amount += 0;
  if($amount < 100*1000)
    return('<span class="gp-small">'.floor($amount).'</span>');
  if($amount < 10*1000000)
    return('<span class="gp-k">'.floor($amount/1000).'k</span>');
  return('<span class="gp-m">'.floor($amount/1000000).'M</span>');
}


function cashToInt($raw)
{
  $raw = strtolower(trim(str_replace(' ', '', $raw)));
  if(substr($raw, -1) == 'k')
  {
    return(round(substr($raw, 0, -1)*1000));
  }
  if(substr($raw, -1) == 'm')
  {
    return(round(substr($raw, 0, -1)*1000000));
  }
  return(round($raw*1.0));
}

class BjModel
{
	private $suits=array('ch','cd','cc','cs');
	private $cards=array('ca','c2','c3','c4','c5','c6','c7','c8','c9','c10','cj','cq','ck');
	
	// minimum bet
	private $min_bet=1;
	// maximum bet
	private $max_bet=500;

	// time to place bets (in seconds)
	private $round_time=15;
	// time to make a decision hit/stand etc (in seconds)
	private $turn_time=15;

	function __construct(){
		$this->data = array();
		$this->ds = array();
	}
	
	function __destruct(){
	}
	
	private $sem=null;
	private $sem_file='bj.lck';
	private $is_sem_waiting=false;
	
	function semWait(){
		if($this->is_sem_waiting)return;
		$this->sem = fopen($this->sem_file,"w+");
		flock($this->sem, LOCK_EX);
		$this->is_sem_waiting=true;
	}
	
	function semRelease(){
		if(!$this->is_sem_waiting)return;
		flock($this->sem, LOCK_UN);
		fclose($this->sem);
		$this->is_sem_waiting=false;
	}	
	
	function load(){
		if(!file_exists('bj_data.php'))
			$this->createNew();
		else{
			include('bj_data.php');
			$this->ds=$ds;
			$this->data=$data;
		}
	}
	
	function save(){
		$ds=$this->ds;
		$data=$this->data;
		file_put_contents('bj_data.php','<? $ds='.var_export($ds,true).';$data='.var_export($data,true).';');
	}
	
	function getNextUID(){
		$this->semWait();
		$uid=0;
		if(file_exists('uid'))$uid=intval(file_get_contents('uid'));
		$uid++;
		file_put_contents('uid',$uid);
		$this->semRelease();
		return $uid;
	}
	
	function tick() {
		$unsets=false;
		switch($this->data['state'])
		{
			case 0:
				
				// wait for bets if there are 5 players
				$this->ds['g_players_current']=count($this->data['players']);
				if(count($this->data['players'])==5){
					$this->data['ltime']=intval(time())+$time->round_time;//time to begin
					$this->data['state']=1;
					$this->save();
					}

				// player joined the game
				foreach($this->data['players'] as $key => $player)
					if($player['ping']<time()-5 && $player['state']<=0){
						unset($this->data['players'][$key]);
						$this->ds['g_players_current']--;
						$unsets=true;
					}
				if($unsets){$this->save();}
				
				
				break;
			case 1:
				foreach($this->data['players'] as $key => $player)
					if($player['ping']<time()-5 && $player['state']<=0){
						unset($this->data['players'][$key]);
						$this->ds['g_players_current']--;
						$unsets=true;
					}
				if($unsets){
					if($this->ds['g_players_current']==0)$this->data['state']=0;$this->save();
					
					}
				if($this->ds['g_players_current']==0){$this->data['state']=0;$this->save();}
				
				if($this->data['ltime']-time()<0){
					return $this->beginGame();
				}
				break;
			case 2:
				foreach($this->data['players'] as $key => $player)
					if($player['ping']<time()-5 && $player['state']==-1){
						unset($this->data['players'][$key]);
						$this->ds['g_players_current']--;
						$unsets=true;
					}
				if($unsets){$this->save();}
				
				$all_compleate=true;
				foreach($this->data['players'] as $player)$all_compleate=$all_compleate && $player['state']==1;
					
				if($this->data['ltime']-time()<0 || $all_compleate){
					$this->insuranceCompleate();
				}
				break;
			case 3:
				foreach($this->data['players'] as $key => $player)
					if($player['ping']<time()-5 && $player['state']==-1){
						unset($this->data['players'][$key]);
						$this->ds['g_players_current']--;
						$unsets=true;
					}
				if($unsets){$this->save();}
				
				if(!isset($this->data['players'][$this->data['current_player']]))
					$this->nextStep();
				
				if($this->data['ltime']-time()<0){
					$this->data['players'][$this->data['current_player']]['state']=1;
					$this->nextStep();
				}
				break;
		}
	}
	
	function insuranceCompleate(){
		
		if( $this->isBJ($this->data['cards'])) return $this->gameOver();
		
		$this->data['state']=3;
		$this->data['ltime']=intval(time())+$this->turn_time;
		
		$id=0;
		foreach($this->data['players'] as &$player){
			if($player['qty']==21 && $player['state']==1)
				$player['state']=1;
			elseif($player['state']==1){
				$player['state']=0;
				if(!$id)$id=$player['id'];
			}
		}
		if(!$id)
			$this->gameOver();
		else{
			$this->data['ltime']=intval(time())+10;
			$this->data['current_player']=$id;
			$this->save();
		}				
	}
	
	function nextStep() {
		if(count($this->data['players'])==0)
		{
			$this->createNew();
			return;
		}
		$this->data['ltime']=intval(time())+$this->turn_time;
		$cur_player=$this->data['current_player'];
		$cur_split=$this->data['split'];
		$this->data['current_player']=0;
		$this->data['split']=0;
		//if all players decide to stand end the game
		$all_stand=true;
		foreach($this->data['players'] as $player)if($player['state']>=0)$all_stand=$all_stand && $player['state']==1 && (!$player['split'] || $player['split_state']);
		if($all_stand) return $this->gameOver();
		if($this->data['players'][$cur_player]['state']==0)
		{
			$this->data['current_player']=$cur_player;
			$this->data['split']=0;
			return $this->save();
		}
		if($this->data['players'][$cur_player]['split'] && $this->data['players'][$cur_player]['split_state']==0)
		{
			$this->data['current_player']=$cur_player;
			$this->data['split']=1;
			return $this->save();
		}
		// search for next player
		// split of current player
		if(!$cur_split && $this->data['players'][$cur_player]['split'] && !$this->data['players'][$cur_player]['split_state']){
			$this->data['current_player']=$cur_player;
			$this->data['split']=1;
		}else{		
			$id=0;
			foreach($this->data['players'] as $player)
				if(($player['state']==0 || ($player['split_state']==0 && $player['split'])) && !$id && $player['state']!=-1)
					$id=$player['id'];
			$k=false;
			foreach($this->data['players'] as $player)
				if($player['id']==$cur_player)
					$k=true;
				elseif($k && ($player['state']==0 || ($player['split_state']==0 && $player['split'])) && $player['state']!=-1){
					$this->data['current_player']=$player['id'];
					break;}
			if(!$this->data['current_player'])
				$this->data['current_player']=$id;
			if($this->data['players'][$this->data['current_player']]['state'])
				$this->data['split']=1;
		}
		$this->save();
	}
		
	function gameOver() {
		$this->data['state']=4;
		$this->ds['g_status']='D';
		$this->data['current_player']=0;
		// Uncomment the following (and $card=array_pop($dealer_cards)) to make dealer receive certain cards
		//$dealer_cards=array(10,10);
		while($this->data['qty']<17){
			$suit=mt_rand(0,3);
			$card=mt_rand(1,13);
			// Uncomment the following to make dealer receive certain cards
			//$card=array_pop($dealer_cards);
			$this->data['cards'][]=$this->suits[$suit].' '.$this->cards[$card-1];
			$this->calcQty();
		}
		
		foreach($this->data['players'] as &$player)if($player['state']!=-1){
			$total=0;
			$player['game_over_text']='Game over';
			if(
								$player['state']==1 &&
								$this->isBJ($player['cards']) &&
								!$this->isBJ($this->data['cards']) &&
								!$player['split']
								){
				$ammount=$player['bet'];
				$player['wallet']+=$ammount*2.5;
				$player['message']='Win';
				$player['winner']=true;
				$total=$ammount*2.5;
				$player['game_over_text'].='<br>'.($player['split']?'1st hand: ':'').'You win Blackjack '.cashFormat(floor($total));
			}elseif(
									$player['state']==1 &&
									$player['qty']<=21  &&
									!$this->isBJ($this->data['cards']) &&
									(
										$player['qty']>$this->data['qty'] || $this->data['qty']>21
									)
							){
				$ammount=$player['bet'];
				$player['wallet']+=$ammount*2;
				$player['message']='Win';
				$player['winner']=true;
				$total=$ammount*2;
				$player['game_over_text'].='<br>'.($player['split']?'1st hand: ':'').'You win '.cashFormat(floor($total));
			}elseif(
									$player['state']==1 &&
									$player['qty']<=21  &&
									$player['qty'] == $this->data['qty'] &&
									$this->isBJ($player['cards']) == $this->isBJ($this->data['cards']) &&
									((!$this->isBJ($this->data['cards']) && $player['split']) || !$player['split'])
							){
				$ammount=$player['bet'];
				$player['wallet']+=$ammount;
				$player['message']='Push';
				$player['game_over_text'].='<br>'.($player['split']?'1st hand: ':'').'Push ';
			}elseif(
									$player['state']==1 &&
									$player['insurance'] &&
									$this->isBJ($this->data['cards'])
							){
				$ammount=$player['insurance']*3;//+$player['bet'];
				$player['wallet']+=$ammount;
				$player['message']='Insurance';
				$player['game_over_text'].='<br>'.($player['split']?'1st hand: ':'').'Your insurance bet won, refund '.cashFormat(floor($ammount));
			}else{
				$ammount=$player['bet'];
				if($player['qty']>21)
					$player['message']='Busted';
				else
					$player['message']='Lose';
				$player['game_over_text'].='<br>'.($player['split']?'1st hand: ':'').'You lose';
			}
			
			if($player['split']){
				if(
									$player['split_state']==1 &&
									$player['split_qty']<=21  &&
									!$this->isBJ($this->data['cards']) &&
									(
										$player['split_qty']>$this->data['qty'] || $this->data['qty']>21
									)
							){
					$ammount=$player['split_bet'];
					$player['wallet']+=$ammount*2;
					$player['split_message']='Win';
					$player['winner']=true;
					$total=$ammount*2;
					$player['game_over_text'].='<br>2nd hand: You win '.cashFormat(floor($total));
				}elseif(
									$player['split_state']==1 &&
									$player['split_qty']<=21  &&
									$player['split_qty'] == $this->data['qty'] &&
									!$this->isBJ($this->data['cards'])
							){
					$ammount=$player['split_bet'];
					$player['wallet']+=$ammount;
					$player['split_message']='Push';
					$player['game_over_text'].='<br>2nd hand: Push, refund';
				}else{
					$ammount=$player['split_bet'];
					if($player['split_qty']>21)
						$player['split_message']='Busted';
					else
						$player['split_message']='Lose';
					$player['game_over_text'].='<br>2nd hand: You lose';
				}
			}
			
		}
		
		$this->save();
	}
	
	function beginGame() {
		foreach($this->data['players'] as $key => $player)
			if($player['state']==-1 || $player['bet']<$this->min_bet || $player['bet']>$this->max_bet){
				unset($this->data['players'][$key]);
				$this->ds['g_players_current']--;
			}else{
				$amount=intval($player['bet']);
				$this->ds['g_bet']+=$amount;
			}
		function cmp_p($a, $b)
		{
				if (intval($a['pos']) == intval($b['pos'])) {
						return 0;
				}
				return (intval($a['pos']) < intval($b['pos'])) ? 1 : -1;
		}
		uasort($this->data['players'],"cmp_p");
		
		
		if(count($this->data['players'])==0){$this->data['state']=0;return $this->save();}
		
		$this->data['cards']=array();
		// Uncomment the following (and $card=array_pop($need_cards)) to make user receive certain cards
		// 1 - is an ace, 11 - is either Valet, Queen or King
		// numeration starts from the end (so last 2 digits are cards which received the first joined user)
		// $need_cards=array(11,1,2,12,4,6,3,7,11,5,4,4);
		// Uncomment the following (and $card=array_pop($dealer_cards)) to make dealer receive certain cards
		 //$dealer_cards=array(1,5);
		for($i=0;$i<2;$i++){
			
			$suit=mt_rand(0,3);
			$card=mt_rand(1,13);
			//$card=array_pop($dealer_cards);
			$this->data['cards'][]=$this->suits[$suit].' '.$this->cards[$card-1];
			foreach($this->data['players'] as &$player){
				$suit=mt_rand(0,3);//$suit=0;
				$card=mt_rand(1,13);
				//$card=array_pop($need_cards);
				$player['cards'][]=$this->suits[$suit].' '.$this->cards[$card-1];
			}
		}
		if(substr($this->data['cards'][1],3)=='ca')
			$this->data['state']=2;
		else
			$this->data['state']=3;
		$this->data['ltime']=intval(time())+10;
		
		$this->calcQty();
		
		if($this->data['state']==3)
		{
			$id=0;
			foreach($this->data['players'] as &$player){
				if($player['qty']==21)
					$player['state']=1;
				else{
					$player['state']=0;
					if(!$id)$id=$player['id'];
				}
			}
			if(!$id)
				$this->gameOver();
			else{
				$this->data['ltime']=intval(time())+$this->turn_time;
				$this->data['current_player']=$id;
				$this->save();
			}
		}else{
			foreach($this->data['players'] as &$player){
				if( $this->isBJ($player['cards']) )
					$player['state']=1;
				else
					$player['state']=0;
			}
			$this->save();
		}
	}
	function calcCards($cards){
		$noms=array(
				'c2'=>2,
				'c3'=>3,
				'c4'=>4,
				'c5'=>5,
				'c6'=>6,
				'c7'=>7,
				'c8'=>8,
				'c9'=>9,
				'c10'=>10,
				'cj'=>10,
				'cq'=>10,
				'ck'=>10,				
				'ca'=>11,				
				);
		$qty=0;
		foreach($cards as $card)
			if(substr($card,3)!='ca')
				$qty+=$noms[substr($card,3)];
			
			
		$cas=0;
		foreach($cards as $card)
			if(substr($card,3)=='ca')
				$cas++;
			
		
		$cas_m=0;
		while($qty+$cas*11-$cas_m*10>21 && $cas_m<$cas)
			$cas_m++;
				
		return $qty+$cas*11-$cas_m*10;
	}
	function calcQty(){
		$this->data['qty']=$this->calcCards($this->data['cards']);
		foreach($this->data['players'] as $player){
			$this->data['players'][$player['id']]['qty']=$this->calcCards($this->data['players'][$player['id']]['cards']);
			if($this->data['players'][$player['id']]['split'])
				$this->data['players'][$player['id']]['split_qty']=$this->calcCards($this->data['players'][$player['id']]['split']);
		}
	}
	
	function isBJ($cards){
		if(count($cards)!=2)return false;
		if(
				(substr($cards[0],3)=='ca' || substr($cards[1],3)=='ca') &&
				(
					(substr($cards[0],3)=='cj' || substr($cards[0],3)=='cq' || substr($cards[0],3)=='ck' || substr($cards[0],3)=='c10') ||
					(substr($cards[1],3)=='cj' || substr($cards[1],3)=='cq' || substr($cards[1],3)=='ck' || substr($cards[1],3)=='c10')
				))
						return true;
			else
						return false;
					
	}
	function getState($user) {

		
		$data=$this->data;
		
		$data['game_id']=$this->ds['g_id'];
		if(!isset($user['wallet']))$user['wallet']=0;
		
		$data['need_name']=empty($user['name']);
		$data['need_wallet']=true;
		$data['name']='';
		
		if(isset($user['name']))$data['name']=$user['name'];
		
		
		
		$data['wallet']="";

		$data['current_player_pos']=0;
		if($data['current_player'])
			$data['current_player_pos']=$this->data['players'][$data['current_player']]['pos'];
		$data['in_game']=false;
		$data['split_awail']=false;
		$data['is_bet']=false;
		$data['my_pos']=0;
		$data['my_state']=-1;
		$data['pos_1_free']=true;
		$data['pos_2_free']=true;
		$data['pos_3_free']=true;
		$data['pos_4_free']=true;
		$data['pos_5_free']=true;
		
		$data['allow_double']=false;
		
		$data['is_allow_game']=false;
		$data['is_allow_cancel']=false;
		$data['is_allow_game']=true;

		foreach($data['players'] as $key => $player){
			if($player['id']==$user['UID']) {
				$data['wallet']=cashFormat($player['wallet']);
				if($player['wallet']<=1)
					$data['need_wallet']=true;
				else
					$data['need_wallet']=false;
				$data['wallet_num']=$player['wallet'];
				$data['in_game']=true;
				$data['is_bet']=$player['state']==-1;
				$data['my_pos']=$player['pos'];
				$data['my_state']=$player['state'];
				if($player['bet'] && $data['state']<=1 && $player['state']!=-1 )$data['is_allow_cancel']=true;
				$this->data['players'][$key]['ping']=time();
				if(count($player['cards'])==2 && !$player['split'])$data['allow_double']=true;
				if(
						count($player['cards'])==2 && 
						substr($player['cards'][0],3)==substr($player['cards'][1],3) && 
						!$player['split'] &&
						$player['bet'] <= $player['wallet']
					)$data['split_awail']=true;
				$this->save();
			}
			
			$data['pos_'.$player['pos'].'_free']=false;
			$data['players'][$key]['bet']=$data['players'][$key]['bet']?
															'Bet: '.cashFormat($data['players'][$key]['bet']+$this->data['players'][$user['UID']]['split_bet']).($data['players'][$key]['insurance']?' ins.':'')
															:'';
		}
			
		
		
		$data['t1_show']=false;
		$data['t2_show']=false;
		$data['t3_show']=false;
		$data['t4_show']=false;
		$data['t5_show']=false;
		
		if($this->data['state']<=1 && isset($data['players'][$user['UID']])){
			$bet=$this->data['players'][$user['UID']]['bet'];
			if($this->data['players'][$user['UID']]['cards'])
				$bet=0;
			if( $bet+1<=$this->max_bet && 1<=$this->data['players'][$user['UID']]['wallet'])
				$data['t1_show']=true;
			if( $bet+5<=$this->max_bet && 5<=$this->data['players'][$user['UID']]['wallet'])
				$data['t2_show']=true;
			if( $bet+10<=$this->max_bet && 10<=$this->data['players'][$user['UID']]['wallet'])
				$data['t3_show']=true;
			if( $bet+20<=$this->max_bet && 20<=$this->data['players'][$user['UID']]['wallet'])
				$data['t4_show']=true;
			if( $bet+50<=$this->max_bet && 50<=$this->data['players'][$user['UID']]['wallet'])
				$data['t5_show']=true;
		}
		
		
		$data['secs']='';
		if($data['state']>=1)
			$data['secs']=' ('.($data['ltime']-time()).')';
		if($data['secs']<0)$data['secs']='';
		
		$data['is_turn']=$user['UID']==$this->data['current_player'];
		
		
		if($data['state']!=4 && $data['state']!=0 && $data['state']!=1 && isset($data['cards'][0])){
			$data['cards'][0]='bc';
			$data['qty']=0;
		}
		
		$data['new_game_secs']='';
		$data["new_game"]=false;
		if(isset($this->data['players'][$user['UID']]))
			$data["game_over_text"]=$this->data['players'][$user['UID']]['game_over_text'];
		else
			$data["game_over_text"]=false;

		function cmp_p_s($a, $b)
		{
				if (intval($a['pos']) == intval($b['pos'])) {
						return 0;
				}
				return (intval($a['pos']) < intval($b['pos'])) ? 1 : -1;
		}
		usort($data['players'],"cmp_p_s");
		
		return $data;


	}
	
	function changeJoin($user,$data) {
		$place=$data['place'];
		if(isset($data['name'])){
			$user['name']=$data['name'];
			$_SESSION['name']=$data['name'];
		}
		
		$user['wallet']=0;
		if(isset($data['wallet'])){
			$user['wallet']=cashToInt($data['wallet']);
		}
		
		
		if($this->data['state']==4)return NULL;
		$u_id=$user['UID'];
		$is_free=true;
		
		foreach($this->data['players'] as $key => $player)
			if($player['pos']==$place) {
				$is_free=false;
			}
		if($is_free && !isset($this->data['players'][$u_id]) && intval($this->ds['g_players_current'])<5){
			if(intval($user['wallet'])==0)return;
			$this->data['players'][$u_id]=array(
					'id' => $u_id,
					'name' => $user['name'],
					'state' => -1,
					'cards' => array(),
					'qty' => 0,
					'winner' => false,
					'message' => '',
					'split_message' => '',
					'ping' => time(),
					'bet'   => 0,
					'wallet' => $user['wallet'],
					'insurance' => false,
					'pos' =>$place,
					'split' => false,
					'split_bet'=> 0,
					'split_qty' => 0,
					'split_state'=>0,
					'game_over_text'=>false
					);
			$this->ds['g_players_current']++;
			$this->save();
		}	
	}
	
	function placeBet($user, $amount) {
		$amount=cashToInt($amount);
		if(!$amount)
			return array('success'=>false,'error'=>'incorrect bet');
		
		if(!isset($this->data['players'][$user['UID']]))
			return array('success'=>false,'error'=>'error bet');

		if($this->data['state']>1)
			return array('success'=>false,'error'=>'error bet');
		
		$bet=$this->data['players'][$user['UID']]['bet'];
		if($this->data['players'][$user['UID']]['cards'])
			$bet=0;
		
		
		if($this->data['players'][$user['UID']]['wallet']<$amount  ) 
			return array('success'=>false,'error'=>'insufficient funds');

		if($bet+$amount>$this->max_bet)
			return array('success'=>false,'error'=>'max bet');
		
		if($this->data['players'][$user['UID']]['state']==-1){
			$this->data['players'][$user['UID']]['state']=0;
			$this->data['players'][$user['UID']]['split_state']=0;
			$this->data['players'][$user['UID']]['insurance']=false;
			$this->data['players'][$user['UID']]['cards'] = array();
			$this->data['players'][$user['UID']]['split'] = false;
			$this->data['players'][$user['UID']]['bet']=0;
			$this->data['players'][$user['UID']]['split_bet']=0;
			$this->data['players'][$user['UID']]['qty']=0;
			$this->data['players'][$user['UID']]['split_qty']=0;
			$this->data['players'][$user['UID']]['game_over_text']=false;
			$this->data['players'][$user['UID']]['message']=false;
			$this->data['players'][$user['UID']]['split_message']=false;
		}	
		
		$this->data['players'][$user['UID']]['bet']		+=$amount;
		$this->data['players'][$user['UID']]['wallet']	-=$amount;
		
		if($this->data['qty']){
			$this->data['cards']=array();
			$this->data['qty']=0;		
		}
		
		if($this->data['state']==0){
			$this->data['state']=1;
			$this->data['ltime']=intval(time())+$this->round_time;//time to begin
		}
		
		$this->save();
		return array('success'=>true,'error'=>'');
	}  
	
	function setReady($user) {
		if(!isset($this->data['players'][$user['UID']]) || $this->data['state']!=1)
			return array('success'=>false,'error'=>'error');
		$this->data['players'][$user['UID']]['state']=1;
		
		$all_ready=true;
		foreach($this->data['players'] as $player)
			$all_ready=$all_ready && $player['state']==1;
		
		if($all_ready)
			$this->beginGame();
		else
			$this->save();
		return array('success'=>true,'error'=>'');
  }  
	
	
	function insurance($user, $type){
		switch(intval($type)){
			case 0:
				$this->data['players'][$user['UID']]['state']=1;
				$this->save();
				break;
			case 1:
				if(($this->data['state']!=2 || $this->data['players'][$user['UID']]['insurance'])&&$this->data['players'][$user['UID']]['qty']==21)return;
				$amount=floor($this->data['players'][$user['UID']]['bet']/2);
				
				if($amount<=$this->data['players'][$user['UID']]['wallet']){
					$this->data['players'][$user['UID']]['insurance']=$amount;
					$this->data['players'][$user['UID']]['state']=1;
					$this->data['players'][$user['UID']]['wallet']-=$amount;
					$this->ds['g_bet']+=$amount;
					$this->save();
				}else
					$this->data['players'][$user['UID']]['state']=1;
				break;
		}

		$all_compleate=true;
		foreach($this->data['players'] as $player)if($player['state']!=-1)$all_compleate=$all_compleate && $player['state']==1;
			
		if($all_compleate){
			$this->insuranceCompleate();
		}
	}
	
	function turn($user, $type){
			
			if($this->data['state']!=3 || $user['UID']!=$this->data['current_player']) return;
			switch($type){
				case 'stand':
					if($this->data['split'] && !$this->data['players'][$user['UID']]['split'])break;
					if($this->data['split'] && $this->data['players'][$user['UID']]['split']){
						$this->data['players'][$user['UID']]['split_state']=1;
						$this->data['players'][$user['UID']]['split_message']='Stand';
					}
					else	{
						$this->data['players'][$user['UID']]['state']=1;
						$this->data['players'][$user['UID']]['message']='Stand';
					}					
					$this->nextStep();
					break;
				case 'double':
					if(!(count($this->data['players'][$user['UID']]['cards'])==2 &&  !$this->data['players'][$user['UID']]['split']))break;
					if($this->data['split'] && !$this->data['players'][$user['UID']]['split'])break;
					if($this->data['split'] && $this->data['players'][$user['UID']]['split'])
						$amount=floor($this->data['players'][$user['UID']]['split_bet']);
					else
						$amount=floor($this->data['players'][$user['UID']]['bet']);
					
					
					if($amount && $amount<=$this->data['players'][$user['UID']]['wallet'] ) //&& $user->transaction(-$amount, array('type' => 'bet', 'gamebet' => $this->ds['g_key'])))
					{
						if($this->data['split'] && $this->data['players'][$user->ds['UID']]['split']){
							$this->data['players'][$user['UID']]['split_bet']+=$amount;
							$this->data['players'][$user['UID']]['wallet']-=$amount;
						}else{
							$this->data['players'][$user['UID']]['bet']+=$amount;
							$this->data['players'][$user['UID']]['wallet']-=$amount;
						}
						$this->ds['g_bet']+=$amount;
						$suit=mt_rand(0,3);
						$card=mt_rand(1,13);
						$this->data['players'][$user['UID']][$this->data['split']?'split':'cards'][]=$this->suits[$suit].' '.$this->cards[$card-1];
						$this->calcQty();
						$this->data['players'][$user['UID']][$this->data['split']?'split_state':'state']=1;
						if( $this->data['players'][$user['UID']][$this->data['split']?'split_qty':'qty']>21 )
							$this->data['players'][$user['UID']][$this->data['split']?'split_message':'message']='Busted';
					}
					$this->nextStep();					
					break;
				case 'hit':
					if($this->data['split'] && !$this->data['players'][$user['UID']]['split'])break;
					$suit=mt_rand(0,3);
					$card=mt_rand(1,13);
					$this->data['players'][$user['UID']][$this->data['split']?'split':'cards'][]=$this->suits[$suit].' '.$this->cards[$card-1];
					$this->calcQty();
					if( $this->data['players'][$user['UID']][$this->data['split']?'split_qty':'qty']>=21 )
						$this->data['players'][$user['UID']][$this->data['split']?'split_state':'state']=1;
					if( $this->data['players'][$user['UID']][$this->data['split']?'split_qty':'qty']>21 )
						$this->data['players'][$user['UID']][$this->data['split']?'split_message':'message']='Busted';
					$this->nextStep();
					break;
				case 'split':
					$amount=floor($this->data['players'][$user['UID']]['bet']);
					if( !$this->data['players'][$user['UID']]['split']  && $amount<=$this->data['players'][$user['UID']]['wallet']){
						$this->data['players'][$user['UID']]['split_bet']=$amount;
						$this->data['players'][$user['UID']]['wallet']-=$amount;
						
						$this->data['players'][$user['UID']]['split']=array();
						$this->data['players'][$user['UID']]['split'][]=array_pop($this->data['players'][$user['UID']]['cards']);
						
						$this->data['players'][$user['UID']]['cards'][]=$this->suits[mt_rand(0,3)].' '.$this->cards[mt_rand(0,12)];
						$this->data['players'][$user['UID']]['split'][]=$this->suits[mt_rand(0,3)].' '.$this->cards[mt_rand(0,12)];
						$this->calcQty();
						
						if( $this->data['players'][$user['UID']]['qty']==21 )
							$this->data['players'][$user['UID']]['state']=1;
						else
							$this->data['players'][$user['UID']]['state']=0;
						
						if( $this->data['players'][$user['UID']]['split_qty']==21 )
							$this->data['players'][$user['UID']]['split_state']=1;
						else
							$this->data['players'][$user['UID']]['split_state']=0;
						$this->data['split']=1;
						
						
						if(substr($this->data['players'][$user['UID']]['split'][0],3)=='ca' && substr($this->data['players'][$user['UID']]['cards'][0],3)=='ca'){
							$this->data['split']=0;
							$this->data['players'][$user['UID']]['state']=1;
							$this->data['players'][$user['UID']]['split_state']=1;
						}
						
						
					}else{
						$this->data['players'][$user['UID']]['state']=1;
					}
					$this->nextStep();
					break;
			}
	}
	
	function command($user,$post) {
		switch($post['command'])
		{
			case 'new-wallet':
				if(isset($this->data['players'][$user['UID']])){
					$this->data['players'][$user['UID']]['wallet']=cashToInt($post['wallet']);
					$this->save();
				}
				break;
			case 'name':
				if(isset($this->data['players'][$user['UID']])){
					$this->data['players'][$user['UID']]['name']=$post['name'];
					$this->save();
				}
				$_SESSION['name']=$post['name'];
				break;
			case 'state':
				return $this->getState($user);
			case 'join':
				return $this->changeJoin($user,$post);
			case 'place_bet':
				return $this->placeBet($user,$post['bet']);
			case 'ready':
				return $this->setReady($user);
			case 'insurance':
				return $this->insurance($user,$post['type']);
			case 'turn':
				return $this->turn($user,$post['type']);
			case 'exit':
				if(isset($this->data['players'][$user['UID']])){
					
					unset($this->data['players'][$user['UID']]);
					$this->ds['g_players_current']--;
					$this->save();
					
				}
				break;
			case 'cancel-bet':
				if($this->data['state']<=1 && isset($this->data['players'][$user['UID']])){
					$this->data['players'][$user['UID']]['bet']=0;
					$this->data['players'][$user['UID']]['state']=-1;
					$this->save();
				}
				break;
		}
		return array('success'=>true,'user'=>json_encode($user));
	}	
	
	
	
	function createNew(){
		$this->data=array(
			'state' => 0,
			'players' => array(),
			'ltime' => time(),
			'cards' => array(),
			'qty' => 0,
			'current_player' => 0,
			'split'=>0
		);
		if(file_exists('bj_data.php')){
			include('bj_data.php');
			$this->data['cards']=$data['cards'];
			$this->data['qty']=$data['qty'];
			$this->data['players']=$data['players'];
			foreach($this->data['players'] as &$player){
				$player['state']=-1;
				$player['winner']=false;
				$player['split_state']=0;
			}
			
			$this->data['state']=1;
			$this->data['ltime']=intval(time())+$this->round_time;//time to begin
		}

    $this->ds = array(
	  'g_id' => time(),
      'g_bet' => 0,
      'g_players_current' => count($this->data['players']),
      'g_players_full' => 5,
      'g_time' => time(),
	  'g_status'=>'W'
      );
    $this->save();
  }
}