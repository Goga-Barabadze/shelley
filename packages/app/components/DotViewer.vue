<script setup lang="ts">
import { hierarchy, forceSimulation, forceLink, forceManyBody, forceX, forceY, create, drag } from "d3";

const containerRef = ref<HTMLDivElement>()

const data = {
    name: "The Earth is Round",
    isMain: true,
    children: [
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #5", children: [] },
                { name: "Another node #123", children: [] },
            ]
        },
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
            ]
        },
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #4", children: [] },
                { name: "Another node #5", children: [] },
                { name: "Another node #123", children: [] },
            ]
        },
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
            ]
        },
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
            ]
        },
        {
            name: "Another node",
            children: [
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
                { name: "Another node #2", children: [] },
            ]
        }
    ]
}

const localDrag = (simulation) => {
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
  }
  
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  return drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}

const createChart = () => {
  const width = 300;
  const height = 300;

  const root = hierarchy(data);
  const links = root.links();
  const nodes = root.descendants();

  const simulation = forceSimulation(nodes)
      .force("link", forceLink(links).id(d => d.id).distance(0).strength(1))
      .force("charge", forceManyBody().strength(-150))
      .force("x", forceX())
      .force("y", forceY());

  const svg = create("svg")
      .attr("width", "100%")
      .attr("height", "300px")
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%;");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 3)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("fill", d => d.children ? null : "#000")
      .attr("stroke", d => d.children ? null : "#fff")
      .attr("r", d => d.data.isMain ? 15 : 4)
      .call(localDrag(simulation));

  node.append("title")
      .text(d => d.data.name);

  simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  });

  return svg.node()!;
}

onMounted(() => {
    containerRef.value?.append(createChart())
})
</script>

<template>
    <div ref="containerRef"></div>
</template>

<style lang="scss">
canvas {
  background: #FFF;
}
</style>