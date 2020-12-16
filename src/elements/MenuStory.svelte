<script>
  export let value, hideMenu;
  const storyTitle = value[0].value;
  const storySlug = storyTitle
    .replace(/\s+/g, "-")
    .replace("?", "")
    .toLowerCase();
  // console.log(storySlug);
  // console.log(storyTitle);
</script>

<style>
  @media (min-width: 768px) {
    li {
      padding-right: 15px;
    }
  }
  li {
    padding-left: 30px;
    cursor: pointer;
  }
  li a {
    color: #dbdbdb;
    line-height: 1.7;
    text-decoration: none;
    text-transform: none;
  }

  li.active {
    background-color: #555;
  }

  li:hover {
    background-color: #333;
  }

  li a {
    display: block;
  }
</style>

<li
  on:click={() => {
    hideMenu();
  }}>
  <a href={`#/finalists/${storySlug}`}> {storyTitle}</a>
</li>
