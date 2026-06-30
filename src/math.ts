/**
 * Add two numbers.
 *
 * A leaf helper that `index.ts` imports directly, giving the dependency graph
 * a module with no outgoing edges of its own.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/** Multiply two numbers. */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Sum a list of numbers, returning 0 for an empty list.
 *
 * Implemented on top of {@link add} so the reducer stays consistent with
 * single-pair addition.
 */
export function sum(values: number[]): number {
  return values.reduce((acc, n) => add(acc, n), 0);
}
