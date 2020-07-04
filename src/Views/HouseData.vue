<template>
    <html lang="en">
    <head>
      <title>House</title>
      <meta charset="utf-8">
      
    </head>
    
    <body class="w-100 p-3">

        <!--Table container-->
            <div class="mt-150"></div>
            <div class="container--">
              <div class="row">
  
                  <div class="text">
                    <h2>Congressmen</h2>
                      <p>The major power of the House is to pass federal legislation that affects the entire country, although its bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials are subsequently tried in the Senate), and to elect the U.S. President in case there is no majority in the Electoral College.</p>
                      <p>Each U.S. state is represented in the House in proportion to its population as measured in the census, but every state is entitled to at least one representative. </p>
          
                  </div>
              </div>
            </div>

            <div class="row justify-content-between">
              <div class="col-4">
                <label style="font-family: serif;">Filter by Party:</label>
                <form>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="party" id="inlineCheckbox1" value="R">
                    <label style="font-family: serif;" class="form-check-label" for="inlineCheckbox1">Republican</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="party" id="inlineCheckbox2" value="D">
                    <label style="font-family: serif;" class="form-check-label" for="inlineCheckbox2">Democrat</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="party" id="inlineCheckbox3" value="I">
                    <label style="font-family: serif;" class="form-check-label" for="inlineCheckbox3">Independent</label>
                  </div>
                </form>
              </div>
              <div class="col-4">
                <label style="font-family: serif;">Filter by State:</label>
                <select style="font-family: serif;" id="states" class="custom-select custom-select-sm">
                  <option selected>All</option>
                </select>
              </div>
            </div>

            <table class="table table-striped">
                <thead>
                    <tr style="font-family: serif;">
                        <th>Name</th>
                        <th>Party</th>
                        <th>State</th>
                        <th>Years in Office</th>
                        <th>% Votes w/Party</th>
                    </tr>
                </thead>
                <tbody style="font-family: serif;" id= "table-body2">   
                </tbody>
            </table>      

    

      </body>
</html>
</template>

<script>
function proPublica () {
    
    var url = "https://api.propublica.org/congress/v1/113/house/members.json";
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
        console.log(members)
    })
    .catch(err=>console.log(err))

}
proPublica()

function main(mainArray) {

    builtTable(mainArray)
    builtSelect(mainArray) 
    filter(mainArray)
    
}

function builtTable (array) 
{
    var tbody = document.getElementById("table-body2")
    
    for (var i = 0; i < array.length; i++) 
    {
        var trow = document.createElement("tr")
        var fullName;
        if (array[i].middle_name !== null) {
        fullName = array[i].first_name + " " + array[i].middle_name + " " + array[i].last_name}
        else {fullName = array[i].first_name + " " + array[i].last_name}

        trow.insertCell().innerHTML = fullName.link(array[i].url)
        trow.insertCell().innerHTML = array[i].party
        trow.insertCell().innerHTML = array[i].state
        trow.insertCell().innerHTML = array[i].seniority
        trow.insertCell().innerHTML = array[i].votes_with_party_pct
        tbody.appendChild(trow)
        //console.log(tbody)
    }   
}



function filter (array) {
    
    
   
    Array.from(document.querySelectorAll("input[name=party]")).forEach(Element=>{
        Element.addEventListener("click", ()=> checkTable(array))
    }) 

    document.getElementById("states").addEventListener("change", ()=> checkTable(array))
  
} 


function checkTable(array) {
    
    var table = document.getElementById("table-body2")
    var selectBody = document.getElementById("states").value
    table.innerHTML=""
    var checkbox = Array.from(document.querySelectorAll("input[name=party]:checked")).map(function(option) {
        return option.value;
      });
    
    if (checkbox.length === 0 && selectBody === "All") {
        builtTable (array)
    }  
    else if (checkbox.length > 0 && selectBody === "All") {
        builtTable (array.filter(senator=>checkbox.includes(senator.party)))
    }
    else if (checkbox.length > 0 && selectBody !== "All") {
        builtTable (array.filter(senator=>selectBody === senator.state && checkbox.includes(senator.party)))
    }
    else if (checkbox.length === 0 && selectBody !== "All") {
        builtTable (array.filter(senator=>selectBody === senator.state))
    }
}

function builtSelect (array) {

    var selectBody = document.getElementById("states")
    var emptyarray = [];
    for (var i = 0; i < array.length; i++) {
        emptyarray.push (array[i].state)
    }
    var x = emptyarray.filter((a, b) => emptyarray.indexOf(a) === b).sort()
    x.forEach(element=>{
        var trow = document.createElement("option")
        trow.innerHTML = element
        selectBody.appendChild(trow)
    })
}
</script>

<style>

</style>