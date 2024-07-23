// index.js

// Function to find drivers matching a name (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to find drivers where the 'name' property matches the provided name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  