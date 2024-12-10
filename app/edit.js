document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('edit-product-form');

    const productService = new ProductService();
    const index = window.location.search.split('=')[1];
    const product = productService.products[index];
    if (!product) {
        alert('Car not found!');
        window.location.href = 'list.html';
    }
    // assign name, price, stock and description 
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-description').value = product.description;

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const stock = parseInt(document.getElementById('product-stock').value);
        const description = document.getElementById('product-description').value;

        if (name && !isNaN(price) && !isNaN(stock) && description) {
            const newProduct = new Car(name, price, stock, description);
            productService.editProduct(newProduct, index);
            console.log(newProduct.toString());
            alert('Car updated!');
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
});
