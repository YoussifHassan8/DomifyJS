// Utility function to remove null and undefined values from arrays
// Used for conditional rendering
// Example: [1, null, 2, undefined, 3] -> [1, 2, 3]
export function withoutNulls(arr) {
  return arr.filter((item) => item != null);
}
