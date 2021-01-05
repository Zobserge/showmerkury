<?php

$recepient = "Sergtestick@yandex.ru";
$sitename = "Merkury";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle ="Новая заявка с сайта \"$sitename\";
mail($recepient, $pagetitle, $message, "Content-type: text/plan; charset="\"utf-8\"\n From: $recepient");