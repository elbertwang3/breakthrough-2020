<script>
  import data from "../data/timeline";
  import TimelineChart from "./TimelineChart.svelte";
  console.log(data);

  let width, height;
</script>

<style>
  .timeline {
    padding-top: 2em;
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
    margin-bottom: 0.5em;
  }
  .timeline-headers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
  }

  .timeline-header {
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.1;
    text-align: center;
  }

  .policy {
    color: #36bba5;
  }

  .findings {
    color: #75a8c3;
  }

  .timeline-chart {
    margin-top: 2em;
    height: 3000px;
  }
</style>

<div class="timeline" id="timeline:-a-year-like-no-other">
  <h3 class="svelte-9jh3mz">Timeline: A year like no other</h3>
  <div class="timeline-headers">
    <div class="timeline-header policy">Policy and Public Health</div>
    <div class="timeline-header findings">Findings</div>
  </div>
  <div
    class="timeline-chart"
    bind:clientWidth={width}
    bind:clientHeight={height}>
    <TimelineChart data={data.final} {width} {height} />
  </div>
</div>
