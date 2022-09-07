// write js code here corresponding to favourites.html

var favdata = JSON.parse(localStorage.getItem("favourites")) || [];

window.addEventListener("load", function() {
    displayData(favdata);
});

function displayData(data) {
    document.querySelector("tbody").innerText = "";
    // event.preventDefault();
    data.map(function(ele) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = ele.match;
        var td2 = document.createElement("td");
        td2.innerText = ele.teamA;
        var td3 = document.createElement("td");
        td3.innerText = ele.teamB;
        var td4 = document.createElement("td");
        td4.innerText = ele.date;
        var td5 = document.createElement("td");
        td5.innerText = ele.venue;
        var td6 = document.createElement("td");
        td6.innerText = "delete";
        td6.style.color = "red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function() {
            deleteFav(ele)
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    })

}

function deleteFav(ele1) {
    var n = favdata.indexOf(ele1);
    favdata.splice(n, 1);

    localStorage.setItem("favourites", JSON.stringify(favdata));
    displayData(favdata);
}