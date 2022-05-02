// write js code here corresponding to matches.html

  var matchesInput = JSON.parse(localStorage.getItem("schedule"));


  displayData(matchesInput);

  var matchesDetails = JSON.parse(localStorage.getItem("favourites")) || [];

  function displayData(data){

      data.forEach(function(elem){

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");

        td1.textContent = elem.MatchNumber;
        td2.textContent = elem.Team_A;
        td3.textContent = elem.Team_B;
        td4.textContent = elem.Date;
        td5.textContent = elem.Venue;
        td6.textContent = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";

        td6.addEventListener("click", function(){
            AddItem(elem)
        })
        
        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);

      });
  }


        function AddItem(elem){
            matchesDetails.push(elem);

            localStorage.setItem("favourites", JSON.stringify(matchesDetails));
        }


