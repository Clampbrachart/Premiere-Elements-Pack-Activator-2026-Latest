function uniqueArray<T>(array: T[]): T[] {
  const uniqueItems = new Set<T>();
  array.forEach(item => uniqueItems.add(item));
  return Array.from(uniqueItems);
}
function sortArray<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return array.slice().sort(compareFn);
}
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}
function mapArray<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}
function flattenArray<T>(array: T[][]): T[] {
  return array.reduce((acc, val) => acc.concat(val), []);
}
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
function zipArrays<T, U>(array1: T[], array2: U[]): [T, U][] {
  const length = Math.min(array1.length, array2.length);
  const result: [T, U][] = [];
  for (let i = 0; i < length; i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;
}
function debounce<T extends (...args: any[]) => any>(func: T, delay: number): T {
  let timeoutId: NodeJS.Timeout | null = null;
  return function (...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  } as T;
}
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let lastFunc: NodeJS.Timeout | null;
  let lastRan: number;
  return function (...args: any[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (Date.now() - lastRan >= limit) {
        func(...args);
        lastRan = Date.now();
      }
    }
  } as T;
}
