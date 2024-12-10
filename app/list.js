document.addEventListener('DOMContentLoaded', () => {
    const productService = new ProductService();
    const products = productService.getProducts();
    const productList = document.getElementById('product-list');

    if (products.length === 0) {
        productList.innerHTML = '<p>Currently no cars available.</p>';
    } else {
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'card col-md-4';
            productCard.innerHTML = `<img src="product.png" class="card-img-top" alt="${product.name}">
<div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">$${product.price.toFixed(2)}</p>
    <p class="card-text">${product.stock} in stock</p>
    <button class="btn btn-primary add-to-cart">Add to Cart</button>
    <a href="edit.html?index=${index}"><button class="btn btn-secondary edit-product">Edit product</button></a>
    <button class="btn btn-danger delete-product" data-index="${index}">Delete</button>
</div>`;
            productList.appendChild(productCard);
        });

        document.querySelectorAll('.delete-product').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                productService.deleteProduct(index);
                location.reload();
            });
        });
    }
});
