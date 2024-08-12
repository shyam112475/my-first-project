const subBtn = document.getElementById('sbm-btn');

const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');

const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer_')

const day = document.getElementById('day');

const month = document.getElementById('date');

// get day

var dayNum = new Date();
var printDay = dayNum.getDay()
Arr = ["sunday", "monday", "tusday", "wednesday", "thusday", "frinday", "saturday"]
result = Arr[printDay]
day.innerText = result;

// get month and date

var printMonth = dayNum.getMonth();
arrMonth = ["jan", "fab", "march", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"]
result2 = arrMonth[printMonth]
var printDate = dayNum.getDate();
month.innerText = `${printDate}  ${result2}`;




const getInfo = async (event) => {
   event.preventDefault();
   let cityval = cityName.value;

   if (cityval === "") {
      console.log(cityName);
      city_name.innerText = `Please write the name of your city before searching`;
   } else {
      try {
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2571324b970300ed66306950a2ea9512`;
         const response = await fetch(url);

         if (!response.ok) {
            throw new Error(`City not found`);
            data_hide.classList.add('data_hide');
         }

         const data = await response.json();
         const arrData = [data];
         city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
         temp.innerText = `${arrData[0].main.temp} °C`;


         //condition to cheak sunny or cloudy

         //  temp_status.innerText = arrData[0].weather[0].main;

         const tempMood = arrData[0].weather[0].main;

         if (tempMood == "Clear") {
            temp_status.innerHTML =
               '<i class="fas fa-sun" style ="color:#eccc68"></i>'
         }
         else if (tempMood == "Clouds") {
            temp_status.innerHTML =
               '<i class="fas fa-cloud" style ="color:#f1f2f6"></i>'
         }
         else if (tempMood == "Rain") {
            temp_status.innerHTML =
               '<i class="fas fa-cloud-rain" style ="color:#a4b0be"></i>'
         }
         else {
            temp_status.innerHTML =
               '<i class="fas fa-sun" style ="color:#eccc68"></i>'
         }

         data_hide.classList.remove('data_hide')
      } catch (error) {
         console.log(error);
         city_name.innerText = `${error} - Please write the name of your city properly`;
         data_hide.classList.add('data_hide')
      }
   }
}

subBtn.addEventListener('click', getInfo);









