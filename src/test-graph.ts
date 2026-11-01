/**
 * Programmatic generation of a simple musical graph.
 * This gives an artefact to which transformations can
 * be applied, without having to write deserialisation or
 * authoring tools.
 * 
 * This in turn enables testing of both transformations
 * and renderers. */ 
import { pitch, chord, type Pitch, Beat, Bar } from "./musical-structure";
import type { GraphNode, Edge, Graph } from "./graph";

// Create a graph of Bars where each bar has some basical
// musical structure in it - just enough to test 
// rendering.
const aMinor: Bar = {
    beats: [
        chord([45, 60, 64], 0, 8),
    ]
}

const gDominantSeventh: Bar = {
    beats: [
        chord([], 0, 8),
    ]
}

const bar1: GraphNode<Bar> = { id: "bar1", value: aMinor };
const bar2: GraphNode<Bar> = { id: "bar2", value: gDominantSeventh };

const edges: Edge<Bar>[] = [
    { from: bar1, to: bar2 },
];

export const testGraph: Graph<Bar> = {
    nodes: [bar1, bar2],
    edges,
}