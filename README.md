## Composer

This is TypeScript tooling for a novel music composing and arranging tool.

It comprises:

- data modelling
- visual rendering
- audio rendering

The novel aspect of the tool is the way that music is depicted: instead of traditional
music notation, Composer structures the music as a directed graph. Each node in
the graph represents harmony of a specific duration (a number of beats). The base
harmony of each node is a chord name (eg. D minor, A major 7th). On top of this
chord name, multiple orthogonal levels of decoration may be added:

- chord inversion
- voicing
- rhythm

```mermaid
graph LR
    A(Bar 1)
    A --> B(Bar 2)
    B --> |Repeat| A
    B --> C(Bar 4)
```
_Example visual depiction_

## Pivot, repurpose

The directed graph is a very natural way to describe a general
execution schedule. This could be music, but it could also be
a graph of jobs to execute, with dependencies: a very standard
structure in project management, and in manufacturing execution.

It's no coincidence that the Gantt chart used in project
planning looks like the piano roll view used in music. Notably,
several aspects of musicality are also applicable when visually
assessing the quality of a schedule:

- it must have some space in it so as not to overwhelm the listener
- structures must be harmonic and melodic: this appears in scheduling,
  because of resource contention requiring tasks to be initiated in patterns.

## Overview 

This project is intentionally sparse on tooling. A single `index.html`
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

TypeScript must be compiled to JavaScript. `index.html` is already
written to expect, and to load, the JavaScript file that is produced.

Running `tsc --watch` in the project root directory will automatically
recompile TypeScript files as they change. The source and destination
are configured in `tsconfig.json` so no command line options are
required.

Then load `index.html` in a browser.
