function dataHandler(dataArray) {
  console.table(dataArray);
  const range = [...Array(15).keys()];
  range.forEach((item) => {
    console.log('range item', item);
  });
}
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.Lab-5-form');
  const submit = document.querySelector('.form-rows');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (arrayFromJson.data.length > 0) {
    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      console.log('form submission');
      submit.getElementsByClassName.display = 'block';
      dataHandler(arrayFromJson.data);
    });
  }
  // this is called "dot notation"
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
