function doDate()
{
    var now = new Date();
    var cur_time=now.getDate()+'-'+(now.getMonth()+1)+"-"+now.getFullYear()+
        ' ';
    if (now.getHours()<10){
        cur_time+="0"+now.getHours();
    }
    else{
        cur_time+=now.getHours();
    }
    cur_time+=":";
    if (now.getMinutes()<10){
        cur_time+="0"+now.getMinutes();
    }
    else{
        cur_time+=now.getMinutes();
    }
    cur_time+=":";
    if (now.getSeconds()<10){
        cur_time+="0"+now.getSeconds();
    }
    else{
        cur_time+=now.getSeconds();
    }
    document.getElementById("time").innerHTML = cur_time;
}

setInterval(doDate, 1000);