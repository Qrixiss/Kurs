<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from = isset($_POST['from']) ? $_POST['from'] : 'Не указано';
    $to = isset($_POST['to']) ? $_POST['to'] : 'Не указано';
    $name = isset($_POST['username']) ? $_POST['username'] : 'Не указано';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : 'Не указано';

    $message = "Заказ такси:\nОткуда: $from\nКуда: $to\n Имя: $name\n Телефон: $phone";

    $botToken = "6423951514:AAE848xYBRpAx92gihFxrnWyXr70-ULgev0";
    $chatId = "-1002372625214"; 
    $url = "https://api.telegram.org/bot$botToken/sendMessage";

    $data = [
        'chat_id' => $chatId,
        'text' => $message
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        echo "Ошибка при отправке!";
    } else {
        echo "Сообщение успешно отправлено!";
    }
} else {
    echo "Некорректный метод запроса.";
}
