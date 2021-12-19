const input = document.querySelector("#ticker")

const output = document.querySelector("#output")

const submit = document.querySelector("#sub")

const form = document.querySelector("#input-form")

form.addEventListener("submit", event => {
    event.preventDefault();
    let currency = input.value
    console.log(currency)

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`)
    .then(response => response.json())
    .then(data => {
	console.log(data)
    if (isNaN(data.USD) === false){
        output.textContent = "$"+data.USD
    }
    else{
        output.textContent = "Could not find ticker"
    }
    })
})