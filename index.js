function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// ==============================

const targetBtn = document.querySelector(".tab button:nth-child(2)");

setTimeout(() => {
    targetBtn.click();
    console.log("clicked 0");
    testFun();
}, 4000);

function testFun() {
    console.log("clicked 2");
    let content = document.querySelector(".container .tabcontent");
    console.log(content);
}

console.log("clicked 1");
