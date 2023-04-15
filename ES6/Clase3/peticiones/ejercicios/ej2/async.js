const myP$$ = document.querySelector("#price");
const refreshBtn$$ = document.querySelector("#refresh-btn");

async function getPrice() {
    try{
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");
        const data = await response.json();
        myP$$.innerHTML = `<p>El precio actual del bitcoin en dolares estadounidenses (USD) es de ${data.bpi.USD.rate_float.toFixed(2)}$.</p>`;
    }
    catch(error){
        console.log(error);
    }
}


getPrice();

refreshBtn$$.addEventListener("click", getPrice);