<script>
  import homepage from "../data/homepage";
  import Nav from "../Nav.svelte";
  import Footer from "../Footer.svelte";
  import Text from "../elements/Text.svelte";
  import Links from "../elements/Links.svelte";
  import Grid from "../elements/Grid.svelte";
  import Subhed from "../elements/Subhed.svelte";
  import TopGrid from "../elements/TopGrid.svelte";

  const { config, content } = homepage;
  const { hed, dek, byline, pub_date } = config;

  console.log(homepage);
  const elementTypes = {
    text: Text,
    links: Links,
    grid: Grid,
    subhed: Subhed,
    "top-grid": TopGrid,
  };
</script>

<Nav />
<section id="story_cover" class="story_cover active">
  <div class="cover_content">
    <div class="cover_frame">
      <video
        class="cover_video"
        id="cover_video"
        autoplay
        playsinline
        muted
        alt="Tree-like structure showing early cell development of zebrafish.">
        <source type="video/mp4" src="img/opener.mp4" />
        <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
      </video>
    </div>
    <div class="cover-header">
      <h1 class="year">2020</h1>
      <h1 class="titlebreak">Breakthrough <br /><em>of the</em> year</h1>
    </div>
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
