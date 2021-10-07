let time = setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    hours < 10? hours = '0'+ hours:hours = hours;
    min < 10? min = '0'+ min:min = min; 

    document.getElementById("time").innerHTML = (hours + ":" + min);
  }, 1000);

fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=184ad7ec4ab06ee22d7a3fe07e6fe886')
.then(function (resp){return resp.json()})
.then(function (data){
    console.log(data);
    document.querySelector('#temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg';
 })

Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();


switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}
document.getElementById('date').innerHTML = (Day + " " + fMonth + " " + Year);


$('[data-slider]').slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1
});


$('#admin').on('click', function(){ //При клике по элементу с id=price выполнять...
        $.ajax({
            url: 'administration.html', //Путь к файлу, который нужно подгрузить
            type: 'GET',
            beforeSend: function(){
                $('#container').empty(); //Перед выполнением очищает содержимое блока с id=content
            },
            success: function(responce){        
                    $('#container_forOtherPages').append(responce); //Подгрузка внутрь блока с id=content
            },
            error: function(){
                alert('Error!');            
            }
        });
    });