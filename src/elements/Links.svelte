<script>
  export let value;
</script>

<style>
  .more-actions {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin-bottom: 3em;
  }
  .more-actions a {
    font-weight: 700;
  }
  a,
  a:visited {
    color: #75a8c3;
  }

  a:hover {
    color: #21718c;
    text-decoration: none;
  }
</style>

<div class="more-actions lightpink article-spine">
  {#each value as link}<a href={link.url} target="_blank">{link.text}</a>{/each}
</div>
