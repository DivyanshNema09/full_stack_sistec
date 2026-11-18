const container = document.querySelector(".productContainer")
const url = "https://dummyjson.com/products"
const data = fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const product = data.products
        console.log(product)
        product.forEach(pro => {
            const card = document.createElement("div")
            card.classList.add("pro-card")
            card.innerHTML = `
            <img src="${pro.thumbnail}">
            <h1>${pro.title}</h1>
            <h2>${pro.brand}</h2>
            <h2>$${pro.price}</h2>
            <button>Add to Cart</button>
            `
            container.appendChild(card)
        });
    })
    .catch((error) => console.log(error))

// const div = document.createElement("div")
