<template>
<html lang="en">
    <head>
      <title>Senate Data</title>
      <meta charset="utf-8">
    
    </head>
    
    <body class="w-100 p-3">
      
     

 <!--Table container-->
        <div class="mt-150"></div>
        <div class="container--">
          <div class="row">
            <div class="col-8">
              <div class="text">
                <h2>Senators</h2>
                <p>First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S. Constitution. Each state is represented by two senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal judges, other federal executive officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached by the House.</p>
                </div>
              </div>
              <div class="col-4">        
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
                <tbody style="font-family: serif;" id= "table-body"> 
                </tbody>
            </table>
        

        <footer>
          <p>&copy; 2020  | All Rights Reserved</p>
        </footer>
        
      </body>
</html>
</template>


<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.beforenavbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 15px;
}

.text {
    color: rgb(165, 91, 42);
    font-family: serif;
    margin-top: 15px;
    margin-left: 15px;
}

footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(165, 91, 42);
    color: white;
    font-family: serif;
    border-radius: 8px;
    padding-top: 15px;
}

.dropdown-menu,
.dropdown-menu ul {
  list-style-type:none;
}

table {
    text-align: center;
}

.margin {
    margin-top: 150px;
}

.mt-150 {
    margin-top: 175px !important;
  }

hr {
    border-width: 3px;
}
</style>