async function weather() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API'); 
      }
      const rainData = await response.json(); 
      console.log(rainData);
    } catch (err) {
      console.log('Its a SUNNY DAY !!!');
      console.log(err);
    }
  }
  