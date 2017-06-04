<?php

	$name = $_POST['name'];
	$message = 'Сообщение от пользователя: '.$name;

	mail('ov.s.ust@gmail.com', 'Рассылка от Mr.Burger', $message);
?>