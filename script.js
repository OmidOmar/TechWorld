var items, item, comment, totalCost, itemCost, numberOfItems, x, countinglike;

// Describe this function...
function add_to_cart() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  items.unshift(item);
  let element_shopping_list = document.getElementById('shopping_list');
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  new_span.innerText = ' --- ';

  new_li.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = itemCost;

  new_li.appendChild(new_span2);
  let new_span3 = document.createElement('span');
  new_span3.innerText = ' £';

  new_li.appendChild(new_span3);

  element_shopping_list.appendChild(new_li);
  numberOfItems = (typeof numberOfItems === 'number' ? numberOfItems : 0) + 1;
  let element_total_items = document.getElementById('total_items');
  element_total_items.innerText = numberOfItems;
  let element_total_cost = document.getElementById('total_cost');
  element_total_cost.innerText = totalCost;
  let new_span4 = document.createElement('span');
  new_span4.innerText = ' £';

  element_total_cost.appendChild(new_span4);
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


items = [];
totalCost = 0;
let element_pd1 = document.getElementById('pd1');
element_pd1.setAttribute("src", 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
let element_pd2 = document.getElementById('pd2');
element_pd2.setAttribute("src", 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80');
let element_pd3 = document.getElementById('pd3');
element_pd3.setAttribute("src", 'https://c0.wallpaperflare.com/preview/932/979/739/dark-mode-black-late-night-work-inspiration-thumbnail.jpg');
let element_pd4 = document.getElementById('pd4');
element_pd4.setAttribute("src", 'https://www.wallpaperuse.com/wallp/86-864506_m.jpg');
countinglike = 0;


document.getElementById('btnComment').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('stringComment').value);
  if (comment != '') {
    x = (typeof x === 'number' ? x : 0) + 1;
    let element_list = document.getElementById('list');
    let new_div = document.createElement('div');
    let new_span5 = document.createElement('span');
    if (getNumberOrString(document.getElementById('stringName').value) == '') {
      new_span5.innerText = 'Anonymous: ';
    } else {
      new_span5.innerText = getNumberOrString(document.getElementById('stringName').value);
      let new_span6 = document.createElement('span');
      new_span6.innerText = ': ';

      new_span5.appendChild(new_span6);
    }

    new_div.appendChild(new_span5);
    let new_span7 = document.createElement('span');
    new_span7.innerText = comment;

    new_div.appendChild(new_span7);

    element_list.appendChild(new_div);
  }
  let element_stringComment = document.getElementById('stringComment');
  element_stringComment.replaceChildren();

});

document.getElementById('button-cart2').addEventListener('click', (event) => {
  item = 'Acer LL87';
  itemCost = 499.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_cart();

});

document.getElementById('button-cart3').addEventListener('click', (event) => {
  item = 'DELL IN65';
  itemCost = 599.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_cart();

});

document.getElementById('button-cart1').addEventListener('click', (event) => {
  item = 'HP NJI321';
  itemCost = 319.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_cart();

});

document.getElementById('button-cart4').addEventListener('click', (event) => {
  item = 'Apple Pro 13';
  itemCost = 1699.99;
  totalCost = (typeof totalCost === 'number' ? totalCost : 0) + itemCost;
  add_to_cart();

});