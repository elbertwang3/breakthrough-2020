<script>
  import SectionStory from "./SectionStory.svelte";
  import Timeline from "./Timeline.svelte";
  export let value;

  const elementTypes = {
    story: SectionStory,
    timeline: Timeline,
  };
</script>

<style>
  .section {
    margin-bottom: 4em;
  }
</style>

<section class="section">
  {#each value as { type, value }, i}
    <svelte:component this={elementTypes[type]} {value} />
  {/each}
</section>
