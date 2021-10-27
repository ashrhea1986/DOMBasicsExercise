console.log(`Hello World!`);

// 1
const portillos = document.getElementById(`portillos`)
console.log(portillos);

// 2
const images = document.getElementsByTagName(`img`)
console.log(images);

// 3
const centered = document.getElementsByClassName(`center`)
console.log(centered);

// 4
const ginosEast = document.querySelector(`div`)
console.log(ginosEast);

// 5
const pTags = document.querySelectorAll(`p`)
console.log(pTags);

// 6a
const h1 = document.querySelector(`h1`)
console.dir(h1);
// 6b
h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!"

// 7a 
const others = document.getElementById(`others`)
console.log(others);
// 7b
others.innerHTML = `<h3>Other Favorites</h3>`

// 8a
const aTag = document.querySelector(`a`)
console.dir(aTag);
// 8b
aTag.innerHTML = `<a href="https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/">Classic Chicago Foods</a>`

// 9
h1.classList.add(`background`, `text-color`)

// 10
h1.classList.remove(`background`)

// 11a
const h4 = document.createElement(`h4`)
// 11b
h4.innerText = `CHICAGO: A great place to eat!`
// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a 
const h5 = document.createElement(`h5`);
// 12b
h5.innerText = `See you in the Windy City Sometime!`
// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
const li = document.getElementsByTagName(`li`)
const jBeef = li[0];
jBeef.remove()

// 14a
const divs = document.getElementsByTagName(`div`)
console.dir(divs);
// 14b 
for (d of divs){
    d.classList.toggle(`background`)
};

// 15a 
const hungry = [
    "Thanks",
    "A",
    "Lot",
    "Now",
    "I",
    "Am",
    "Hungry"
];
// 15b
?