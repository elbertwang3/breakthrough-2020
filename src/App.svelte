<script>
  import Router from "svelte-spa-router";
  import Metas from "./Metas.svelte";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
  import Home from "./routes/Home.svelte";
  import Finalists from "./routes/Finalists.svelte";

  const routes = {
    "/": Home,
    "/finalists": Finalists,
    "/finalists/*": Finalists,
  };
</script>

<style>
</style>

<svelte:head>
  <Metas />
</svelte:head>

<Router {routes} />
