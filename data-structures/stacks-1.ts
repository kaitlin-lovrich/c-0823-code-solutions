/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  return undefined;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  return undefined;
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  return false;
}
