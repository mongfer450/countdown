const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const time=document.getElementById('time');
const btn=document.getElementById('btn');
const btn_test=document.getElementById('btn_test');

const currentYear=new Date().getFullYear();
const newYearTime=new Date(`May 4  ${currentYear} 00:00:00`); 

function updateCountDown(){
    const currentTime=new Date();
    const diff=newYearTime-currentTime;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;

    days.innerHTML=d;
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerHTML=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s;

    if(d < 1){
        if(h < 1){
            if(m < 1){
                if(s < 1){
                    btn.style.display = "block";
                    time.style.display = "none";
                }
            }
        }
        
    }
}

btn.onclick=function(){
    message=document.getElementById('message').style.display='block';
    btn.remove();
}
setInterval(updateCountDown,1000) 


