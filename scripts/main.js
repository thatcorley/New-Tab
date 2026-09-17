function setDate() {
    var date = new Date()
    var currentTime = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
    document.getElementById("time").innerHTML = currentTime;
    // var currentDate = date.toLocaleDateString('en-GB',
    //     {
    //         weekday: 'long',
    //         day: 'numeric',
    //         year: 'numeric'
    //     });
    //document.getElementById("date").innerHTML = currentDate;
}

setInterval(function () {
    setDate();
    }, 1000);

const searchInput = document.getElementById("search-bar-input");
const searchSubmit = document.getElementById("search-bar-submit");

function searchGoogle() {
    const query = searchInput.value.trim();

    if (query) {
        window.open("https://www.google.com/search?q="+encodeURIComponent(query), "_blank");
    }
}

searchSubmit.addEventListener("click", searchGoogle);
searchInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        searchGoogle();
    }
})

setDate();