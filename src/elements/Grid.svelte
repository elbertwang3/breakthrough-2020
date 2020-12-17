<script>
  export let value;
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 3rem;
  }

  .story-title {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 992px) {
    .story-title {
      font-size: 1.125em;
    }
  }

  a img {
    width: 100%;
    transition: opacity 0.3s;
  }

  a,
  a:visited {
    color: #dbdbdb;
  }

  a:hover {
    color: #75a8c3;
    text-decoration: none;
  }

  a:hover img {
    opacity: 0.5;
  }
</style>

<div class="grid grid-spine">
  {#each value as item}
    <a
      href={`#/finalists/${item.title
        .replace(/\s+/g, '-')
        .replace('?', '')
        .replace('’', '')
        .replace("'", '')
        .toLowerCase()}`}>
      <img class="img-responsive" src={`img/${item.img}`} alt={item.alt} />
      <h4 class="story-title">{item.title}</h4>
    </a>
  {/each}
</div>
