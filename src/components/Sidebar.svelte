<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
    .Sidebar {
        background-color: rgb(0, 128, 96);
    }
    img {
        width: 175px;
    }
    #face {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: rgb(231, 230, 230);
        font-size: 3em;
    }
    #badge-card {
        margin-bottom: 12px;
        padding-top: 12px;
    }
    #badge-icon {
        color: rgb(231, 230, 230);
        font-size: 3em;
        margin-bottom: 0;
        padding-bottom: 0;
        align-content:flex-end; 
    }
    #badge-card {
        color: rgb(0, 128, 96);
        background-color:rgba(231, 230, 230, 0.7);
    }
    #badge-card h5 {
        font-size: 1.1em;
    }
    #badge-card p {
        font-size: 0.8em;
}
</style>

<div class="Sidebar">
  <div class="container">
      <div class="row text-center">
        <div id="face" class="mt-4 col-12">
            <img class='rounded-circle shadow-lg' src="toba-ixcaret.jpg" alt="foto">
        </div>
      
        <a class="nav-link col-3 col-md-12" href="mailto: bazanme90@gmail.com">
            <i class="bi bi-envelope-fill"></i>
        </a>
      
        <a class="nav-link col-3 col-md-12" href="https://www.linkedin.com/in/bazanme/">
            <i class="bi bi-linkedin"></i>
        </a>
        
        <a class="nav-link col-3 col-md-12" href="http://github.com/tobazan">
            <i class="bi bi-github"></i>
        </a>

        <div id ='badge-icon' class="col-3 col-md-12">
            <i class="bi bi-person-badge"></i>
        </div>

        <div class='col-12' id="badge">
            <div id="badge-card" class="card text-center">
            <h5>Nacimiento</h5>
            <p>19/12/1990</p>
            <h5>Estado Civil</h5>
            <p>Soltero</p>
            <h5>Residencia</h5>
            <p>Tierra del Fuego</p>
            </div>
        </div>
      </div>  
  </div>
</div>