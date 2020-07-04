<template>

<html lang="en">
    <head>
      <title>Home</title>
      <meta charset="utf-8">
    
    </head>
    
    <body>
      
      <div class="fixed-top">
                
        <div class="beforenavbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Seal_of_the_United_States_Congress.svg/770px-Seal_of_the_United_States_Congress.svg.png" alt="Trulli" width="100" height="100">
          <a style="font-family: serif;" id="general-email" href="mailto:info@tgif.net">info@tgif.net</a> 
        </div>
      
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item><router-link class="link" to="/">Home</router-link></b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Congress 113" right>
        <b-dropdown-item><router-link class="link" to="/SenateData">Senate</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link class="link" to="/HouseData">House</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Attendance" right>
        <b-dropdown-item ><router-link class="link" to="/SenateAttendance">Senate</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="link" to="/HouseAttendance">House</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Party Loyalty" right>
        <b-dropdown-item><router-link class="link" to="/SenateLoyalty">Senate</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="link" to="/HouseLoyalty">House</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</div>



<div>
<router-view />
</div>

<footer class="footer">
        <p>&copy; 2020  | All Rights Reserved</p>
      </footer>

 </body>
</html>
</template>

<script>


</script>

<style>

.link{
  color: black
}

.navbar.navbar-dark.bg-dark{
    background-color: rgb(165, 91, 42)!important;
    font-size: 80%;
    
 }

.beforenavbar {
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 15px;
}

.text {
    color: rgb(165, 91, 42);
    font-family: serif;
    margin-top: 15px;
    margin-left: 15px;
}

.footer {
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

.img3{
  width: 90%;
  height: auto;
  margin-left: 20px;
}
</style>
