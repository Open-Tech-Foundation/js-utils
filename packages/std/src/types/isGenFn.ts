/**
 * Checks if the given value is a generator function.
 *
 * @example
 *
 * isFn(function() {}) //=> false
 *
 * isFn(function*() {}) //=> true
 */

export default function isGenFn(val: unknown): val is GeneratorFunction {
  const a = ['[object GeneratorFunction]', '[object AsyncGeneratorFunction]'];
  return a.includes(Object.prototype.toString.call(val));
}
