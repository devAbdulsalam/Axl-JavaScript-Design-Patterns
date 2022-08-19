window.addEventListener('DOMContentLoaded', () =>{
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=7fa7eb6b-83b3-4a7a-871e-f26c3161b9ee');
    myRequest.onload = function(){
        let data = JSON.parse(myRequest.responseText)
        myData(data)
        filtercat(data)
    }
    myRequest.send();
    myRequest.onerror= function(){
        console.log("connection error")
    };
    let myData = function(data){
        console.log(data)
        return data
    }
})


function filtercat(data){
    let catId = document.querySelectorAll(".cat");
       catId.forEach(function (cat) {
            cat.addEventListener("click", (e) => {
                let Clikedcat = e.currentTarget.dataset.id
                let displayedCat = data.filter(function (cat, index){
                    cat.value = 0
                    // console.log(index == Clikedcat)
                    return index == Clikedcat
                })
                return displaycats(displayedCat)
            })
        });
}

function displaycats(cat){
    // console.log(cat)
    let catBox = document.getElementById("catBox")
    let catImage = document.createElement('img')
    let clickedClicked = document.querySelector(".count")
    cat.map(function(cat){
        console.log(cat.value)
        catImage.src = cat.url
        catBox.appendChild(catImage)
        clickedClicked.innerHTML = cat.value
        return catBox.innerHTML = `<img class="catImage" src="${cat.url}" alt="cat" />`
    })
    let imageClicked = document.querySelector(".catImage")
    imageClicked.addEventListener("click", (e) => {
        let Clikedcat = e.currentTarget.parentElement.parentElement
        let timesClicked = Clikedcat.querySelector(".count");
        timesClicked.innerHTML = Number(timesClicked.dataset.value) + 1;
        console.log(timesClicked.dataset.value = timesClicked.innerHTML)
    });
}




