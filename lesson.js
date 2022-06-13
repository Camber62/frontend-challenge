const cats = [
    { id: "1", favorite: false },
    { id: "2", favorite: true },
    { id: "3", favorite: false }
];

// function getFavoriteCats() {
//   const catsFavorites = [];
//   for (let i = 0; i < cats.length; i++) {
//     if (cats[i].favorite === true) {
//       catsFavorites.push(cats[i]);
//     }
//   }

//   return catsFavorites;
// }
// const res = getFavoriteCats();
// console.log(res);

// function getFavoriteCats(index) {
//   let cat = null;
//   for (let i = 0; i < cats.length; i++) {
//     if (cats[i].id === index) {
//       cat = cats[i];
//       break;
//     }
//   }

//   return cat;
// }
// const res = getFavoriteCats("1");
// console.log(res);

// function getFavoriteCats(id,favorites) {
//     for (let i = 0; i < cats.length; i++) {
//       if (cats[i].id === id) {
//         cats[i].favorite = favorites;
//         break;
//       }
//     }
//   }
//   const res = getFavoriteCats("1",true);
//   const res1 = getFavoriteCats("1",false);

// function getFavoriteCats(id) {
//     for (let i = 0; i < cats.length; i++) {
//         if (cats[i].id === id) {
//             cats[i].favorite = !cats[i].favorite;
//             break;
//         }
//     }
// }
// const res = getFavoriteCats("1", true);
// console.log(cats[0]);
//
// const res1 = getFavoriteCats("2", false);
// console.log(cats[1]);