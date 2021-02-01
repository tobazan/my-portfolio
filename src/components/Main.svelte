<script>
    import Sidebar from './Sidebar.svelte';
</script>

<style>
    #side {
      background-color: rgb(0, 128, 96);
      padding: 0;
      margin: 0;
    }
    #slot {
      margin: 0;
      padding: 0;
    }
</style>

<main class="Main">
    <div class="Main-container text-center">
      <div class="row">
        <div id='slot' class="col-12 col-md-9 col-xl-10">
          <slot />
        </div>
        <div id='side' class="col-12 col-md-3 col-xl-2">
          <Sidebar />
        </div>
      </div>
    </div>
</main>