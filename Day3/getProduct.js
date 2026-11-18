async function getProduct(){
    let res = await fetch("")
    let data = res.json()
    console.log(data);
}

getProduct()