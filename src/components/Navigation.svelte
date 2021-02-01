<style>
    .header {
        background-color: rgb(0, 128, 96);
        height: 110px;
        padding: 34px 0 34px 12px;
        font-size: 1.4em;
    }
	a.navo {
        border-bottom: 3px solid rgb(231, 230, 230);
        margin: 0 10px 0 10px;
        text-decoration: none;
        display: block;
        text-transform: uppercase;
    }

	a {
        font-size: 1.4em;
		text-decoration: none;
		display: block;
        color: rgb(231, 230, 230);
        margin: 0 10px 0 10px;
	}
</style>

<script>
    export let segment;
</script>

<div class="header shadow-lg">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class:navo={segment === undefined} 
            data-bs-toggle="tooltip" data-bs-placement="top" 
            title="acerca de mi" href="/">
                <i class="bi bi-person-bounding-box"></i>
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class:navo={segment === 'experiencia' } 
            data-bs-toggle="tooltip" data-bs-placement="top" 
            title="experiencia" href="experiencia">
                <i class="bi bi-briefcase-fill">
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class:navo={segment === 'educacion'}
            data-bs-toggle="tooltip" data-bs-placement="top" 
            title="educacion" href="educacion">
                <i class="bi bi-book-fill"></i>
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class:navo={segment === 'desarrollos'}
            data-bs-toggle="tooltip" data-bs-placement="top" 
            title="desarrollos" href="desarrollos">
                <i class="bi bi-code-square"></i>
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class:navo={segment === 'contactame'} 
            data-bs-toggle="tooltip" data-bs-placement="top" 
            title="contactame" href="contactame">
                <i class="bi bi-chat-text-fill"></i>
            </a>
        </li>
</div>