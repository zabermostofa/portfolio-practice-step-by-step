setInterval(() => {
    document.getElementById("datetime").innerHTML = new Date().toDateString() + ' ' + new Date().toLocaleTimeString()
}, 1000);