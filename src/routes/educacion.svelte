<svelte:head>
	<title>Educacion</title>
</svelte:head>

<style>
h1 {
	color: rgb(0, 128, 96);
	margin-top: 16px;
}
h5 {
	font-size: 18px;
}
p {
	font-size: 14px;
}
.container {
	padding: 0 42px 0 42px;
}
.card {
	background-color: rgba(0, 128, 96, 0.2);
}
.card-body {
	padding: 4px;
}

#utn {
	width: 80px;
}
#utn2 {
	width: 68px;
	margin-left: 12px;
}
#camb {
	width: 80px;
	margin-left: 12px;
}
#mit {
	width: 110px;
}
#same {
	width: 110px;
	filter: brightness(0);
}
#tools1 {
	margin: 8px 0 8px 0;
	justify-content: center;
}
#sk {
	width: 55px;
}
#auto {
	height: 50px;
}
#gimp {
	height: 60px;
}
#web {
	height: 60px;
}
#boot {
	height: 60px;
}
#sv {
	height: 60px;
}
#ubu {
	filter: brightness(0);
	height: 45px;
}
#win {
	filter: brightness(0);
	height: 60px;
	margin: 0 10px 0 10px;
}
#google {
	font-size: 2.2em;
}
#vs {
	filter: brightness(0);
	height: 48px;
}
#post {
	height: 55px;
	margin: 0 12px 0 12px;
}
#ele{
	filter: brightness(0);
	height: 55px;
}
</style>

<div class="Educacion">
	<h1><i class="bi bi-book-fill"></i> EDUCACION</h1>
  <div class="container text-center mt-2">
	<div class="row text-center">
		<div class="col-12 mt-2 text-left">
		  <h2><i class="bi bi-star-fill"></i> Grado</h2>
		  <div class="card shadow mb-3" style="max-width: 540px;">
			<div class="row g-0">
				<div class="col-4 text-center">
				<img id='utn' src="LogoUTN.png" alt="utn">
				</div>
				<div class="col-8">
				<div class="card-body">
					<h5 class="card-title">Ing Industrial</h5>
					<p class="card-text">Si bien mi background no es de las TIC, pienso que enriquece mi perfil desde otra perspectiva.</p>
				</div>
				</div>
			</div>
		  </div>
		</div>
		<div class="col-12 col-md-6 mt-2 text-left">
			<h2><i class="bi bi-award-fill"></i> Certificaciones</h2>
			<div class="card shadow mb-3" style="max-width: 540px;">
				<div class="row g-0">
					<div id='inst' class="col-4 align-middle text-center">
					  <img id='utn2' src="LogoUTN.png" alt="utn">
					</div>
					<div class="col-8">
					<div class="card-body">
						<h5 class="card-title">Experto Project Mgt</h5>
						<p>2020</p>
					</div>
					</div>
				</div>
				<div class="row g-0">
					<div id='inst' class="col-4 align-middle text-center">
					  <img id='utn2' src="LogoUTN.png" alt="utn">
					</div>
					<div class="col-8">
					<div class="card-body">
						<h5 class="card-title">Business Analyst</h5>
						<p>2019</p>
					</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-4 mt-2 text-center">
					<img id='camb' src="CAMB.png" alt="camb">
					</div>
					<div class="col-8">
					<div class="card-body">
						<h5 class="card-title">FCE</h5>
						<p class="card-text">First Certificate in 🇬🇧</p>
					</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-4 mt-2 text-center">
					<img id='same' src="sameco.png" alt="sameco">
					</div>
					<div class="col-8">
					<div class="card-body">
						<h5 class="card-title">Facilitador Mejora Continua</h5>
						<p class="card-text">SAMECO formacion in-company</p>
					</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-4 mt-2 text-center">
					<img id='mit' src="mitx_2.png" alt="mit">
					</div>
					<div class="col-8">
					<div class="card-body">
						<h5 class="card-title">Micromasters Supply Chain</h5>
						<p class="card-text">MIT - Edx certificate</p>
					</div>
					</div>
				</div>
			  </div>
		</div>
		<div class="col-12 col-md-6 mt-2 text-left">
			<h2><i class="bi bi-tools"></i> Herramientas</h2>
			<div class="card shadow mb-3" style="max-width: 540px;">
				
				<div id='tools1' class="row">
					<h1 class='col-4 text-center'>🇪🇸</h1>
					<h1 class='col-4 text-center'>🇬🇧</h1>
					<h1 class='col-4 text-center'>🇧🇷</h1>
				</div>

				<div id='tools1' class="row">
					<img id='web' src="webdev.png" alt="web">
					<img id='boot' src="bootstrap.png" alt="boot">
					<img id='sv' src="svelte.png" alt="sv">
				</div>

				<div id='tools1' class="row">
					<img id='vs' src="vscode.png" alt="vs">
					<img id='post' src="postman.png" alt="post">
					<img id='ele' src="postgre.png" alt="ele">
				</div>

				<div id='tools1' class="row">
					<img id='ubu' src="ubuntu.png" alt="ubu">
					<img id='win' src="windows.png" alt="win">
					<i id='google' class="bi bi-google"></i> 
				</div>

				<div id='tools1' class="row">
					<img id='sk' src="sketchup.png" alt="sk">
					<img id='auto' src="autocad.png" alt="auto">
					<img id='gimp' src="gimp.png" alt="gimp">
				</div>

			</div>
		</div>
	</div>
  </div>
</div>