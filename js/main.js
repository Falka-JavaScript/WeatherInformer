$(document).ready(() => {
    
    console.log('start -> ok');

    $('#get_weather').click(()=>{
        console.log('get_weather button -> clicked');
        let api = 'http://api.weatherapi.com/v1/current.json?key=76e51799ebf2483696f211428220909&q=Sankt Polten&aqi=no';
        $.getJSON(api, (data)=>{
            console.log('api -> ok');
            console.log(data);
        })
    });
});