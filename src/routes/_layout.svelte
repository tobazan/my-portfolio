<script>
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Main from '../components/Main.svelte';

	export let segment;
</script>

<style>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
	section {
		min-height: 700px;
		background-color: #e4e4e4;
	}
</style>

<Navigation {segment}/>

<section>
	<Main>
		<slot></slot>
	</Main>
</section>

<Footer />