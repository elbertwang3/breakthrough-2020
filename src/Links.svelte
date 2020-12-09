<script>
  export let value;
</script>

<style>
  .more-actions {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }
</style>

<div class="more-actions lightpink article-spine">
  {#each value as link}<a href={link.url} target="_blank">{link.text}</a>{/each}
</div>
