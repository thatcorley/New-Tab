setInterval(function () {
    var date = new Date()
    var currentTime = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
    var currentDate = date.toLocaleDateString('en-GB',
        {
            weekday: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
    }, 1000);