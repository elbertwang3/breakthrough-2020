<script>
  import MenuStory from "./MenuStory.svelte";
  import MenuLink from "./MenuLink.svelte";
  export let value, hideMenu;

  console.log(value);
  const menuTypes = {
    story: MenuStory,
    link: MenuLink,
  };
</script>

<ul class="sub-menu">
  {#each value as { type, value }, i}
    <svelte:component this={menuTypes[type]} {value} {hideMenu} />
  {/each}
</ul>
