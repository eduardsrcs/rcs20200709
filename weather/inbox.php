<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

if(file_exists('inboxWeather.json') and filemtime('inboxWeather.json') > time() - 300) {
  echo file_get_contents('inboxWeather.json');
} else {
  $info = file_get_contents('https://www.inbox.lv/api/weather');
  file_put_contents('inboxWeather.json', $info);
  file_put_contents('cond.txt', 'File update time: ' . date('Y-m-d H-i-s', filemtime('inboxWeather.json')) . "\n");
  file_put_contents('cond.txt', 'Script call time: ' . date('Y-m-d H-i-s', time() ), FILE_APPEND);
  echo $info;
}