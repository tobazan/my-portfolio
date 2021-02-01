<svelte:head>
    <title>Experiencia</title>
</svelte:head>

<style>
h1 {
  color: rgb(0, 128, 96);
}
.bgh {
  height: 44px;
  margin-bottom: 4px;
  filter: brightness(0);
}
.axxon {
  height: 30px;
  margin-bottom: 4px;
  filter: brightness(0);
}
li {
  color: grey;
  font-size: 14px;
  line-height: 1.4;
  margin: 6px 0 6px 0;
}
.timeline .timeline-item::after, .timeline .timeline-item::before {
  clear: both;
  content: '';
  display: block;
  width: 100%;
}

.timeline {
  margin: 30px auto;
  padding: 0 10px;
  position: relative;
  transition: all 0.25s ease-in;
  width: 100%;
}

.timeline::before {
  background: rgb(0, 128, 96);
  content: '';
  height: 100%;
  left: 50%;
  position: absolute;
  top: 0;
  width: 3px;
}

.timeline::after {
  clear: both;
  content: '';
  display: table;
  width: 100%;
}

.timeline a {
  color: rgb(0, 128, 96);
  font-weight: bold;
  transition: all 0.25s ease-in;
}

.timeline a:hover {
  box-shadow: 0 1px 0px 0px rgb(0, 128, 96);
  transition: all 0.25s ease-in;
}

.timeline .timeline-item {
  margin-bottom: 15px;
  position: relative;
}

.timeline .timeline-item .timeline-icon {
  background: rgb(0, 128, 96);
  border-radius: 50%;
  height: 50px;
  left: 50%;
  margin-left: -23px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 50px;
}

.timeline .timeline-item .timeline-icon img,
.timeline .timeline-item .timeline-icon svg {
  left: 14px;
  position: relative;
  top: 11px;
}

.timeline .timeline-item .timeline-icon svg {
  top: 14px;
}

.timeline .timeline-item .timeline-content {
  padding: 20px;
  text-align: right;
  transition: all 0.25s ease-in;
  width: 45%;
  background: transparent;
}

.timeline .timeline-item .timeline-content p {
  color: rgb(0, 128, 96);
}

.timeline .timeline-item .timeline-content p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0 0 1px 0;
}

.timeline .timeline-item .timeline-content .timeline-content-date {
  font-size: 18px;
  color: black;
  border-bottom: 1.5px solid black;
  font-weight: bold;
  margin-bottom: 4px 0 4px 0;
}

.timeline .timeline-item .timeline-content .timeline-content-month {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 400;
}

.timeline .timeline-item .timeline-content.right {
  float: right;
  text-align: left;
}

@media screen and (max-width: 39.9375em) {
  .timeline {
    margin: 30px;
    padding: 0;
    width: 90%;
  }
  .timeline::before {
    left: 0;
  }
  .timeline .timeline-item .timeline-content {
    float: right;
    text-align: left;
    width: 90%;
  }
  .timeline .timeline-item .timeline-content::before, .timeline .timeline-item .timeline-content.right::before {
    border-left: 0;
    border-right: 7px solid rgb(0, 128, 96);
    left: 10%;
    margin-left: -6px;
  }
  .timeline .timeline-item .timeline-icon {
    left: 0;
  }
}
</style>


<div class="experiencia text-center mt-4">
    <h1><i class="bi bi-briefcase-fill"></i> EXPERIENCIA</h1>
    
    <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-content right">
            <img class="bgh" src="BGHlogo.png" alt="bgh">
            <p>mayo 2020 - feb 2021</p>
            <p class="timeline-content-date">Analista PMO</p>
            <p>Facilitando la ejecucion exitosa de proyectos industriales y coordinando la introduccion de nuevos productos.</p>
            <button type='button' class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#pmoModal">Proyectos Afrontados</button>
          </div>
        </div>  
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-content">
            <img class="axxon" src="logo-axxon-blue.png" alt="axxon">
            <p>oct 2019 - ene 2020</p>
            <p class="timeline-content-date">Analista Funcional ERP</p>
            <p> Implementando el ERP MS Dynamics 365 bajo metodologias agiles en diferentes clientes de CABA, BsAs.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-content right">
            <img class="bgh" src="BGHlogo.png" alt="bgh">
            <p>feb 2015 - mayo 2019</p>
            <p class="timeline-content-date">Ing. Procesos Logistica</p>
            <p>Mejora continua de los procesos de logistica.</p>
            <button type='button' class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#logisticaModal">Proyectos Afrontados</button>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon"></div>    
          <div class="timeline-content">
            <img class="bgh" src="BGHlogo.png" alt="bgh">
            <p>mayo 2014 - ene 2015</p>
            <p class="timeline-content-date">Analista PCP</p>
            <p>Control de la produccion y del flujo de materiales de la Unidad Operativa Electronica.
          </div>
        </div>   
    </div>  
</div>

<div class="modal fade" id="logisticaModal" tabindex="-1" 
aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Ing Procesos Logistica Interna</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body text-left">
      <ul>
        <li>Key User en la implementacion de MS Dynamics AX ERP</li>
        <li>Diseño e implementacion de almacen de produccion electronica</li>
        <li>Resdiseño de politicas de almacenamiento y metodos de line feeding</li>
        <li>Procedimiento de manejo de saldos/excedentes en la Unidad Operativa Aire Acondicionado</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    </div>
    </div>
  </div>
</div>

<div class="modal fade" id="pmoModal" tabindex="-1" 
aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Ing Procesos Logistica Interna</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body text-left">
      <ul>
        <li>Modificacion del procedimiento de introduccion de nuevos productos</li>
        <li>Desarrollo de nuevas lineas para afrontar volumen temporada alta Aire Acondicionado</li>
        <li>Fazon <i>produccion subcontrada</i> de Aire Acondicionado a cooperativa industrial Ex Audivic</li>
        <li>Integrar la gestion de consumibles al ERP y unificacion de pañoles</li>
        <li>Upgrade de linea de TV para mejorar la productividad de grandes pulgadas</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    </div>
    </div>
  </div>
</div>
