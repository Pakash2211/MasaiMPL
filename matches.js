// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule")) || [];

window.addEventListener("load", function() {
    displayData(data)
});

function displayData(data) {
    document.querySelector("tbody").innerText = "";
    event.preventDefault();
    data.map(function(ele) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = ele.match
        var td2 = document.createElement("td");
        td2.innerText = ele.teamA;
        var td3 = document.createElement("td");
        td3.innerText = ele.teamB;
        var td4 = document.createElement("td");
        td4.innerText = ele.date;
        var td5 = document.createElement("td");
        td5.innerText = ele.venue;
        var td6 = document.createElement("td");
        td6.innerText = "favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function() {
            addFav(ele)
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    })
}

var favdata = JSON.parse(localStorage.getItem("favourites")) || [];

function addFav(data) {
    favdata.push(data);
    localStorage.setItem("favourites", JSON.stringify(favdata));
}

function filterVenue() {
    var sel = document.querySelector("#filterVenue").value;
    var fil = data.filter(function(ele) {
        if (ele.venue == sel) {
            return 1;
        } else if (sel == "none") {
            return 1;
        }
    })
    displayData(fil);
}