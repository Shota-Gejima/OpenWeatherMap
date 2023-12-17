const API_KEY = "b24c884bb7b3acd8666bea8edfad7b41";

$(function(){
	$('#btn').on('click', function(){
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
			dateType :'jsonp',
		}).done(function (date){
			$('#place').text(date.name);
			$('#temp_max').text(date.main.temp_max);
			$('#temp_min').text(date.main.temp_min);
			$('#humidity').text(date.main.humidity);
			$('#speed').text(date.wind.speed);
			$('#weather').text(date.weather[0].main);
			$('img').attr("src", "http://openweathermap.org/img/w/" + date.weather[0].icon + ".png");
			$('img').attr("alt",date.weather[0].main);
		}).fail(function (date){
			alert('通信に失敗しました。');
		});
	});
});