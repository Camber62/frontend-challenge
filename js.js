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






const heart = document.querySelector('.heart')
const heartIMG = document.querySelector('.heart img')




function like(event) {
    heartIMG.src  = 'icons/Vector%20(1).svg'
}

heart.addEventListener('click', function (){
    like()
})
