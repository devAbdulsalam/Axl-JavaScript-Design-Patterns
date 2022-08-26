let catId = document.querySelectorAll(".cat");
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.thecatapi.com/v1/breeds?limit=10&api_key=7fa7eb6b-83b3-4a7a-871e-f26c3161b9ee');
myRequest.onload = () =>{
    data = JSON.parse(myRequest.responseText)
    //filter to only include those with an `image` object
    data.filter(img=> img.image?.url!=null)
    data.filter((cats) => { 
        cats.value = 0
    })
    filtercat(data)
}
myRequest.send();
myRequest.onerror= () =>  console.log("connection error");

function filtercat(data){
    catId.forEach((cat) => {
        cat.addEventListener("click", (e) => {
            let Clikedcat = e.currentTarget.dataset.id
            let displayedCat = data.filter((cats, index) => {
            return index == Clikedcat
            });
            return displaycats(displayedCat)
        });
    })
}

function displaycats(cat){
    cat.map(function(cat){
        document.querySelector(".catName").innerHTML = cat.name
        document.querySelector(".catImage").src = cat.image.url
        document.querySelector(".count").innerHTML= cat.value
        document.querySelector(".catImage").addEventListener("click", () => {
            cat.value = cat.value + 1 
            document.querySelector(".count").innerHTML= cat.value
        });
    })
}

catId.forEach((cat) => {
    cat.addEventListener("click", (e) => {
        catId.forEach((cat) => {
            cat.classList.remove("activeCat")
        })
        let Clikedcat = e.currentTarget
        Clikedcat.classList.add("activeCat")
    })
})    

var randomUserApi ="randomuser.me"
var newMovie ="a man from another star"