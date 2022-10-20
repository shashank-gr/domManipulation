//Multiple selector- by class name
const itemList = document.getElementsByClassName("list-group-item");
//gives a HTML collection
console.log(itemList);

for (const item of itemList) {
  item.style.backgroundColor = "#eee";
  item.style.fontWeight = "bold";
}

itemList[2].style.backgroundColor = "lightgreen";
