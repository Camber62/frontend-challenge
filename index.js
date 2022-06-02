
const cats = [
  { name: '1', favorite: false },
  { name: '2', favorite: true },
  { name: '3', favorite: false },
  { name: '4', favorite: true },
  { name: '5', favorite: false }
]

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
const newCats = getCatsFavorite()

console.log(newCats)

/*
function getCats(end) {
  return cats.slice(0, end)
}

const newCats = getCats(3)

console.log(newCats)
*/