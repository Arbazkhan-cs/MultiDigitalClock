let caption = document.querySelector(".caption");

let time_zone;
let ringtoon = new Audio("/Clock/beep_beep.mp3");
// =============================================Clock========================================
const clock = ()=>{ 
    // Time
    time();

    // Am/Pm
    am_pm();

    // Days
    day();
} 

// Am/Pm====================================
const am_pm = ()=>{
    // Am/Pm
    let date = new Date();
    let h = date.getHours();
    if(h>=12)
        time_zone = "pm";
    else
        time_zone = "am"
    document.getElementsByClassName("am-pm")[0].innerHTML = time_zone
}

// time===================================
const time = ()=>{
    // Time
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let t = h+" : "+m+" : "+s
    document.getElementsByTagName("span")[0].innerHTML = t
}

// Days=================================
const day = ()=>{
    // Days
    let date = new Date();
    let day = date.getDay();
    if(day == 0)
        document.getElementsByClassName("day")[0].innerHTML = "Sun"
    else if(day == 1)
        document.getElementsByClassName("day")[0].innerHTML = "Mon"
    else if(day == 2)
        document.getElementsByClassName("day")[0].innerHTML = "Tue"
    else if(day == 3)
        document.getElementsByClassName("day")[0].innerHTML = "Wed"
    else if(day == 4)
        document.getElementsByClassName("day")[0].innerHTML = "Thu"
    else if(day == 5)
        document.getElementsByClassName("day")[0].innerHTML = "Fri"
    else if(day == 6)
        document.getElementsByClassName("day")[0].innerHTML = "Sat"
    else
        document.getElementsByClassName("day")[0].innerHTML = "Network Error"
}

id = setInterval(clock, 1000)




// =========================================== Menu ====================================

// =================Setting Logo============================
let menu = document.querySelector(".menu");
let setting = document.querySelector(".setting");
setting.onclick = ()=>{
    setting.style.right = ""
    menu.classList.toggle("active");
}


// ======================Time Zone  Option=============================
let Menu = document.querySelectorAll(".menu")
span = document.getElementsByTagName("span")[0]

Menu[0].lastElementChild.firstElementChild.onmouseenter = ()=>{
    caption.innerHTML = "Time Zone";
}
Menu[0].lastElementChild.firstElementChild.onmouseleave = ()=>{
    caption.innerHTML = "Clock"
}

Menu[0].lastElementChild.firstElementChild.onclick = ()=>{
    clearInterval(id)
    clearInterval(id2)
    clearInterval(interval)

    
    let timer = document.querySelectorAll(".timer")
    for(let i=0;i<timer.length;i++){
        timer[i].style.display = "none"
    }
    Menu[0].lastElementChild.firstElementChild.onmouseleave = ()=>{
        caption.innerHTML = "Time Zone"
    }
    
    span.innerHTML = "GMT+5:30"
    document.getElementsByClassName("am-pm")[0].innerHTML = "IST"  
    document.getElementsByClassName("day")[0].innerHTML = "India"  
}



// ====================Other Options=============================
let First_li = Menu[0].firstElementChild.nextElementSibling;
let Second_li = First_li.nextElementSibling;
let Third_li = Second_li.nextElementSibling;
let Fourth_li = Third_li.nextElementSibling;



// =========================Time Option=============================
Second_li.onmouseenter = ()=>{
    caption.innerHTML = "Clock";
}
Second_li.onmouseleave = ()=>{
    caption.innerHTML = "Clock"
}

let id2;

Second_li.onclick = ()=>{
    clearInterval(interval)
    caption.innerHTML = "Clock"

    Second_li.onmouseleave = ()=>{
        caption.innerHTML = "Clock"
    }

    let timer = document.querySelectorAll(".timer")
    for(let i=0;i<timer.length;i++){
        timer[i].style.display = "none"
    }
    document.getElementsByClassName("am-pm")[0].style.top = "50%"  
    document.getElementsByClassName("am-pm")[0].style.left = "10px"  

    id2 = setInterval(clock, 1000);
}



// ========================Date Option=============================
Fourth_li.onmouseenter = ()=>{
    caption.innerHTML = "Date";
}
Fourth_li.onmouseleave = ()=>{
    caption.innerHTML = "Clock"
}

Fourth_li.onclick = ()=>{
    clearInterval(id)
    clearInterval(id2)
    clearInterval(interval)

    Fourth_li.onmouseleave = ()=>{
        caption.innerHTML = "Date"
    }


    let timer = document.querySelectorAll(".timer")
    for(let i=0;i<timer.length;i++){
        timer[i].style.display = "none"
    }

    let date = new Date();
    let date_2 =  date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    span.innerHTML = date_2+" - "+month+" - "+year;
    document.getElementsByClassName("am-pm")[0].innerHTML = " "
    document.getElementsByClassName("day")[0].innerHTML = " "
}



// ======================Alerm Option===========================
First_li.onmouseenter = ()=>{
    caption.innerHTML = "Timer";
}
First_li.onmouseleave = ()=>{
    caption.innerHTML = "Clock"
}


First_li.onclick = ()=>{
    clearInterval(id)
    clearInterval(id2)
    clearInterval(interval)

    First_li.onmouseleave = ()=>{
        caption.innerHTML = "Timer"
    }


    // Setting the alerm to 0:0:0 
    let date = new Date('0', '0', '0', '00', '00', '00');
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    span.innerHTML = `0${h}`+" : "+`0${m}`+" : "+`0${s}`;

    // Adding Set button to set the alerm. 
    let start = document.getElementsByClassName("am-pm")[0]
    start.innerHTML = "Set";
    start.style.top = "37%";
    start.style.left = "4px";
    start.style.cursor = "pointer";
    document.getElementsByClassName("day")[0].innerHTML = ""; // Clearing the day space.


    // Setting the "^" char to select the alerm hour, minute and second.
    let timer = document.querySelectorAll(".timer")
    let select = document.querySelectorAll("select");


    for(let i=0;i<timer.length;i++){  // changing timer display none to inline
        timer[i].style.display = "inline"
    }


    for(let i=24; i>=0; i--){  // Hour Option
        let option = `<option value="${i}">${i}</option>`
        select[0].firstElementChild.insertAdjacentHTML("afterend", option)
    }


    for(let i=60; i>=0; i--){  // Minute Option
        let option = `<option value="${i}">${i}</option>`
        select[1].firstElementChild.insertAdjacentHTML("afterend", option)
    }


    for(let i=60; i>=0; i--){  // Second Option
        let option = `<option value="${i}">${i}</option>`
        select[2].firstElementChild.insertAdjacentHTML("afterend", option)

    }
    

    // Now Setting the function to add the alerm when clicking the Set button.
    let setAlarmBtn = document.getElementsByClassName("am-pm")[0]
    setAlarmBtn.onclick = ()=>{
        alerm_time= `${select[0].value}:${select[1].value}:${select[2].value}`; //accesing the values of the selected hour, minute and second to set the alerm
        span.innerHTML = alerm_time;
        console.log(alerm_time);
    }

    alerm_time = `${select[0].value}:${select[1].value}:${select[2].value}`;

    const ring = ()=>{  // adding the alert and ringing tune for the alerm
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let t = h+" : "+m+" : "+s
        if(alerm_time == t){
            ringtoon.play()
            ringtoon.loop = true
            let paused = alert("ringing...")
            if(paused == undefined)
                ringtoon.pause();
        }
    }

    setInterval(ring, 1000)
}


// ===================Stop Watch Option=======================
Third_li.onmouseenter = ()=>{
    caption.innerHTML = "Stop Watch";
}
Third_li.onmouseleave = ()=>{
    caption.innerHTML = "Clock"
}

let interval;
Third_li.onclick = ()=>{
    clearInterval(id)
    clearInterval(id2)
    
    
    let ti = document.querySelectorAll(".timer")
    for(let i=0;i<ti.length;i++){
        ti[i].style.display = "none"
    }
    
    Third_li.onmouseleave = ()=>{
        caption.innerHTML = "Stop Watch"
    }
    
    let secondss = 00
    let minutess = 00
    let milliSecondss = 00
    let timess = document.querySelector(".time");
    let started = document.querySelector(".am-pm");
    let reset = document.querySelector(".day");

    timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;
    started.innerHTML = "Start";
    reset.innerHTML = "Reset";
    started.style.top = "37%";
    started.style.left = "4px";
    started.style.cursor = "pointer";
    reset.style.cursor = "pointer";

    function starttimer(){
        milliSecondss++;
        if(milliSecondss<=9)
            timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;
        if(milliSecondss>9)
            timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`${milliSecondss}`;
        if(milliSecondss>60){
            secondss++;
            milliSecondss = 0;
            timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;
        }
        if(secondss>9){
            timess.innerHTML = `0${minutess}`+" : "+`${secondss}`+" : "+`${milliSecondss}`;
        }  
        if(secondss>60){
            minutess++;
            secondss = 0;
            milliSecondss = 0;
            timess.innerHTML = `0${minutess}`+" : "+`${secondss}`+" : "+`${milliSecondss}`;
        }
        if(minutess>9){
            timess.innerHTML = `${minutess}`+" : "+`${secondss}`+" : "+`0${milliSecondss}`;
        }

    }
    started.onclick = ()=>{
        container = document.querySelector(".clock");
        container.style.height = "20%";
        container.style.width = "17%";

        if(started.innerHTML == "Stop"){
            clearInterval(interval)

            started.innerHTML = "Start"
            if(minutess>9)
                timess.innerHTML = `${minutess}`+" : "+`${secondss}`+" : "+`0${milliSecondss}`;
            
            if(secondss>60)
                timess.innerHTML = `0${minutess}`+" : "+`${secondss}`+" : "+`${milliSecondss}`;
            
            if(milliSecondss<=9)
                timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;

            if(milliSecondss>9)
                timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`${milliSecondss}`;

            if(milliSecondss>60)
                timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;
        
            if(secondss>9)
                timess.innerHTML = `0${minutess}`+" : "+`${secondss}`+" : "+`${milliSecondss}`;
            

        }
        else{
            started.innerHTML = "Stop"
            interval = setInterval(starttimer);
        }

    }


    reset.onclick = ()=>{
        clearInterval(interval);
        milliSecondss = 0;
        secondss = 0;
        minutess = 0;
        timess.innerHTML = `0${minutess}`+" : "+`0${secondss}`+" : "+`0${milliSecondss}`;
    }
}


