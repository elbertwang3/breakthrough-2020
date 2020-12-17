<script>
  export let value;
</script>

<style>
  .subhed {
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid #dbdbdb;
    line-height: 0.1em;
    margin: 3em auto 20px;
  }

  @media only screen and (max-width: 768px) {
    .subhed {
      margin: 3em 0.8em 20px;
    }
  }
  .subhed span {
    background: #000025;
    padding: 0 10px;
  }
</style>

<h2 class="subhed article-spine"><span>{value}</span></h2>
