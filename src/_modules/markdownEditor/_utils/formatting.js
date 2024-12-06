export const isSymbolOpen = (linesBeforeCursor, linesAfterCursor, pattern) => {
    function countDoubleAsterisks(arr) {
        let count = 0;
        arr.forEach(str => {
          count += (str.match(pattern) || []).length;
        });
        return count;
      }
    
      // Count '**' in both arrays
      const beforeCount = countDoubleAsterisks(linesBeforeCursor);
      const afterCount = countDoubleAsterisks(linesAfterCursor);
    
      // Check if '**' is open on the left side and closed on the right side
      if (beforeCount % 2 !== 0 && (beforeCount + afterCount) % 2 === 0) {
        return true;
      } 
        return false;
      
}