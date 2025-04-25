document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            name: "Product 1",
            description: "This is the description for product 1.",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Product 2",
            description: "This is the description for product 2.",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Product 3",
            description: "This is the description for product 3.",
            image: "https://via.placeholder.com/150"
        },
        // Add more products as needed
    ];

    const productContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        `;

        productContainer.appendChild(productElement);
    });
});