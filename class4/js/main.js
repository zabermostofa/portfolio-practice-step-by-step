setInterval(() => {
    document.getElementById('datetime').innerHTML = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
}, 1000);