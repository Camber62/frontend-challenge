import "./Cats.js";



;(async ()=>{
    await getAllCAts();
})();


async function getAllCAts(){
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=15',{
headers:{
    "x-api-key":"48ef3a50-cb8a-4f11-807d-e39a84e58f59"
}
    });
    const cats = await res.json();
    console.log(cats)
    return cats
}



const heartIMG = document.querySelectorAll('.heart img')
const main = document.querySelector('main')



for(let i ; i<cats.length; i++){
    main.innerHTML +=
        "
            <div className="img">
                <img src=cats[i].url alt="img">
                    <div className="heart">
                        <img src="icons/Vector.svg" alt="img">
                    </div>
            </div>
         "
}



for (let i = 0;i<heartIMG.length;i++) {
    heartIMG[i].addEventListener('click', function (event) {
        let eventTarget = event.target.alt
        if (eventTarget === "img") {
            heartIMG[i].src = 'icons/Like.svg'
            heartIMG[i].alt = 'like'
        } else if (eventTarget === "like") {
            heartIMG[i].src = 'icons/Vector.svg'
            heartIMG[i].alt = 'img'
        }

    })
}

