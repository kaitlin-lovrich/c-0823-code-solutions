import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  if (stack.pop() === undefined) return 0;
  return countValues(stack);
}

export function maxValue(stack: Stack<number>): number {
  return -Infinity;
}
