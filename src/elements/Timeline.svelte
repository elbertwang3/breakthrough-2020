<script>
  import { final, months } from "../data/timeline";
  import TimelineChart from "./TimelineChart.svelte";

  let width, height;
</script>

<style>
  .timeline {
    /* padding-top: 2em; */
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
    grid-gap: 2.5rem;
    align-items: center;
  }

  .timeline-header {
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.1;
    /* text-align: center; */
  }

  .policy {
    color: #36bba5;
    text-align: end;
  }

  .findings {
    color: #75a8c3;
    text-align: start;
  }

  .timeline-chart {
    height: 5000px;
  }

  p {
    margin-bottom: 1em;
  }

  /* @media only screen and (max-width: 400px) {
    .timeline-chart {
      margin-top: 2em;
      height: 5000px;
    }
  } */
</style>

<div class="timeline" id="a-year-like-no-other">
  <h3 class="svelte-9jh3mz">A year like no other</h3>
  <p>
    This year saw an explosion of research into COVID-19—by mid-December, more
    than 200,000 papers had been published in peer-reviewed journals, and many
    more had been posted online to non—peer-reviewed preprint servers. Key
    findings appear below, pegged to the date they first appeared online. At the
    same time, the world was struggling—and in many places, failing—to contain
    the pandemic.
  </p>
  <div class="timeline-headers">
    <div class="timeline-header policy">Policy and Public Health</div>
    <div class="timeline-header findings">Findings</div>
  </div>
  <div
    class="timeline-chart"
    bind:clientWidth={width}
    bind:clientHeight={height}>
    <TimelineChart data={final} {months} {width} {height} />
  </div>
</div>
