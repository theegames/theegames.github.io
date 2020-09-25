<?
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s")." GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Cache-Control: post-check=0,pre-check=0", false);
header("Cache-Control: max-age=0", false);
header("Pragma: no-cache");
ini_set('display_errors', 0);
error_reporting(0);
session_name("bj");
session_start();

if(empty($_POST) && isset($_REQUEST) && count($_REQUEST)>0)$_POST=$_REQUEST;

require_once __DIR__ . '/system.php';
$game = new BjModel();

$game->semWait();
$game->load();

if ($game->ds['g_status'] != 'W') {
  $game->createNew();
} else {
  $game->tick();
}

header('Content-Type: application/json');
echo json_encode($game->command($_SESSION, $_POST));

$game->semRelease();
