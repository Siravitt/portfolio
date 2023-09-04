"use client"

import * as d3 from 'd3'
import data from '@/utils/data';
import React from 'react';

export default function BubbleUI() {
    React.useEffect(() => {
        const nodes = data.map(Object.create)
        const bubble = document.getElementById('bubble')
        const width = 550
        const height = 550

        const svg = d3.select(bubble).append('svg')
            .attr("height", height)
            .attr("width", width)
            .append("g")
            .attr("transform", "translate(0,0)")

        const defs = svg.append('defs')

        const simulation = d3.forceSimulation()
            .force('x', d3.forceX(width / 2).strength(0.05))
            .force('y', d3.forceY(height / 2).strength(0.05))
            .force('collide', d3.forceCollide((d: any) => radiusScale(d.r)))

        const radiusScale = d3.scaleSqrt().domain([1, 10]).range([20, 90])

        defs.selectAll('id')
            .data(nodes)
            .enter().append('pattern')
            .attr('class', 'stack')
            .attr('id', (d) => d.id)
            .attr('height', '100%')
            .attr('width', '100%')
            .attr('patternContentUnits', 'objectBoundingBox')
            .append('image')
            .attr('height', 1)
            .attr('width', 1)
            .attr('preserveAspectRatio', 'none')
            .attr('xlink:href', (d) => '/images/icons/' + d.id + '.png')

        const circles = svg.selectAll('size')
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", (d: any) => radiusScale(d.r))
            .attr("fill", (d)=>`url(#${d.id})`)
            .attr('cx', 100)
            .attr('cy', 300)


        const ticked = () => {
            circles.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y)
        }
        simulation.nodes(nodes).on('tick', ticked)
    })
    return <div id="bubble" className='w-full h-full'></div>
}
