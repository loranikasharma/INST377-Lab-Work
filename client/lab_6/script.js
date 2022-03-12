/* eslint-disable camelcase */
function getRandomIntInclusive(min, max) {
  const new_Min = Math.ceil(min);
  const new_Max = Math.floor(max);
  return Math.floor(Math.random() * (new_Max - new_Min + 1) + new_Min);
}
function dataHandler(dataArray) {
  console.table(dataArray);
  const range = [...Array(15).keys()];
  const list_Items = range.map((item, index) => {
    const number_Of_Resteraunt = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[number_Of_Resteraunt];
  });
  return list_Items;
}
function createHTMLList(collection) {
  const target_list = document.querySelector('.resturant-id');
  target_list.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const display_name = name.toLowerCase();
    const inject_this_item = `<li>${display_name}</li>`;
    target_list.innerHTML = inject_this_item;
  });
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.Lab-5-form');
  const submit = document.querySelector('.form-rows');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';
    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      console.log('form submission');
      const restuarant_array = dataHandler(arrayFromJson.data);
      createHTMLList(restuarant_array);
    });
  }
  // this is called "dot notation"
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
