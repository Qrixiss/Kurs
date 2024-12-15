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
        url: 'send.php', // Укажите правильный путь к вашему PHP-файлу
        method: 'POST',
        data: {
            from: start,
            to: end
        },
        success: function(response) {
            alert("Ответ сервера: " + response);
        },
        error: function(xhr, status, error) {
            console.error("Ошибка при отправке заказа:", status, error);
            alert("Произошла ошибка. Проверьте консоль для подробностей.");
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
