<?
session_name("bj");
session_start();

require_once __DIR__ . '/system.php';

$game = new BjModel();
$game->load();

if (!isset($_SESSION['UID'])) {
  $_SESSION['UID'] = $game->getNextUID();
  $_SESSION['wallet'] = 0;
  $_SESSION['name'] = '';
}

$allow_join = FALSE;
if ($game->ds['g_status'] == 'W' && $game->data['state'] <= 1 && $game->ds['g_players_current'] < $game->ds['g_players_full'] && !isset($game->data['players'][$_SESSION['UID']])) {
  $allow_join = TRUE;
}

$game_process = ($game->data['state'] == 2 || $game->data['state'] == 3);
$finish_game = $game->data['state'] == 4 || $game->data['state'] <= 1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multiplayer BlackJack game</title>
  <link rel="stylesheet" href="res/bj.css?v=2">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Aladin" rel="stylesheet"> 
  <script src="res/bj.js?v=2"></script>
  <style>
    .aladin-font{
      font-family: Aladin;
    }
  </style>
</head>
<body>
  <div class="bj-conteiner">
  <img src="img/table_blackjack.png" class="table">

  <div class="user-info"></div>

  <div class="start-panel<?= !$finish_game && !$game_process && !$allow_join && !(isset($game->data['players'][$_SESSION['UID']]) && $game->data['players'][$_SESSION['UID']]['state'] == -1) ? ' visible' : '' ?>">
    <div class="text"></div>
    <div class="text">Placing bets <span class='secs'></span></div>
    <div class="text">
      <div class="center">
        <button class="cancel-bet">Cancel bet</button>
      </div>
    </div>
    <div class="new-wallet">
      <div class="text input-text">Insufficient funds, top up your wallet</div>
      <div class="text"><input type="text" class="input-newwallet" value="">
      </div>
      <div class="text text-error"></div>
      <div class="text">
        <div class="center">
          <button class="ok-wallet">Ok</button>
          <button class="exit-game">Exit</button>
        </div>
      </div>
    </div>
  </div>

  <div class="input-panel">
    <div class="text input-text">Placing bets</div>
    <div class="text"><input type="text" class="input-value" value=""></div>
    <div class="text text-error"></div>
    <div class="text">
      <div class="center">
        <button class="ok-input">Ok</button>
        <button class="cancel-input">Cancel</button>
      </div>
    </div>
  </div>

  <div class="win-panel">
    <div class="text"></div>
  </div>

  <div class="insurance-panel<?= (
    $game_process &&
    isset($game->data['players'][$_SESSION['UID']]) &&
    $game->data['players'][$_SESSION['UID']]['state'] != -1 &&
    !$game->data['players'][$_SESSION['UID']]['insurance'] &&
    $game->data['players'][$_SESSION['UID']]['qty'] != 21 &&
    $game->data['state'] == 2) ? ' visible' : ''
  ?>">
    <div class="text">Make insurance bet?<span class='secs'></span></div>
    <button class="insurance-yes">Yes</button>
    <button class="insurance-no">No</button>
  </div>

  <div class="control-panel<?= (
    $game_process &&
    isset($game->data['players'][$_SESSION['UID']]) &&
    (
      $game->data['players'][$_SESSION['UID']]['state'] != 1 ||
      ($game->data['players'][$_SESSION['UID']]['split_state'] != 1 && $game->data['players'][$_SESSION['UID']]['split'])
    ) &&
    $game->data['current_player'] == $_SESSION['UID'] &&
    $game->data['state'] == 3
  ) ? ' visible' : ''
  ?>">
    <div class="text">Your choice<span class='secs'></span></div>
    <button class="control-split"<?= isset($game->data['players'][$_SESSION['UID']]['cards']) && count($game->data['players'][$_SESSION['UID']]['cards']) == 2 && substr($game->data['players'][$_SESSION['UID']]['cards'][0], 3) == substr($game->data['players'][$_SESSION['UID']]['cards'][1], 3) && !isset($game->data['players'][$_SESSION['UID']]['split']) ? '' : ' style="display:none;"' ?>>
      Split
    </button>
    <button class="control-hit">Hit</button>
    <button class="control-double">Double</button>
    <button class="control-stand">Stand</button>

  </div>

  <div class="d-qty<?= $finish_game ? ' visible' : '' ?>"><?= $finish_game ? $game->data['qty'] : '0' ?></div>

  <div class="p1-qty"></div>
  <div class="p1-qty-s"></div>
  <div class="p1-text"></div>
  <div class="p1-name"></div>
  <div class="p1-bet"></div>

  <div class="p2-qty"></div>
  <div class="p2-qty-s"></div>
  <div class="p2-text"></div>
  <div class="p2-name"></div>
  <div class="p2-bet"></div>

  <div class="p3-qty"></div>
  <div class="p3-qty-s"></div>
  <div class="p3-text"></div>
  <div class="p3-name"></div>
  <div class="p3-bet"></div>

  <div class="p4-qty"></div>
  <div class="p4-qty-s"></div>
  <div class="p4-text"></div>
  <div class="p4-name"></div>
  <div class="p4-bet"></div>

  <div class="p5-qty"></div>
  <div class="p5-qty-s"></div>
  <div class="p5-text"></div>
  <div class="p5-name"></div>
  <div class="p5-bet"></div>

  <? $i = 0; ?>
  <? foreach ($game->data['cards'] as $card): ?>
    <? if ($i == 0 && !$finish_game): ?>
      <div id="dealer-first" class="card card-d bc" style="top:158px;left:484px;"></div>
    <? else: ?>
      <div <?= $i == 0 ? 'id="dealer-first" ' : '' ?>class="card card-d <?= $card ?>" style="top:158px;left:<?= 484 + $i * 13 ?>px;"></div>
    <? endif ?>
    <? $i++; ?>
  <? endforeach ?>

  <? $x_arr = array(50, 253, 483, 710, 915); ?>
  <? $y_arr = array(320, 385, 405, 385, 320); ?>
  <? foreach ($game->data['players'] as $player): ?>
    <? $y = 0; ?>
    <? foreach ($player['cards'] as $card): ?>
      <div
        class="card-<?= $player['pos'] ?> card-nonsplit-<?= $player['pos'] ?> card <?= $card ?>"
        style="top:<?= $y_arr[$player['pos'] - 1] + $y * 20 ?>px;left:<?= $x_arr[$player['pos'] - 1] - ($player['split'] ? 15 : 0) ?>px;"></div>
      <? $y++; ?>
    <? endforeach ?>
    <? if ($y): ?>
      <div class="card-holder card-holder-<?= $player['pos'] ?>-s<?= $player['split'] ? -1 : 0 ?>" style="top:<?= $y_arr[$player['pos'] - 1] ?>px;left:<?= $x_arr[$player['pos'] - 1] - ($player['split'] ? 15 : 0) ?>px;height:<?= 65 + 20 * ($y - 1) ?>px;"></div>
    <? endif ?>
    <? $y = 0; ?>
    <? if ($player['split']) foreach ($player['split'] as $card): ?>
      <div class="card-<?= $player['pos'] ?> card-split-<?= $player['pos'] ?> card <?= $card ?>" style="top:<?= $y_arr[$player['pos'] - 1] + $y * 20 + 20 ?>px;left:<?= $x_arr[$player['pos'] - 1] + 15 ?>px;"></div>
      <? $y++; ?>
    <? endforeach ?>
    <? if ($y): ?>
      <div class="card-holder card-holder-<?= $player['pos'] ?>-s1" style="top:<?= $y_arr[$player['pos'] - 1] + 20 ?>px;left:<?= $x_arr[$player['pos'] - 1] + 15 ?>px;height:<?= 65 + 20 * ($y - 1) ?>px;"></div>
    <? endif ?>
  <? endforeach ?>

  <div class="bj_t1"></div>
  <div class="bj_t2"></div>
  <div class="bj_t3"></div>
  <div class="bj_t4"></div>
  <div class="bj_t5"></div>

  
  <button class="button-sit sit-1 set-sit-1 aladin-font">Sit</button>
  <button class="button-sit sit-2 set-sit-2 aladin-font">Sit</button>
  <button class="button-sit sit-3 set-sit-3 aladin-font">Sit</button>
  <button class="button-sit sit-4 set-sit-4 aladin-font">Sit</button>
  <button class="button-sit sit-5 set-sit-5 aladin-font">Sit</button>

  <button class="button-sit sit-1 set-ready-1 set-ready aladin-font">Ready</button>
  <button class="button-sit sit-2 set-ready-2 set-ready aladin-font">Ready</button>
  <button class="button-sit sit-3 set-ready-3 set-ready aladin-font">Ready</button>
  <button class="button-sit sit-4 set-ready-4 set-ready aladin-font">Ready</button>
  <button class="button-sit sit-5 set-ready-5 set-ready aladin-font">Ready</button>
</div>
</body>
</html>