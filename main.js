
function getTime() {

    var now = new Date();

    var hour = now.getHours();

    var minute = now.getMinutes();

    var second = now.getSeconds();

    (hour < 10) ? document.getElementById("hour").innerText = "0" + hour :
        document.getElementById("hour").innerText = + hour;

    (minute < 10) ? document.getElementById("minute").innerText = "0" + minute :
        document.getElementById("minute").innerText = minute;

    (second < 10) ? document.getElementById("second").innerText = "0" + second :
        document.getElementById("second").innerText = second;

}


setInterval(function () {
    getTime();

}, 1000);

// github.com/hgulese