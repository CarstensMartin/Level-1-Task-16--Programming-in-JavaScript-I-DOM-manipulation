//Create an array with atlease 4 grocery items
let shoppingList = ["Coffee", "Tea", "Sugar", "Milk", "Honey"];

//Determine the length of the array
let listLength = shoppingList.length;

//create variable parent for the children that are to be created in li - identify by ID
let htmlList = document.querySelector('#itemList');

//Create a for loop - based on the number of items in the array
for (i = 0; i < listLength; i++) {

    //Create variable li
    let listItem = document.createElement('li');
    //Create the content (innerHTML) of the list item li
    listItem.innerHTML = shoppingList[i];
    //Create a child in the html document with the characteristics given - element li and innerHTML content
    htmlList.appendChild(listItem);
}

//declare variable and based on id the nth child
let purchase1 = document.querySelector('#itemList>li:nth-child(1)');
//Change the syle of the child that is declared as variable using Javascript to indicate item have been bought.
purchase1.style = "text-decoration:line-through";


//declare variable and based on id the nth child
let purchase2 = document.querySelector('#itemList>li:nth-child(3)');
//Change the syle of the child that is declared as variable using Javascript to indicate item have been bought.
purchase2.style = "text-decoration:line-through";