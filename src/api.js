document.querySelector("button").addEventListener("click",(data)=>{
    let myParrafo = document.querySelector("p")

    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(result => result.json())
        .then(data => {
            myParrafo.textContent = data.text
        })
        .catch(error => console.log(error))
});


