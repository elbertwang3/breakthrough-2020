<script>
  import { scaleTime } from "d3-scale";
  import { timeParse } from "d3-time-format";

  export let data, months;
  console.log(months);
  export let width = 100;
  export let height = 100;
  const lineLength = 30;
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const parseDate = timeParse("%m/%d/%Y");

  $: chartWidth = width - margin.left - margin.right;
  $: chartHeight = height - margin.top - margin.bottom;

  $: yScale = scaleTime()
    .domain([new Date("2019-12-25"), new Date("2020-12-20")])
    .range([0, chartHeight]);
</script>

<style>
  /* your styles go here */
  .mid-line {
    stroke-width: 2px;
    stroke: #9a9a9a;
  }
  .g-circle {
    fill: white;
    stroke-width: 3px;
  }
  .g-circle.findings {
    stroke: #75a8c3;
  }
  .g-circle.policy {
    stroke: #36bba5;
  }

  .g-line {
    stroke: #9a9a9a;
  }

  .event {
    position: absolute;
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  }

  .event.findings {
    text-align: start;
  }

  .event.policy {
    text-align: end;
  }

  .event-date {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }

  .event-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }

  .month {
    width: 80px;
    position: absolute;
    text-align: center;
    background-color: #d1d3d4;
    padding: 0.25em;
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* .event img {
    max-width: 75%;
  } */

  .img-container {
    width: 75%;
  }

  .img-container img {
    width: 100%;
  }

  .img-container.findings {
    /* text-align: end; */
    margin-left: 25%;
  }

  .img-container.policy {
    /* text-align: start; */
    margin-right: 25%;
  }

  .brain_timeline {
    height: 100px;
  }

  .paper_timeline {
    height: 80px;
  }

  .brain_timeline img,
  .paper_timeline img {
    width: auto;
    height: 100%;
  }
</style>

{#each data as event}
  <div
    class={`event${event.type == 'FINDINGS' ? ' findings' : ' policy'}`}
    style={`top: ${event.yalign != 'bottom' && yScale(parseDate(event.date)) - 12}px; bottom: ${event.yalign == 'bottom' && chartHeight - yScale(parseDate(event.date)) - 12}px; left: ${event.type == 'FINDINGS' && chartWidth / 2 + lineLength}px; right: ${event.type != 'FINDINGS' && chartWidth / 2 + lineLength}px;`}>
    <div class="event-date">{event.date_text}</div>
    <p class="event-text">
      {@html event.text}
    </p>
    {#if event.img}
      <div
        class={`img-container ${event.img.replace('.png', '')}${event.type == 'FINDINGS' ? ' findings' : ' policy'}`}>
        <img src={`img/${event.img}`} />
      </div>
    {/if}
  </div>
{/each}

{#each months as month}
  <div class="month" style={`top: ${yScale(parseDate(month.date)) - 12}px;`}>
    {month.month_text}
  </div>
{/each}
<svg {width} {height}>
  <g transform={`translate(${margin.left},${margin.top})`} />
  <line
    class="mid-line"
    y1={0}
    y2={chartHeight}
    x1={chartWidth / 2}
    x2={chartWidth / 2} />
  <g class="g-events">
    {#each data as event}
      <g
        class="g-event"
        transform={`translate(${0}, ${yScale(parseDate(event.date))})`}>
        <line
          class="g-line"
          x1={chartWidth / 2}
          x2={chartWidth / 2 + (event.type == 'FINDINGS' ? lineLength - 5 : -lineLength + 5)} />
        <circle
          class={`g-circle${event.type == 'FINDINGS' ? ' findings' : ' policy'}`}
          r={6}
          cx={chartWidth / 2}
          cy={0} />
      </g>
    {/each}
  </g>
</svg>
