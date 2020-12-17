<script>
  export let value;
</script>

<style>
  li.primary {
    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
    margin-top: 0.5em;
    padding-left: 15px;
    font-weight: 700;
  }

  li.list-header a {
    color: #75a8c3 !important;
    display: block;
    width: 100%;
    margin-top: 0;
  }

  li.list-header a:visited {
    color: #75a8c3 !important;
  }

  li:hover {
    background-color: #333;
    cursor: pointer;
  }
  li:hover a {
    text-decoration: none;
    color: #21718c;
  }
</style>

<li class="primary list-header" name="not" data-interactive-action="to-toc">
  <a href={value.url}>{value.text}</a>
</li>
