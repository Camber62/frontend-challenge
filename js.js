

// ;(async () => {
//
//     await getAllCAts();
// })();
//
// let cats = [];
//
// async function getAllCAts() {
//     const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=15', {
//         headers: {
//             "x-api-key": "48ef3a50-cb8a-4f11-807d-e39a84e58f5948ef3a50-cb8a-4f11-807d-e39a84e58f59"
//         }
//     });
//     cats = await res.json();
//     console.log(cats)
//     return cats
// }

const main = document.querySelector('main')
const allCots = document.querySelector('.all')
const favoritesCats = document.querySelector('.favorites')


//отрисовка

function draw() {
    for (let i = 0; i < cats.length; i++) {
        main.innerHTML +=
            `<div class = 'img'>
        <img src="${cats[i].url}" alt="img">
        <div class='heart'>
        <img src="icons/Vector.svg" alt="img">
        </div>
        </div>`
    }
    like();
}

//все котики+ отрисовка

allCots.addEventListener('click', function (event) {
    draw()
})
console.log(cats)


// добавление в любимые


function like() {
    const heartIMG = document.querySelectorAll('.heart img')
    for (let i = 0; i < heartIMG.length; i++) {
        heartIMG[i].addEventListener('click', function (event) {
            let eventTarget = cats[i].favorites
            // console.log(eventTarget[i])
            if (eventTarget === undefined) {
                heartIMG[i].src = 'icons/Like.svg'
                // heartIMG[i].alt = 'like'
                cats[i].favorites = true
            } else if (eventTarget === false) {
                heartIMG[i].src = 'icons/Like.svg'
                // heartIMG[i].alt = 'img'
                cats[i].favorites = true
            }
            else if (eventTarget === true) {
                heartIMG[i].src = 'icons/Vector.svg'
                // heartIMG[i].alt = 'img'
                cats[i].favorites = false
            }

        })
    }
}

//Любимые котики + отрисовка

favoritesCats.addEventListener('click', function (event) {
    main.innerHTML =''

    for (let i = 0; i < cats.length; i++) {
        if (cats[i].favorites === true) {
            main.innerHTML +=
                `<div class = 'img'>
                <img src="${cats[i].url}" alt="img">
                <div class='heart'>
                <img src="icons/Like.svg" alt="img">
                </div>
                </div>`
        }


        // console.log(cats[i].favorites===true)
    }
    like();
})