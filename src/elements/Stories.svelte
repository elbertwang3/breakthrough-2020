<script>
  import MenuStory from "./MenuStory.svelte";
  export let value;

  const menuTypes = {
    story: MenuStory,
  };
</script>

<ul class="sub-menu">
  {#each value as { type, value }, i}
    <svelte:component this={menuTypes[type]} {value} />
  {/each}
</ul>
