// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function changeColors()
{
  setTimeout(function() {
    var first = document.getElementById('first');
    first.style.color = "red";

    setTimeout(function(){
      var second = document.getElementById('second');
      second.style.color = "blue";

      setTimeout(function(){
        var third = document.getElementById('third');
        third.style.color = "yellow";

        setTimeout(function(){
          var fourth = document.getElementById('fourth');
          fourth.style.color = "pink";

        }, 1000)
      }, 1000)
    }, 1000);
  }, 1000);
}


function grabData()
{
  var dataDiv = document.getElementById("apiData");

  apiData.innerHTML = "Loading...";

  $.get("https://data.sfgov.org/resource/jjew-r69b.json", 

    function(response)
    { 
      var htmlString = '';

      for (var i = 0; i < response.length; i++)
      {
        var blah = response[i].applicant;
        htmlString = htmlString + '<div class="food-truck">'
        htmlString = htmlString + "<h2 onclick='changeTruckColor(this)'>" + blah + "</h2>";
        htmlString = htmlString + '</div>'
        console.log(response[i]);
      }

      apiData.innerHTML = htmlString;
    });
}

function changeTruckColor(truckDiv)
{
  if (truckDiv.style.color === "black")
  {
    truckDiv.style.color = "red";
  }
  else {
    truckDiv.style.color = "black";
  }
}

function hideTrucks()
{
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++)
  {
    var truck = trucks[i];
    truck.style.display = 'none';
  }
}

function showTrucks()
{
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++)
  {
    var truck = trucks[i];
    truck.style.display = '';
  }
}

function showTacos()
{
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++)
  {
    var truck = trucks[i];

    if (truck.innerHTML.indexOf("Tacos") !== -1){
      truck.style.display = '';
    }
    else 
    {
      truck.style.display = "none";
    }
  }
}