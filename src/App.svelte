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
  ul {
    position: fixed;
    height: 100px;
    z-index: 10000000;
  }
</style>

<svelte:head>
  <Metas />
</svelte:head>

<!-- <Router {url}>
  <Route path="finalists" component={Finalists} />
  <Route path="/" component={Home} />
</Router> -->

<ul>
  <li><a href="#/">Home</a></li>
  <li><a href="#/finalists">Say hi!</a></li>
</ul>
<Router {routes} />
