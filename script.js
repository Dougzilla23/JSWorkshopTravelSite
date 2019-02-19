

// clock
function clock() {
    var time = new Date()
    year = time.getFullYear(),
        month = time.getDate(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    document.querySelectorAll('.clock')[0].innerHTML = harold(year) + ":" + harold(month) + ":" + harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(clock, 1000);
//end clock