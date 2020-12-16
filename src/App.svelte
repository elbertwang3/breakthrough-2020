<script>
  import { Router, Route, Link } from "svelte-routing";
  import Metas from "./Metas.svelte";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
  import Home from "./routes/Home.svelte";
  import Finalists from "./routes/Finalists.svelte";

  export let url = "";
</script>

<style>
</style>

<svelte:head>
  <Metas />
</svelte:head>

<Router {url}>
  <!-- <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="blog">Blog</Link>
    </nav> -->
  <Route path="finalists" component={Finalists} />
  <Route path="/" component={Home} />
</Router>
