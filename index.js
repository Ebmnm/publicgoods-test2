const popup = document.querySelector(".popup")
const factText = document.querySelector(".fact-list")
const factButton = document.querySelector(".button")
const exit = document.querySelector(".exit")

setTimeout(() => {popup.classList.add("pop")}, 3000);

factButton.addEventListener("click", () => {
    fetch("https://cat-fact.herokuapp.com/facts?animal_type=cat")
    .then(res => {
        return res.json()
    })
    .then(data => data.forEach(e => {
        const text = e.text
        const facts = document.createElement("li")
        facts.innerText = text
        factText.appendChild(facts)
        
    }))
    .catch(err => console.log("Error"))
    factButton.disabled = "true"
     
})


exit.addEventListener("click", () => {
popup.classList.add("popdown")
}
)