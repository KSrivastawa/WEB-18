// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit", myFunction);

var matchesInput = []

    function myFunction(){
        event.preventDefault();

        var objDetails = {

            MatchNumber : document.querySelector("#matchNum").value,
            Team_A : document.querySelector("#teamA").value,
            Team_B : document.querySelector("#teamB").value,
            Date : document.querySelector("#date").value,
            Venue : document.querySelector("#venue").value,
           
        }

        matchesInput.push(objDetails);

        localStorage.setItem("schedule", JSON.stringify(matchesInput));

    }


