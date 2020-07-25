//remove item
const firstItem = document.getElementById("firstRemoveItem");
firstItem.addEventListener("click", function(){
   document.getElementById("firstCardItem").style.display = "none";
   removeItem("firstItemPrice");
})
const secondItem = document.getElementById("secondRemoveItem");
secondItem.addEventListener("click", function(){
   document.getElementById("secondCardItem").style.display = "none";
   removeItem("secondItemPrice");
})

//add first items number
const addFirstItem = document.getElementById("addFirstItem");
addFirstItem.addEventListener("click", function(){
   addItemNumber("firstItemNumber", "firstItemPrice", 1219);
})

//add second items number
const addSecondItem = document.getElementById("addSecondItem");
addSecondItem.addEventListener("click", function(){
   addItemNumber("secondItemNumber", "secondItemPrice", 59);
})
//minus first item number
const minusFirstItem = document.getElementById("minusFirstItem");
minusFirstItem.addEventListener("click", function(){
   minusItemNumber("firstItemNumber", "firstItemPrice", 1219);
})

//minus second item number
const minusSecondItem = document.getElementById("minusSecondItem");
minusSecondItem.addEventListener("click", function(){
   minusItemNumber("secondItemNumber", "secondItemPrice", 59);
})

//checkout
const checkout = document.getElementById("checkout");
checkout.addEventListener("click", function(){
   alert("!Are you sure want to \"Check Out\" ?");
})

//Function for add Item Number
function addItemNumber(itemNumberId, itemPriceId, price){
const itemValue = document.getElementById(itemNumberId).value;
const itemNumber = parseFloat(itemValue);
const itemText = document.getElementById(itemNumberId).value = itemNumber + 1;
const itemPrice = document.getElementById(itemPriceId).innerText;
const itemPriceNumber = parseFloat(itemPrice);
const itemUpdatePrice = document.getElementById(itemPriceId).innerText = itemPriceNumber + price;

const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const subtotalUpdate = document.getElementById("subTotal").innerText = subTotalNumber + price;
const totalUpdate = document.getElementById("total").innerText = subTotalNumber + price;
}

//Function for minus Item Number
function minusItemNumber(itemNumberId, itemPriceId, price){
const itemValue = document.getElementById(itemNumberId).value;
const itemNumber = parseFloat(itemValue);
if(itemNumber < 1){
   return 1;
}
const itemText = document.getElementById(itemNumberId).value = itemNumber - 1;
const itemPrice = document.getElementById(itemPriceId).innerText;
const itemPriceNumber = parseFloat(itemPrice);
const itemUpdatePrice = document.getElementById(itemPriceId).innerText = itemPriceNumber - price;

const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const subtotalUpdate = document.getElementById("subTotal").innerText = subTotalNumber - price;
const totalUpdate = document.getElementById("total").innerText = subTotalNumber - price;
}
//function for remove item
function removeItem (id){
const itemPrice = document.getElementById(id).innerText;
const itemPriceNumber = parseFloat(itemPrice);
const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const SubtotalUpdate = document.getElementById("subTotal").innerText = subTotalNumber - itemPriceNumber;
const totalUpdate = document.getElementById("total").innerText = subTotalNumber - itemPriceNumber;
}