function ProductService() {
    this.products = JSON.parse(localStorage.getItem('products')) || [];

    this.getProducts = () => {
        return this.products;
    }

    this.addProduct = (product) => {
        this.products.push(product);
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    this.editProduct = (product, index) => {
        this.products[index] = product;
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    this.deleteProduct = (index) => {
        this.products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(this.products));
    }
}
