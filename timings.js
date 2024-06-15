function time()
{   let time=new Date()
    let hour=time.getHours()
    let mornev=time>=12?"PM":"AM";
    hour=hour%12;
    let newhour=hour.toString().padStart(2,"0");
    let minute=time.getMinutes().toString().padStart(2,0);
    let seconds=time.getSeconds().toString().padStart(2,0);
    let timenow=`${newhour}:${minute}:${seconds} ${mornev}`;
    document.getElementById("timing").textContent=timenow;
}
time();
setInterval(time,1000);