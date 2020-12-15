<script>
  export let value;
  const storySlug = value[0];
  const storyTitle = value[0].value;
  console.log(storySlug);
  console.log(storyTitle);
</script>

<li id={storySlug} class=""><a href={`#${storySlug}`}> {storyTitle}</a></li>
