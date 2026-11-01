/**
 * Programmatic generation of a simple musical graph.
 * This gives an artefact to which transformations can
 * be applied, without having to write deserialisation or
 * authoring tools.
 * 
 * This in turn enables testing of both transformations
 * and renderers. */ 
import type { Pitch, Beat, Bar } from "./musical-structure";
import type { GraphNode, Edge, Graph } from "./graph";