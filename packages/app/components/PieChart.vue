<script setup lang="ts">
import * as d3 from "d3";

const pieChartRef = ref()

const props = defineProps<{
    percent: number;
}>();

const width = 500

const createChart = () => {
  const height = width / 2
  const outerRadius = height / 2 - 10;
  const innerRadius = outerRadius * 0.75;

  const tau = 2 * Math.PI;

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("height", 50)
      .attr("width", 200)
  
      const g = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0);

  const background = g.append("path")
        .datum({endAngle: tau})
        .style("fill", "#ddd")
        .attr("d", arc);
  
  const foreground = g.append("path")
        .datum({endAngle: props.percent / 100 * tau})
        .style("fill", "black")
        .attr("d", arc);

  function arcTween(newAngle) {
    return function(d) {
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      
      return function(t) {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    };
  }
  return svg.node()!;
}

onMounted(() => {
    pieChartRef.value.append(createChart())
})
</script>

<template>
    <div ref="pieChartRef" class="chart"></div>
</template>
