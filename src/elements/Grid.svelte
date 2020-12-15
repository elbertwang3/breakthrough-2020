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
  }

  img {
    width: 100%;
  }
</style>

<div class="grid article-spine">
  {#each value as item}
    <a href={item.url}>
      <img class="img-responsive" src={`img/${item.img}`} alt={item.alt} />
      <h4 class="story-title">{item.title}</h4>
    </a>
  {/each}
</div>
