<script>
  import Social from "./elements/Social.svelte";
</script>

<header
  id="navbar"
  role="navigation"
  class="navbar navbar-default navbar-fixed-top">
  <div>
    <a href="//www.sciencemag.org/" class="navbar-brand"><img
        id="navbarimg"
        alt="Science"
        src="img/logo-science.svg" /></a>
  </div>
  <nav class="minimal-header__nav">
    <ul class="minimal-header__navlist">
      <li class="minimal-header__navitem">
        <a href="//www.sciencemag.org/">Home</a>
      </li>
      <li class="minimal-header__navitem">
        <a href="//www.sciencemag.org/news/">News</a>
      </li>
      <li class="minimal-header__navitem">
        <a href="//www.sciencemag.org/journals/">Journals</a>
      </li>
      <li class="minimal-header__navitem">
        <a href="//www.sciencemag.org/topics/">Topics</a>
      </li>
      <li class="minimal-header__navitem">
        <a href="//www.sciencemag.org/careers/">Careers</a>
      </li>
    </ul>
  </nav>
  <Social />
</header>
