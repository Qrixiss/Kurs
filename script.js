function initMap() {
    var map = new DG.Map('map', {
        center: [54.4354, 50.8085],
        zoom: 14
    });
}
function callTaxi() {
    var from = $('#destination_from').val();
    var to = $('#destination_to').val();

    // Проверка на заполненность полей
    if (from === "" || to === "") {
        alert("Пожалуйста, заполните оба поля!");
        return;
    }

    // AJAX-запрос для отправки данных на сервер
    $.ajax({
        url: 'send_order.php',
        type: 'POST',
        data: {
            from: from,
            to: to
        },
        success: function(response) {
            alert("Заказ отправлен в Telegram!");
        },
        error: function(xhr, status, error) {
            alert("Ошибка при отправке заказа!");
        }
    });
}
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
        });
    } else {
        alert("Геолокация не поддерживается");
    }
}