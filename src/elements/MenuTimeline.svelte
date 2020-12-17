<script>
  export let value, hideMenu;
  const { text, url } = value;
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
    display: block;
  }

  li:active {
    background-color: #555;
  }

  li:hover {
    background-color: #333;
  }
</style>

<li   on:click={() => {
    hideMenu();
  }}><a href={url}>{text}</a></li>
