let frame = document.querySelector('.clock');
setInterval(() => {
    const time = new Date().toLocaleTimeString();

frame.innerHTML= `<h1>${time}</h1>`;

}, 1000);


let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let seconds = document.querySelector('#second');
setInterval(() => { 
    const time = new Date();
    let am_pm = ' AM ';
    if(time.getHours() > 12){
        am_pm = ' PM';
    }
   let hour24 = time.getHours();
   let hours12 = hour24 % 12 || 12;
    hour.innerHTML = hours12 < 10 ? '0' + hours12 : hours12;


    minute.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
   let  sec = time.getSeconds()  < 10 ? '0' + time.getSeconds() : time.getSeconds();
    seconds.innerHTML = sec + '' + am_pm;
 

}, 1000);


