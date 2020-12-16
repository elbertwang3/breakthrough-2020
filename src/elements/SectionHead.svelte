<script>
  export let value;
</script>

<style>
  .section-head {
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-align: left;
    background-color: #c4161c;
    padding: 0.4em 1em 0.3em 0.5em;
    font-weight: 400;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    color: white;
    position: relative;
    display: inline-block;
  }

  .section-head::before,
  .section-head::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-color: transparent;
    border-style: solid;
  }

  .section-head::before {
    border-width: 0.4em;
    border-right-color: white;
    border-top-color: white;
  }

  .section-head::after {
    border-radius: 0.4em;
    border-width: 0.4em;
    border-right-color: transparent;
    border-top-color: transparent;
  }
</style>

<h2 class="section-head">{value}</h2>
