/**
 * Sorts products based on the specified criteria.
 *
 * @param {Object} a - The first product to compare.
 * @param {Object} b - The second product to compare.
 * @param {number} sortBY - The sorting criteria. 
 *                          0: Name ascending
 *                          1: Name descending
 *                          2: Price ascending
 *                          3: Price descending
 * @returns {number} - The sort order: -1 for a < b, 1 for a > b, 0 for a === b.
 */
export function SortProducts(a, b, sortBY) {
  switch (sortBY) {
    // Sort by name in ascending order
    case 0: {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    // Sort by name in descending order
    case 1: {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    }
    // Sort by price in ascending order
    case 2: {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    // Sort by price in descending order
    case 3: {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    // Default case if sortBY is not recognized
    default:
      return;
  }
}
