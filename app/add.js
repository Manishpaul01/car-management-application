document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const stock = parseInt(document.getElementById('product-stock').value);
        const description = document.getElementById('product-description').value;

        if (name && !isNaN(price) && !isNaN(stock) && description) {
            const newProduct = new Car(name, price, stock, description);
            const productService = new ProductService();
            productService.addProduct(newProduct);
            console.log(newProduct.toString());
            alert('Car added!');
            window.location.href = 'list.html';
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
});
