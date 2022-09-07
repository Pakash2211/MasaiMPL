// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit", addData);
var data = JSON.parse(localStorage.getItem("schedule")) || [];

function addData() {
    event.preventDefault();
    var match = document.querySelector("#matchNum");
    var teamA = document.querySelector("#teamA");
    var teamB = document.querySelector("#teamB");
    var date = document.querySelector("#date");
    var venue = document.querySelector("#venue");

    var obj = {
        match: match.value,
        teamA: teamA.value,
        teamB: teamB.value,
        date: date.value,
        venue: venue.value
    }
    data.push(obj);
    localStorage.setItem("schedule", JSON.stringify(data));

    match.value = "";
    teamA.value = "";
    teamB.value = "";
    date.value = "";
    venue.value = "";

}