/**
 * @file Generic directed graph model and supporting code for graph traversal.
 *
 * In the context of Composer, this will always be a `Graph<Bar>`, capturing
 * some sequential arrangement of bars, agnostic of the content of bars
 * themselves.  The graph is not acyclic due to the possibility of
 * musical repeats.
 *
 * That is, we expect:
 *
 * type MusicalGraph = Graph<Bar>;
 *
 * even though this modelling could capture workflows or dependencies
 * of any type.
 */
export type GraphNode<T> = {
	id: string;
	value: T;
};

export type Edge<T> = {
	from: GraphNode<T>;
	to: GraphNode<T>;
};

export type Graph<T> = {
	nodes: GraphNode<T>[];
	edges: Edge<T>[];
};
