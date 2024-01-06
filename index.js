function clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mints = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var period = "PM";

    if(hours < 10){
        hours = "0" + hours;
    }
    if(mints < 10){
        mints = "0" + mints;
    }
    if(secs < 10){
        secs = "0" + secs;
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        period = "PM";
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + mints;
    document.getElementById('seconds').innerHTML = ":" + secs + " " + period;
}

setInterval(clock, 100);
