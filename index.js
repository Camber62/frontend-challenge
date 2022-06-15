

// 1. Напишите функцию, которая возвращает
// 3 первых кота в виде массива

function getCats(start, end) {
  const newCats = []

  for (let i = start; i < end; i++) {
    newCats.push(cats[i])
  }

  return newCats
}

function getCatsFavorite() {
  const newCats = []

  for (let i = 0; i < cats.length; i++) {
    if (cats[i].favorite === true) {
      newCats.push(cats[i])
    }
  }

  return newCats
}

// function addToFavorite(index) {
//   cats[index].favorite = true
// }
//
// function removeToFavorite(index) {
//   cats[index].favorite = false
// }
//
// addToFavorite(0)
// removeToFavorite(0)
//


/*
function getCats(end) {
  return cats.slice(0, end)
}

const newCats = getCats(3)

console.log(newCats)
*/

let inputLimit = document.querySelector('input')
let inputPage = document.querySelector('input')
let button = document.querySelector('button')
let buttonPage = document.querySelector('.btn')

let cats



;(async () => {

    await getAllCAts();
})();

let cats = [];

async function getAllCAts(limit,page) {
    if(limit === ''){
        limit=15;
    }
    if(page === ''){
        page=1;
    }
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}$order=ASC`, {
        headers: {
            "x-api-key": "48ef3a50-cb8a-4f11-807d-e39a84e58f5948ef3a50-cb8a-4f11-807d-e39a84e58f59"
        }
    });
    cats = await res.json();
    console.log(cats)
    return cats
}



button.addEventListener('click',function (event){
    getAllCAts(inputLimit.value,inputPage.value)
    // console.log(inputPage.value)
})
let i = 0;
buttonPage.addEventListener('click',function (event){
    i++;
    getAllCAts(15 , i)
    console.log(i)

})
