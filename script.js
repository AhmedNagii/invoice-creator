const itemsContainerEl = document.getElementById("items-container");
const washBtnEl = document.getElementById("wash-btn");
const MowBtnEl = document.getElementById("mowlawn-btn");
const pullWeedsEl = document.getElementById("pullweeds-btn");
const totalAmountEl = document.getElementById("total-amount");
const resetBtnEl = document.getElementById('reset-btn')
let total = 0;

let servicesTypes = [
  {
    name: "Wash Car",
    cost: 10,
  },
  {
    name: "Mow Lawn",
    cost: 20,
  },
  {
    name: "Pull Weeds",
    cost: 30,
  },
];

let soldServices = [];

function creatElement(item, cost) {
  let listItems = `<li class = 'hints-text-container'><span>
   <h2 class='item-info'>${item}  <button id= 'remove-btn'>Remove</button></h2></span>
   <span>
   <h2 class='item-info'><span id = 'dollor-sign'> $</span>${cost}</h2>
   </span>
   </li>
  `;
  soldServices.push(listItems);
}

function renderItems(itemIndex) {
  creatElement(servicesTypes[itemIndex].name, servicesTypes[itemIndex].cost);
  total += servicesTypes[itemIndex].cost;
  totalAmountEl.textContent = total;
  let items = "";
  for (let i = 0; i < soldServices.length; i++) {
    items += soldServices[i];
  }
  itemsContainerEl.innerHTML = items;
}

washBtnEl.addEventListener("click", function () {
  renderItems(0);
});
MowBtnEl.addEventListener("click", function () {
  renderItems(1);
});
pullWeedsEl.addEventListener("click", function () {
  renderItems(2);
});


resetBtnEl.addEventListener('click', function (){
    soldServices = []
    itemsContainerEl.innerHTML = '';
    total = 0
    totalAmountEl.textContent =  '$0'
})


const removBtn = document.getElementById('remove-btn')
removBtn.addEventListener('click', function(){
    console.log('remooooooove')
})