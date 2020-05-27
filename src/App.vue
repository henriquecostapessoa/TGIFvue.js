<template>

<html lang="en">
    <head>
      <title>Home</title>
      <meta charset="utf-8">
    
    </head>
    
    <body class="w-100 p-3">
      
      <div class="fixed-top">
                
        <div class="beforenavbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Seal_of_the_United_States_Congress.svg/770px-Seal_of_the_United_States_Congress.svg.png" alt="Trulli" width="100" height="100">
          <a style="font-family: serif;" id="general-email" href="mailto:info@tgif.net">info@tgif.net</a> 
        </div>
      
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Congress 113" right>
        <b-dropdown-item><router-link to="/SenateData">Senate</router-link></b-dropdown-item>
        <b-dropdown-item >House</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Attendance" right>
        <b-dropdown-item >Senate</b-dropdown-item>
        <b-dropdown-item>House</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Party Loyalty" right>
        <b-dropdown-item>Senate</b-dropdown-item>
        <b-dropdown-item>House</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</div>


<div>
<router-view />
</div>

 </body>
</html>
</template>

<script>



</script>

<style>

</style>
