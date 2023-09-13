let orderedItems = []; //first they have to decclare a empty array

function fnOrder(item) {
  //this is the none miss nothing is snow and displa
  let class_ = ""; //it is used to declare the empty string
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "Veg1";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";

  document.querySelector("." + class_).style.display = "none"; //it is used to block the current element
  document.querySelector("#div-quantity-" + class_).style.display = "block"; //it is used to display the value
  orderedItems.push({ item: class_, count: 1 }); //default the value is should be 1
}

function fnAdd(item) {
  let class_ = "";
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "Seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "Veg1";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";
  let count = document.querySelector("#p-count-" + class_).innerHTML;
  count = parseInt(count) + 1;
  document.querySelector("#p-count-" + class_).innerHTML = count;
  let Index = orderedItems.findIndex((e) => e.item == class_); //it is used to determine the index the element
  orderedItems[Index].count = count;
  orderCount++;
  document.querySelector("#cart-count").innerHTML = orderCount;
}
function fnSubtract(item) {
  let class_ = "";
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "Seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "veg";
  else if (item == 6) class_ = "Gulub";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";

  let count = document.querySelector("#p-count-" + class_).innerHTML;
  count = parseInt(count) - 1;
  document.querySelector("#p-count-" + class_).innerHTML = count;
  let Index = orderedItems.findIndex((e) => e.item == class_);
  orderedItems[Index].count = count;
}
