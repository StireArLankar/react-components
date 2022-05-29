/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export function clamp(number: number, lower: number, upper: number): number {
  if (upper !== undefined) {
    number = number <= upper ? number : upper
  }

  if (lower !== undefined) {
    number = number >= lower ? number : lower
  }

  return number
}

export default clamp
