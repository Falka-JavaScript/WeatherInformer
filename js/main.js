$(document).ready(() => {
    
    console.log('start -> ok');

    $('#get_weather').click(()=>{
        console.log('get_weather button -> clicked');

        let cityName = $('#city').val();
        if(cityName==''){
            alert('Ви не вказали місто')
        }else{
            const apiKey = '76e51799ebf2483696f211428220909';
            let api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
            
            $.getJSON(api, (data)=>{
                console.log('api -> ok');
                console.log(data);
                
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
            });

        }
    });


    $('#reset_data').click(()=>{
        $('#city').val('');
        $('#display').html('');
    });

});