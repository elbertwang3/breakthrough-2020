<script>
  export let value;
  let els = value;
  const slug = value[0].value.replace(/\s+/g, "-").toLowerCase();
</script>

<style>
  /* your styles go here */
  .finalist_item:first-of-type {
    padding-top: 0;
  }
  .finalist_item {
    padding-top: 2em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  h3 {
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    font-size: 1.6em;
    line-height: 1.1;
    text-align: left;
    padding: 0;
    width: 100%;
    margin: 0;
    font-weight: 700;
  }

  .lede {
    line-height: 1.3;
    margin-bottom: 0.5em;
    margin-top: 0.25em;
    font-size: 1em;
    font-weight: 500;
  }

  .img-responsive {
    margin-top: 0.75em;
    margin-bottom: 0.25em;
    width: 100%;
  }

  .figure-credit {
    font-size: 0.75em;
    text-align: left;
    width: 100%;
    line-height: 1.2;
  }

  .figure-credit span {
    color: #999;
    text-transform: uppercase;
    font-size: 0.9em;
  }

  p {
    display: block;
    margin-top: 0;
    margin-bottom: 1em;
  }

  .byline {
    text-align: right;
    font-size: 1em;
    margin-bottom: 0.25em;
    margin-top: -0.25em;
  }

  .reference {
    line-height: 1.2;
    margin-bottom: 0.5em;
    font-size: 0.875em;
  }
</style>

<div class="finalist_item" id={slug}>
  {#each els as { type, value }, i}
    {#if type == 'story-title'}
      <h3>{value}</h3>
    {:else if type == 'story-subtitle'}
      <p class="lede">{value}</p>
      <!-- else if content here -->
    {:else if type == 'img'}
      <img class="img-responsive" src={`img/${value}`} />
    {:else if type == 'caption'}
      <p class="figure-credit">{value} <span>{els[i + 1].value}</span></p>
    {:else if type == 'text'}
      <p>{value}</p>
    {:else if type == 'byline'}
      <p class="byline">
        —
        {@html value}
      </p>
    {:else if type == 'references'}
      <strong>References</strong>
      {#each value as reference, i}
        <p class="reference">
          {@html reference}
        </p>
      {/each}
    {:else}
      <!-- else content here -->
    {/if}
  {/each}
</div>
