let time=null;
let durationinterval=0;
let starttime=0;
let started=false;
function start()
{   if(!started)
    {   starttime=Date.now()-durationinterval;
        time=setInterval(update,10);
        started=!started;
    }
}
function stop()
{   if(started)
    {   clearInterval(time);
        durationinterval=Date.now()-starttime;
        started=!started;
    }
}
function clear()
{   started=false;
    document.getElementById("time").textContent=`00:00:00:00`; 
}
function update()
{   durationinterval=Date.now()-starttime;

    let hours=Math.floor(durationinterval/(3600*1000));
    let minutes=Math.floor((durationinterval/(1000*60)%60));
    let seconds=Math.floor((durationinterval/(1000)%60));
    let milliseconds=Math.floor((durationinterval%(1000)/10));

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    document.getElementById("time").textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}