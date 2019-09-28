class shoppingCart {
    constructor() {
        this.items =[]
    }
    getItems(){
        return this.items
    }
    addItem(name, quantity, pricePerUnit){
        this.items.push({name, quantity, pricePerUnit})
    }
    clear(){
        this.items = []
    }
    total(){
        return this.items.reduce( (total, item) => total + item.quantity * item.pricePerUnit
        ,0)
    }

}

module.exports = shoppingCart