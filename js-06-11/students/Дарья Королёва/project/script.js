'use strict'


class Cart {
    constructor() {
        this.goods = [];
    }
    
    addCartItem(GoodsItem) {
    
        this.goods.push(GoodsItem);
        }
    
    deleteFromBasket(GoodsItem) {
        this.goods.splice(GoodsItem);
    }
    
    render() {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list'); 

        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.title, good.price);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
}
    

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    
    render() {
        return `<div class="goods-item">
            <h2>${this.title}</h2>
            <p>${this.price}</p>
            <button name="add-to-cart">Добавить в корзину</button>
        </div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    
    fetchGoods(url) {
        this.goods = [
            { title: 'Компьютер', price: 10000 },
            { title: 'Мышь', price: 500 },
            { title: 'Клавиатура', price: 1000 },
            { title: 'Монитор', price: 7000 },
            { title: 'Колонки', price: 600 },
        ];
        
        makeGETRequest(url, (good) => {
            this.goods = JSON.parse(good);
            this.render();
            this.calcAllGoods();
        })
    }
    
    summary() {
        let goods = 0;
        this.goods.forEach(GoodsItem => {
            goods += GoodsItem.price;
        });
    }
    
    render() {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
}

const list = new GoodsList;
list.summary();
list.fetchGoods('response.json');
list.render();