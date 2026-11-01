## Composer

This is TypeScript tooling for a novel music composing and arranging tool.

It comprises:

- data modelling
- visual rendering
- audio rendering

The novel aspect of the tool is the way that music is depicted: instead of traditional
music notation, Composer structures the music as a directed graph.  Each node in 
the graph represents harmony of a specific duration (a number of beats).  The base
harmony of each node is a chord name (eg. D minor, A major 7th).  On top of this 
chord name, multiple orthogonal levels of decoration may be added:

- chord inversion
- voicing
- rhythm

## Overview 

This project is intentionally sparse on tooling.  A single `index.html`
provides the canvas into which JavaScript (compiled from TypeScript)
renders.  

More typically a front end framework like React would be used for this
purpose, but one (arbitrary!) design goal is for the web page and the
project to be lightweight and dependency free.

Visual rendering is done in SVG because it's lighter than manipulating
DOM elements.

One concession to simplicity is that TypeScript is used for the
power of the type system.

## Code design

The underlying structure is described abstractly: a graph that is
traversed in order to produce the consecutive pieces of musical
structure.

The graph can be rendered in different ways eg. visually or audibly.

The domain itself is oriented around composition of functions

## Running the project

TypeScript must be compiled to JavaScript.  `index.html` is already
written to expect, and to load, the JavaScript file that is produced.