var itemCost, item, comment, numberOfItems, totalCost;

// Describe this function...
function add_to_Cart() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shopping_list = document.getElementById('shopping_list');
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  new_span.innerText = ' ---- ';

  new_li.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = '£';

  new_li.appendChild(new_span2);
  let new_span3 = document.createElement('span');
  new_span3.innerText = itemCost;

  new_li.appendChild(new_span3);

  element_shopping_list.appendChild(new_li);
  numberOfItems = (typeof numberOfItems === 'number' ? numberOfItems : 0) + 1;
  let element_total_items = document.getElementById('total_items');
  element_total_items.innerText = numberOfItems;
  let element_total_cost = document.getElementById('total_cost');
  element_total_cost.innerText = totalCost;
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


itemCost = 0;
let element_pd1 = document.getElementById('pd1');
element_pd1.setAttribute("src", 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
let element_pd2 = document.getElementById('pd2');
element_pd2.setAttribute("src", 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80');
let element_pd3 = document.getElementById('pd3');
element_pd3.setAttribute("src", 'https://c0.wallpaperflare.com/preview/932/979/739/dark-mode-black-late-night-work-inspiration-thumbnail.jpg');
let element_pd4 = document.getElementById('pd4');
element_pd4.setAttribute("src", 'https://www.wallpaperuse.com/wallp/86-864506_m.jpg');


document.getElementById('btnComment').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('stringComment').value);
  if (comment != '') {
    let element_list = document.getElementById('list');
    let new_div = document.createElement('div');
    let new_div2 = document.createElement('div');
    let new_span4 = document.createElement('span');
    if (getNumberOrString(document.getElementById('stringName').value) == '') {
      new_span4.innerText = 'Anonymous: ';
    } else {
      new_span4.innerText = getNumberOrString(document.getElementById('stringName').value);
      let new_span5 = document.createElement('span');
      new_span5.innerText = ': ';

      new_span4.appendChild(new_span5);
    }

    new_div2.appendChild(new_span4);
    let new_span6 = document.createElement('span');
    new_span6.innerText = comment;

    new_div2.appendChild(new_span6);

    new_div.appendChild(new_div2);

    element_list.appendChild(new_div);
  }

});

document.getElementById('button-cart2').addEventListener('click', (event) => {
  item = 'Acer LL87';
  itemCost = 399.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_Cart();

});

document.getElementById('button-cart3').addEventListener('click', (event) => {
  item = 'Dell IN65';
  itemCost = 599.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_Cart();

});

document.getElementById('button-cart1').addEventListener('click', (event) => {
  item = 'HP NJI321';
  itemCost = 319.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_Cart();

});

document.getElementById('button-cart4').addEventListener('click', (event) => {
  item = 'Apple 13 ';
  itemCost = 1699.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_Cart();

});
