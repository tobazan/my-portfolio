<svelte:head>
	<title>Desarrollos</title>
</svelte:head>


<style>
	h1, h4, h5 {
		color: rgb(0, 128, 96);
	}
	.row {
	  max-width: 840px;
	  padding: 12px;
	}
	.btn{
		background-color: rgb(0, 128, 96);
		color: rgb(231, 230, 230);
	}
</style>

<div class="Desarrollos mt-4">
	<h1><i class="bi bi-code-square"></i> DESARROLLOS</h1>
	<div class="container text-center">
		<div class="row mt-4">

			<div class="col-12 col-md-6 col-xl-4 mb-4">
				<div class="card text-left">
					<img src="testing2.jpg" class="card-img-top" alt="...">
					<div class="card-body">
					  <h4 class="card-title">1ER PROYECTO</h4>
					  <h5 class="card-title">Tobeeper</h5>
					  <span class="badge bg-warning text-dark">Vanilla JS</span>
					  <span class="badge bg-primary text-light">Bootstrap</span> 
					  <p class="card-text mt-2">Web app muy sencilla, por un lado es un stopwatch para entrenamiento <strong>HIIT</strong> y por otro permite consultar una serie de <strong>WODs</strong>.</p>
					  <button type='button' class="btn" data-bs-toggle="modal" data-bs-target="#tobeeperModal"><i class="bi bi-eye-fill"></i> ver mas</button>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-xl-4 mb-4">
				<div class="card text-left">
					<img src="coding.jpg" class="card-img-top" alt="...">
					<div class="card-body">
					  <h4 class="card-title">2DO PROYECTO</h4>
					  <h5 class="card-title">Portfolio Personal</h5>
					  <span class="badge bg-warning text-dark">Svelte</span>
					  <span class="badge bg-warning text-dark">Sapper</span>
					  <span class="badge bg-danger text-light">Rollup</span>
					  <span class="badge bg-primary text-light">Bootstrap</span>
					  <p class="card-text mt-2">Para poner en practica lo aprendido de Svelte y Sapper decidi desarrollar esta SPA <strong>complemento de mi CV.</strong></p>
					  <button type='button' class="btn" data-bs-toggle="modal" data-bs-target="#portfolioModal"><i class="bi bi-eye-fill"></i> ver mas</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<div class="modal fade" id="tobeeperModal" tabindex="-1" 
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
	  <div class="modal-content">
		<div class="modal-header">
		  <h3 class="modal-title">Tobeeper</h3>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		  <a class="btn btn-primary mb-4" href="https://tobazan.github.io/tobeeper/" role="button"><i class="bi bi-github"></i> Proba la app</a>	
		  <h5>Para que la hice?</h5>			
		  <p>Es un desarrollo pensado como un obsequio ademas de un primer desafio personal.</p>
		  <h5>Que necesidad satisface?</h5>
		  <p>La idea nacio durante el ASPO, cuando el gimnasio comenzo a brindar clases via streaming para sus socios por obvias razones. Para los profes haber tenido esta web app en ese momento hubiera sido de gran ayuda. Dado que podriamos volver a una situacion similar, la necesidad de esta herramienta sigue latente.</p>
		  <h5>Que hace?</h5>
		  <p>Por un lado es un tipico stopwatch que permite setear los intervalos mas comunes del entrenamiento intermitente y el otro permite al usuario, ya sea el profe o quien entrena, elegir entre una serie de rutinas.</p>
		  <h5>Que le sumaria?</h5>			
		  <p>La idea es darle a los profes la capacidad de loggearse y asi acceder a operaciones CRUD sobre una DB NoSQL de rutinas.</p>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
		</div>
	  </div>
	</div>
  </div>

  <div class="modal fade" id="portfolioModal" tabindex="-1" 
  		aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title">Portfolio Personal</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		  <p>Actualmente estas navegando esta SPA pensada como portfolio personal complemento de mi CV.</p>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
		</div>
	  </div>
	</div>
  </div>