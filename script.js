let cat = document.querySelectorAll(".cat");
let counter = 1;
cat.forEach(function (cat) {
    cat.addEventListener("click", (e) => {
        let Clikedcat = e.currentTarget.parentElement
        let timesClicked = Clikedcat.querySelector(".count");
        timesClicked.innerHTML = Number(timesClicked.dataset.value) + 1;
        console.log(timesClicked.dataset.value = timesClicked.innerHTML)
    });
});