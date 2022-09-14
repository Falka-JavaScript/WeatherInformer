function printData(data){
    
    let name = data.location.name;
    let region =data.location.region;
    let country = data.location.country;
    let localTime = data.location.localtime;

    let temp_c = data.current.temp_c;
    let text = data.current.condition.text;
    let icon = `https:${data.current.condition.icon}`;  
    let wind_kph = data.current.wind_kph;
    let wind_dir = data.current.wind_dir;   
    let vis_km = data.current.vis_km;

    if($('#current_selector').is(':checked')){
        name = data.location.name;
        region =data.location.region;
        country = data.location.country;
        localTime = data.location.localtime;

        temp_c = data.current.temp_c;
        text = data.current.condition.text;
        icon = `https:${data.current.condition.icon}`;  
        wind_kph = data.current.wind_kph;
        wind_dir = data.current.wind_dir;   
        vis_km = data.current.vis_km;
    }else{
        let tempHour =0;
        if($('#tomorrow_morning_sector').is(':checked')){ tempHour=9;};
        if($('#tomorrow_midday_sector').is(':checked')){tempHour=14;};
        if($('#tomorrow_evening_sector').is(':checked')){tempHour=19;};

        localTime = data.forecast.forecastday[1].hour[tempHour].time;
        
        temp_c = data.forecast.forecastday[1].hour[tempHour].temp_c;
        console.log(data.forecast.forecastday[1].hour[tempHour]);
        
        text = data.forecast.forecastday[1].hour[tempHour].condition.text;
        icon = `https:${data.forecast.forecastday[1].hour[tempHour].condition.icon}`;  
        wind_kph = data.forecast.forecastday[1].hour[tempHour].wind_kph;
        wind_dir = data.forecast.forecastday[1].hour[tempHour].wind_dir;   
        vis_km = data.forecast.forecastday[1].hour[tempHour].vis_km;

    }   /*
        if($('#tomorrow_morning_sector').is(':checked')){
            console.log("morning");
            
        }else if($('#tomorrow_midday_sector').is(':checked')){
            console.log("2");
        }else if($('#tomorrow_evening_sector').is(':checked')){
            console.log("3");
        }*/
        let out = `
        <img src = ${icon} class="icon"/>
        <table width="100%" border=1>
        <tr>
        <th>Параметри</th>
        <th>Значення</th>
        </tr> 

        <tr>
        <td class="param">Місто</th>
        <td class="value">${name}</th>
        </tr> 

        <tr>
        <td class="param">Регіон</th>
        <td class="value">${region}</th>
        </tr> 


        <tr>
        <td class="param">Країна</th>
        <td class="value">${country}</th>
        </tr> 


        <tr>
        <td class="param">Час</th>
        <td class="value">${localTime}</th>
        </tr> 


        <tr>
        <td class="param">Температура</th>
        <td class="value">${temp_c}</th>
        </tr> 

        <tr>
        <td class="param">Хмарність</th>
        <td class="value">${text}</th>
        </tr> 


        <tr>
        <td class="param">Швидкість вітру</th>
        <td class="value">${wind_kph}</th>
        </tr> 


        <tr>
        <td class="param">Напрям вітру</th>
        <td class="value">${wind_dir}</th>
        </tr> 


        <tr>
        <td class="param">Видимість</th>
        <td class="value">${vis_km}</th>
        </tr> 

        `
        $('#display').html(out);
    
}

$(document).ready(() => {
    
    console.log('start -> ok');

    $('#get_weather').click(()=>{
        console.log('get_weather button -> clicked');
        
        

        
        let cityName = $('#city').val();
        if(cityName==''){
            alert('Ви не вказали місто')
        }else{
            const apiKey = '76e51799ebf2483696f211428220909';
            let api =``;
            if($('#current_selector').is(':checked')){
                api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
            }else{
                api = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey} &q=${cityName}&days=2&aqi=no&alerts=no`
            }
           
           
            $.getJSON(api, (data)=>{
                console.log('api -> ok');
                console.log(data);
                printData(data);
            });

        }
    });


    $('#reset_data').click(()=>{
        $('#city').val('');
        $('#display').html('');
    });

});