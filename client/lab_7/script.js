/* eslint-disable camelcase */
function getRandomIntInclusive(min, max) {
  const new_Min = Math.ceil(min);
  const new_Max = Math.floor(max);
  return Math.floor(Math.random() * (new_Max - new_Min + 1) + new_Min);
}
function dataHandler(dataArray) {
  // console.table(dataArray);
  const range = [...Array(15).keys()];
  // console.log(range);
  const list_Items = range.map((item, index) => {
    const number_Of_Resteraunt = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[number_Of_Resteraunt];
  });
  console.log(list_Items);
  return list_Items;
}
function createHTMLList(collection) {
  const target_list = document.querySelector('#resto-list');
  target_list.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const display_name = name.toLowerCase();
    const inject_this_item = `<li>${display_name}</li>`;

    target_list.innerHTML += inject_this_item;
  });
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.Lab-5-form');
  const submit = document.querySelector('.form-rows');
  const resto_name = document.querySelector('#resto_name');
  const zip_code = document.querySelector('#zip_code');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  let current_array = [];
  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';
    resto_name.addEventListener('input', async(event) => {
      console.log(event.target.value);
      if (current_array.length < 1) { return; }
      const selected_val = current_array.filter((item) => {
        const lower_name = item.name.toLowerCase();
        const lower_val = event.target.value.toLowerCase();
        return lower_name.includes(lower_val);
      });
      console.log(selected_val);
      createHTMLList(selected_val);
    });
    zip_code.addEventListener('input', async(zipevent) => {
      console.log(zipevent.target.value);
      if (current_array.length < 1) { return; }
      const zip_value = current_array.filter((item) => item.zip.includes(zipevent.target.value));
      console.log(zip_value);
      createHTMLList(zip_value);
    });
    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      // console.log('form submission');
      current_array = dataHandler(arrayFromJson.data);
      createHTMLList(current_array);
    });
  }
  // this is called "dot notation"
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
