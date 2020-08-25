function distribute(m, n) {
  // if n is zero or less
    // return empty array 
  if (n <= 0) return [];

  // need an n length array to store the candies
    // filled with zeros
  const candies = Array.from({ length: n}).fill(0);
  if (m <= 0) return candies;

    const fillCandies = () => {
        // iterate up to number of children (n)
      for (let i = 0; i < candies.length; i++) {
        // increment the current value at the current index by 1
        candies[i]++;

        // decrement the number of candies left 
        m--; 
        
        // if numbers of candies is zero
        // break
        if (m === 0) break;
        
      }
    };
    while(m > 0) {
    fillCandies();
    };
    
  return candies;
}