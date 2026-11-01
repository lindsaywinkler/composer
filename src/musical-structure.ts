/**
 * midi-like description of pitch.  A human readable description can be derived
 * from that base information.  Conversely, a helper can
 * generate a pitch from a human readable description.
 */
export type Pitch = {
	midiNumber: number;
	velocity: number;
};

// There's explicitly no concept of `Note`, which would be a pitch
// plus onset time and duration, traditionally.

/**
 * Beat is a set of pitches which sound together.  That is, all
 * the pitches in a beat are played harmonically - at the same time.
 *
 * Beats are aliased to quavers, meaning possible rhythms are heavily
 * constrained.
 */
export type Beat = {
	pitches: Pitch[];

	/** Relative onset is a number of quavers from the start of the bar */
	relativeOnset: number;
	/** Duration is in quavers */
	duration: number;
};

/**
 * A `Bar` is a bag of beats.  It doesn't have a time signature:
 * notes will just sound at some delay after the start of the bar.
 */
export type Bar = {
	beats: Beat[];
};

// Basic helpers below
export const pitch = (midiNumber: number, velocity = 80): Pitch => ({
	midiNumber,
	velocity,
});

export const chord = (
	midiNumbers: number[],
	relativeOnset: number,
	duration: number,
): Beat => ({
	pitches: midiNumbers.map((n) => pitch(n)),
	relativeOnset,
	duration,
});

// Replace or augment this with `Bar` transformers which gradually decorate
// the `Bar` into the final form to be rendered/played.
//
// eg. taking a tonic note and building a chord of a particular type
// on top of it, then voicing and inverting the chord into the required form
// (potentially using context and voice leading) and then adding rhythm.
//
// The ultimate result is a bar that can be inserted into a graph, to form
// one component of a piece of music.
