const API_KEY = '0e7ac7d4488f27bbbd795aff926e4028'


async function getCryptoData() {
    const url = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    
    let result = await fetch(url);
    let data = await result.json();
    console.log(data)


    const bitcoinPrice = data.rates.BTC;
    const ethereumPrice = data.rates.ETH;
    const tetherPrice = data.rates.USDT;
    const cardanoPrice = data.rates.ADA;
    const bnbPrice = data.rates.BNB;
    const dogecoinPrice = data.rates.DOGE;

    document.getElementById('bitcoin-price').innerHTML = bitcoinPrice
    document.getElementById('ethereum-price').innerHTML = ethereumPrice
    document.getElementById('tether-price').innerHTML = tetherPrice
    document.getElementById('cardano-price').innerHTML = cardanoPrice
    document.getElementById('bnb-price').innerHTML = bnbPrice
    document.getElementById('dogecoin-price').innerHTML = dogecoinPrice

}

getCryptoData()