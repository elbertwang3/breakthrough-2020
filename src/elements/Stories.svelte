<script>
  import MenuStory from "./MenuStory.svelte";
  import MenuLink from "./MenuLink.svelte";
  import MenuTimeline from "./MenuTimeline.svelte";
  export let value, hideMenu;

  const menuTypes = {
    story: MenuStory,
    link: MenuLink,
    timeline: MenuTimeline,
  };
</script>

<ul class="sub-menu">
  {#each value as { type, value }, i}
    {#if value[0] && value[0].value != 'Ones we’ve lost'}
      <svelte:component this={menuTypes[type]} {value} {hideMenu} />
    {:else if type == 'link' || type == 'timeline'}
      <svelte:component this={menuTypes[type]} {value} {hideMenu} />
    {/if}
  {/each}
</ul>
