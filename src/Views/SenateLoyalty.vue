<template>
    <!DOCTYPE html>
<html lang="en">
    <head>
        <title>Senate Loyalty</title>
        <meta charset="utf-8">
        

    </head>
    
    <body class="w-100 p-3">

        <!--Table container-->
        <div class="mt-150"></div>
        <div class="container--">
          <div class="row">
        
              <div class="text">
              <h2>Party Loyalty</h2>
              <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda. </p>
            </div>
        
        
              <h2 style="font-family: serif;">Senate at a glance</h2>
              <table class="table table-striped">
                <thead>
                    <tr style="font-family: serif;">
                        <th>Party</th>
                        <th>Number of Reps</th>
                        <th>% Voted with Prty</th>
                    </tr>
                </thead>
                <tbody style="font-family: serif;">
                    <tr id="table-row">
                        <td>Republican</td>
                    </tr>
                    <tr id="table-row2">
                        <td>Democrat</td>
                    </tr>
                    <tr id="table-row3">
                        <td>Independent</td>
                    </tr>
                    <tr id="table-row4">
                        <td>Total</td>
                    </tr>
                </tbody>
            </table>
       
        </div>
      </div>
      <hr>
      <div class="container--">
        <div class="row">
        
            <h2 style="font-family: serif;">Least Loyal (Bottom 10% of Party)</h2>
            <table class="table table-striped">
                <thead>
                    <tr style="font-family: serif;">
                        <th>Name</th>
                        <th>Number Party Votes</th>
                        <th>% Party Votes</th>
                    </tr>
                </thead>
                <tbody style="font-family: serif;" id="table-body-leastloyal"> 
                </tbody>
            </table>
          
          
            <h2 style="font-family: serif;">Most Loyal (Top 10% of Party)</h2>
            <table class="table table-striped">
                <thead>
                    <tr style="font-family: serif;">
                        <th>Name</th>
                        <th>Number Party Votes</th>
                        <th>% Party Votes</th>
                    </tr>
                </thead>
                <tbody style="font-family: serif;" id="table-body-mostloyal">
                </tbody>
            </table>
        
        </div>
      </div> 

      

    </body>
</html>
</template>

<script>
function proPublica () {
    
    var url = "https://api.propublica.org/congress/v1/113/senate/members.json";
    fetch(url, {
        method: "GET",
        headers: {
            "X-API-Key": "AMo4GwFt6B2Ggi9Bga9mLnQ0BVVBobtNKCLfvYeJ"
        }  
    })
    .then(response=>response.json())
    .then(response=>{
        var members = response.results[0].members
        main(members)
        
    })
    .catch(err=>console.log(err))

}
proPublica()

function main(mainArray) {
    
    sumParty(mainArray, "R");
    sumParty(mainArray, "D");
    sumParty(mainArray, "I");
    builtObject(mainArray)
    senateGlance (mainArray)
    votesWithParty(mainArray, "R");
    votesWithParty(mainArray, "D");
    votesWithParty(mainArray, "I");
    topNameLoyal(mainArray)
    leastLoyal (mainArray)
    bottomNameLoyal(mainArray)
    mostLoyal (mainArray)
    totalAverage (mainArray)
    
}

function totalAverage (array) {

var average = ((votesWithParty(array, "R") + votesWithParty(array, "D") + votesWithParty(array, "I")) / 3).toFixed(2)
return average
}

var statistics = {
    "Number_of_Democrats":"", 
    "Number_of_Republicans":"", 
    "Number_of_Independents":"", 
    "Total_of_Senators":"", 
    "votes_of_Republicans":"", 
    "votes_of_Independents":"", 
    "votes_of_Democrates":"", 
    "Total_votes_of_Senators":"",
    "Least_Engaged":"",
    "Most_Engaged":"",
    "Most_Loyal":"",
    "Least_Loyal":""
}

function sumParty(array, partycode) {

    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].party === partycode) {
            counter ++
        }  
    }
return counter 
}


function builtObject (array) {
    

    statistics.Number_of_Republicans = sumParty(array, "R");
    statistics.Number_of_Independents = sumParty(array, "I");
    statistics.Number_of_Democrats = sumParty(array, "D");
    statistics.Total_of_Senators = array.length;
    statistics.Total_votes_of_Senators = totalAverage(array);
    statistics.Least_Loyal = bottomNameLoyal(array);
    statistics.Most_Loyal = topNameLoyal(array);
    statistics.votes_of_Republicans = votesWithParty(array, "R").toFixed(2);
    statistics.votes_of_Democrats = votesWithParty(array, "D").toFixed(2);
    statistics.votes_of_Independents = votesWithParty(array, "I")
    statistics.Total_votes_of_Senators = totalAverage(array);
}


function senateGlance () {
    
    var trow = document.getElementById("table-row")
    var trow2 = document.getElementById("table-row2")
    var trow3 = document.getElementById("table-row3")
    var trow4 = document.getElementById("table-row4")


  
      trow.insertCell().innerHTML = statistics.Number_of_Republicans
      trow.insertCell().innerHTML = statistics.votes_of_Republicans
      trow2.insertCell().innerHTML = statistics.Number_of_Democrats
      trow2.insertCell().innerHTML = statistics.votes_of_Democrats
      trow3.insertCell().innerHTML = statistics.Number_of_Independents
      trow3.insertCell().innerHTML = statistics.votes_of_Independents
      trow4.insertCell().innerHTML = statistics.Total_of_Senators
      trow4.insertCell().innerHTML = statistics.Total_votes_of_Senators
}


function votesWithParty (array, partycode) {

    var average;
    var counter = 0;
    var emptyarray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].party === partycode) {
            emptyarray.push (array[i].votes_with_party_pct)
            counter ++
            average = emptyarray.reduce((a, b) => a + b, 0) / counter ++

        }     
    } if(average === undefined){
        return 0
    }
    return average
}


function bottomNameLoyal (array) {

    var finalarray = [];
    var emptyarray = [];
    for (var i = 0; i < array.length; i++) {
        emptyarray.push (array[i].votes_against_party_pct)
        emptyarray.sort(function(a, b){return b-a})  
    }
    var percentage = Math.round(emptyarray.length*0.1);
    emptyarray = emptyarray.slice(0, percentage)
    var minemptyarray = Math.min(...emptyarray)
    for (var j = 0; j < array.length; j++) {
        if (array[j].votes_against_party_pct >= minemptyarray) {
            finalarray.push (array[j])
        }
    }
    //var final = array.filter (member => member.missed_votes_pct <= 0.3)
    return finalarray
}


function leastLoyal () {
    
    var tbody = document.getElementById("table-body-leastloyal")

    
    for (var i = 0; i < statistics.Least_Loyal.length; i++) {

        var trow = document.createElement("tr")
        var fullName;
        if (statistics.Least_Loyal[i].middle_name !== null) {
            fullName = statistics.Least_Loyal[i].first_name + " " + statistics.Least_Loyal[i].middle_name + " " + statistics.Least_Loyal[i].last_name
        }
        else {
            fullName = statistics.Least_Loyal[i].first_name + " " + statistics.Least_Loyal[i].last_name
        }
        
        var numberPartyVotes = (statistics.Least_Loyal[i].votes_with_party_pct/100)
        trow.insertCell().innerHTML = fullName.link(statistics.Least_Loyal[i].url)
        trow.insertCell().innerHTML = Math.round(statistics.Least_Loyal[i].total_votes*numberPartyVotes)
        trow.insertCell().innerHTML = statistics.Least_Loyal[i].votes_with_party_pct
        tbody.appendChild(trow)
        
    }
    
}



function topNameLoyal (array) {

    
    var finalarray = [];
    var emptyarray = [];
    for (var i = 0; i < array.length; i++) {
        emptyarray.push (array[i].votes_against_party_pct)
        emptyarray.sort(function(a, b){return a-b})  
    }
    var percentage = Math.round(emptyarray.length*0.1);
    emptyarray = emptyarray.slice(0, percentage)
    //console.log(emptyarray)
    var maxemptyarray = Math.max(...emptyarray)
    //console.log(emptyarray)
    for (var j = 0; j < array.length; j++) {
        if (array[j].votes_against_party_pct <= maxemptyarray) {
            finalarray.push (array[j])
        }
    }
    //var final = array.filter (member => member.missed_votes_pct <= 0.3)
    return finalarray
}


function mostLoyal () {
    
    var tbody = document.getElementById("table-body-mostloyal")

    
    for (var i = 0; i < statistics.Most_Loyal.length; i++) {

        var trow = document.createElement("tr")
        var fullName;
        if (statistics.Most_Loyal[i].middle_name !== null) {
            fullName = statistics.Most_Loyal[i].first_name + " " + statistics.Most_Loyal[i].middle_name + " " + statistics.Most_Loyal[i].last_name
        }
        else {
            fullName = statistics.Most_Loyal[i].first_name + " " + statistics.Most_Loyal[i].last_name
        }
        
        var numberPartyVotes = statistics.Most_Loyal[i].votes_with_party_pct/100
        trow.insertCell().innerHTML = fullName.link(statistics.Most_Loyal[i].url)
        trow.insertCell().innerHTML = Math.round(statistics.Most_Loyal[i].total_votes*numberPartyVotes)
        trow.insertCell().innerHTML = statistics.Most_Loyal[i].votes_with_party_pct
        tbody.appendChild(trow)
        
    }
    
}
</script>

<style>

</style>