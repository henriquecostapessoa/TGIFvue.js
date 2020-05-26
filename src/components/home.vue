

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
      <b-nav-item>Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Congress 113" right>
        <b-dropdown-item><router-link to="/senateData">Senate</router-link></b-dropdown-item>
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
      
        <!--Table container-->
        <div class="mt-150"></div>
        <div class="container--">
          <div class="row">
            <div class="col-8">
              <div class="text">
                <h2>About Us</h2>
                  <p>Openness, accountability, and honesty define government transparency. In a free society, transparency is government's obligation to share information with citizens. It is at the heart of how citizens hold their public officials accountable. Here at TGIF we believe that government should be transparent.</p>  
                  <p>Governments exist to serve the people. Information on how officials conduct the public business and spend taxpayer money must be readily available and easily understood. This transparency allows good and just governance.  Transparency promotes accountability and provides information for citizens about what their Government is doing.</p>  
                  <p>We also believe that government should be participatory. Public engagement enhances the Government's effectiveness and improves the quality of its decisions. Knowledge is widely dispersed in society, and public officials benefit from having access to that dispersed knowledge. We invite you to use our site to become actively engaged in American government.</p>
                  <p>TGIF works to disclose information in forms that the public can readily find and use. We solicit public feedback to identify information of greatest use to the public.</p> 
                </div>
              </div>
            <div class="col-4">
                <img src="https://thenewturkey.org/images/news/2019/06/11/us-congress.jpg" alt="Trulli" width="476" height="326">
            </div>          
          </div>
        </div>
      
<div>
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Read More</b-button>

  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>
      <div class="text">
      <h3>Background History of Government Transparency</h3>
      <p>In the West, the idea that government should be open to public scrutiny and susceptible to public opinion dates back at least to the time of the Enlightenment, when many philosophes made an attack on absolutist doctrine of state secrecy, a core part of their intellectual project. The passage of formal legislative instruments to this end can also be traced to this time with Sweden, for example, (which then included Finland as a Swedish-governed territory) enacting free press legislation as part of its constitution (Freedom of the Press Act, 1766). This approach, and that of the philosophes more broadly, is strongly related to recent historiography on the eighteenth-century public sphere.
      <p>Influenced by Enlightenment thought, the revolutions in America (1776) and France (1789), freedom of the press enshrined provisions and requirements for public budgetary accounting and freedom of the press in constitutional articles. In the nineteenth century, attempts by Metternichean statesmen to row back on these measures were vigorously opposed by a number of eminent liberal politicians and writers, Bentham, Mill and Acton prominent among the latter.</p>
      <p>Open government is widely seen to be a key hallmark of contemporary democratic practice and is often linked to the passing of freedom of information legislation. Scandinavian countries claim to have adopted the first freedom of information legislation, dating the origins of its modern provisions to the eighteenth century and Finland continuing the presumption of openness after gaining independence in 1917, passing its Act on Publicity of Official Documents in 1951 (superseded by new legislation in 1999).</p>
      <p>The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information Acts (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.</p>
    </div>
    </b-card>
  </b-collapse>
</div>

          
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
