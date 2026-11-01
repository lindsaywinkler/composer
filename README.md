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