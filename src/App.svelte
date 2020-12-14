<script>
  import homepage from "./data/homepage";
  import Metas from "./Metas.svelte";
  import Nav from "./Nav.svelte";
  import Text from "./Text.svelte";
  import Links from "./Links.svelte";
  import Grid from "./Grid.svelte";
  import Subhed from "./Subhed.svelte";
  import TopGrid from "./TopGrid.svelte";
  import Footer from "./Footer.svelte";

  const { config, content } = homepage;
  const { hed, dek, byline, pub_date } = config;

  const elementTypes = {
    text: Text,
    links: Links,
    grid: Grid,
    subhed: Subhed,
    "top-grid": TopGrid,
  };
</script>

<style>
  article {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    word-wrap: break-word;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    font-weight: 400;
  }
  :global(.article-spine) {
    max-width: 720px;
    margin: auto;
    padding: 0 1em;
  }

  #story_cover {
    margin-top: 50px;
  }
</style>

<svelte:head />

<article>
  <Nav />
  <section id="story_cover" class="story_cover active">
    <div class="cover_content">
      <div class="cover_frame">
        <video
          class="cover_video"
          id="cover_video"
          poster="img/transparent.gif"
          autoplay=""
          playsinline=""
          muted=""
          alt="Tree-like structure showing early cell development of zebrafish.">
          <source type="video/mp4" src="video/opener.mp4" />
          <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>
      </div>
      <h1 class="year">2020</h1>
      <h1 class="titlebreak">Breakthrough <br /><em>of the</em> year</h1>
    </div>
  </section>
  <section class="section toc_intro" id="intro">
    <h2 class="article_head">{hed}</h2>
    <p class="lede">{dek}</p>
    <p class="byline lightpink">
      By
      {@html byline}<em class="time">{pub_date}</em>
    </p>
  </section>
  {#each content as { type, value }, i}
    <svelte:component this={elementTypes[type]} {value} />
  {/each}
  <Footer />
</article>
