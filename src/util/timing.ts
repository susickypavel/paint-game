/**
 * Double precision floating-point number describing number
 * of milliseconds between two points in time.
 */
export type HighPrecisionTimeStamp = number;

/**
 * Returns a constantly increasing time that returns the number of
 * milliseconds since the start of the program.
 *
 * Independent from system clock.
 */
export const getTimestamp = (): HighPrecisionTimeStamp => performance.now();
