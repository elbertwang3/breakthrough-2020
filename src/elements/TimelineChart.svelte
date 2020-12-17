<script>
  import { select } from "d3-selection";
  import { scaleLinear, scaleTime } from "d3-scale";
  // import { axisLeft, axisBottom } from 'd3-axis';
  import { timeParse, timeFormat } from "d3-time-format";
  import { extent } from "d3-array";

  export let data;
  console.log(data);
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
    stroke-width: 2.5px;
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
    font-size: 12px;
    line-height: 14px;
  }
</style>

{#each data as event}
  <div
    class={`event${event.type == 'FINDINGS' ? ' findings' : ' policy'}`}
    style={`top: ${yScale(parseDate(event.date)) - 12}px; left: ${event.type == 'FINDINGS' && chartWidth / 2 + lineLength}px; right: ${event.type != 'FINDINGS' && chartWidth / 2 + lineLength}px;`}>
    <div class="event-date">{event.date_text}</div>
    <div class="event-text">
      {@html event.text}
    </div>
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
          x2={chartWidth / 2 + (event.type == 'FINDINGS' ? lineLength : -lineLength)} />
        <circle
          class={`g-circle${event.type == 'FINDINGS' ? ' findings' : ' policy'}`}
          r={5}
          cx={chartWidth / 2}
          cy={0} />
      </g>
    {/each}
  </g>
</svg>
