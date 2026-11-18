
let url = "https://fakestoreapi.com/products";

const productContainer = document.querySelector(".product-container");

fetch(url)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        display(res);
    })
    .catch((error) => console.log(error));

function display(arr) {
    arr.forEach((element) => {

        // Create a separate card
        let card = document.createElement("div");
        card.classList.add("product-card");

        // Create image
        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        image.setAttribute("alt", element.title);

        // Create title
        let title = document.createElement("h3");
        title.innerText = element.title;

        // Create price
        let price = document.createElement("p");
        price.innerText = `$${element.price}`;

        // Create rating
        let rating = document.createElement("p");
        rating.innerText = `⭐ ${element.rating.rate} (${element.rating.count} reviews)`;

        // Create button
        let button = document.createElement("button");
        button.innerText = "View Product";

        // Add elements to the card
        card.append(image);
        card.append(title);
        card.append(price);
        card.append(rating);
        card.append(button);

        // Add the card to the main container
        productContainer.append(card);
    });
}
