
        const btn = document.querySelector('.button');
        const apiKey = '8743265486ac45e4147f97bbe1db301a';
        let cityInput = document.querySelector('.inputCity');
        let summary = document.querySelector('.js-temp-summary');
        const errorMessage = document.querySelector('.js-message-display')

        btn.addEventListener('mouseover', (e) => {
            const react = btn.getBoundingClientRect()
            const x = e.pageX - react.left;
            const y = e.pageY - react.top;
            btn.style.setProperty('--posX', `${x}px`);
            btn.style.setProperty('--posY', `${y}px`);
        });

        function giveDay(){
        setInterval(whatTime,1000)
        function whatTime(){
            const now = new Date();
        const formatTime =now.toLocaleTimeString()
        }
        }

        function generateHtmlOfDay(){
            let dayHtml ='';
            const now = new Date();
            const formatTime =now.toLocaleTimeString()
            

        setInterval(generateHtmlOfDay, 1000)
        }

        btn.addEventListener('click', async() =>{
        const city =  cityInput.value;
        console.log(city);
        
        if (city) {
            try{
                const weatherData = await callTheWeatherApi(city);
                displayWeather(weatherData);
            }
            catch (error){
                throw error;

            }
        }else{
            errorDisplay()
        }
        
        });
        

        async function callTheWeatherApi(city) {
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                if (!response.ok) {
                throw new Error(`City Didn't fount ! ${response.statusText}`)
                }
                const data = await response.json()
                return data;  
            }
            catch(error){
                console.log(error); 
            }
           
        };

        function displayWeather(weatherData){
            if(cityInput){
                cityInput.value = ''
            }
            dataForDefault = weatherData;
            let tempSummaryHtml;
            const {name: city, main:{temp, humidity}, weather:[{id, description}]} = weatherData;
            console.log(city, temp - 273.15, humidity, id, description );
            errorMessage.innerHTML = `<h2 class="day-name">${city}</h2>`
            const temperature = (temp - 273.15).toFixed(1)
            const now = new Date();
            const formatTime = now.toLocaleTimeString();
            const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const weekName = weekDays[now.getDay()]
            tempSummaryHtml = `
            <h2 class="day-name">${weekName}</h2>
                    <div class="time">${formatTime}</div>
                    <div class="data-of-day">
                        <p class="temperature">${temperature}°C°F</p>
                        <p class="description">${description}</p>
                    </div>
                    <div class="humidity">humidity: ${humidity}</div>
                    <div class="image-of-the-climate">
                        <img src="/images/image(${Math.floor(Math.random() * 4) + 1}).svg" alt="">
                    </div>

            `
            summary.innerHTML = tempSummaryHtml;

        }
        
        function errorDisplay(){
            errorMessage.innerHTML = '<h2 class="day-name error-message">Country Not Found</h2>'
        }






