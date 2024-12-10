function Car(name, price, stock, description) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.description = description;

    this.toString = () => {
        return `${this.name} - $${this.price.toFixed(2)} - ${this.stock} in stock. Description: ${this.description}`;
    }
}
