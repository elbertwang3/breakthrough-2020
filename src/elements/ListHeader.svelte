<script>
  export let value;
  console.log(value);
</script>

<style>
  li.primary {
    color: #75a8c3;
    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
    margin-top: 0.5em;
    padding-left: 15px;
  }

  li.list-header a {
    font-weight: 700;
    display: block;
    width: 100%;
    margin-top: 0;
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
  <a href={value.url}>{value}</a>
</li>
