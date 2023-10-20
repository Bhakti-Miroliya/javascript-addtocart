let productdata = [
    {
        name: "vivo",
        price: 1000,
        qty: 1,
        des: "nice vivo 8gb 256 pubji no chote",
        image: './images/31UhwG+XTJL._SY300_SX300_.jpg',
        id : 21212
    },
    {
        name: "oopo",
        price: 1500,
        qty: 1,
        des: "nice oop 8gb 256 freefire no chote",
        image: './images/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.webp',
        id : 12134
    },
    {
        name: "samsung",
        price: 2000,
        qty: 1,
        des: "nice samsung 8gb 256 kai no ghate",
        image: './images/51f4A6Tr8zL.jpg',
        id : 1
    },
    {
        name: "iphone",
        price: 100,
        qty: 1,
        des: "nice iphone no ram cover no internal",
        image: './images/61y7ZbTQcWL._AC_UF894,1000_QL80_.jpg',
        id : 2
    },
    {
        name: "mi",
        price: 2500,
        qty: 1,
        des: "nice mi",
        image: './images/71xb2xkN5qL._SL1500_.jpg',
        id : 3
    },
    {
        name: "poco",
        price: 150,
        qty: 1,
        des: "nice poco",
        image: './images/611JkLiWW0L._AC_UF894,1000_QL80_.jpg',
        id : 4
    },

]

const viewProduct = () => {
    let tbl = "";
    productdata.map((val) => {
        tbl += `
        <div class="col-md-3 pb-5">
            <div class="card">
                <img style="height:300px;object-fit:contain"  src="${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.name}</h5>
                <h5 class="card-title">Rs :- ${val.price}</h5>
                <p class="card-text">${val.des}</p>
                <a  onclick="AddCart(${val.id})" class="btn btn-primary" style="width : 100%">Add to cart</a>
            </div>
            </div>
        </div>
     `
    })
    document.getElementById('productdata').innerHTML = tbl
}
viewProduct();

let cart = [];
const AddCart = (id) => {
    
    let allproduct = productdata.find((item)=>{
        return item.id == id
    })

    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
        cart.push(allproduct);
        localStorage.setItem('cart',JSON.stringify(cart));
    }else{
        let allcart = JSON.parse(localStorage.getItem('cart'));
        allcart.push(allproduct);
        localStorage.setItem('cart',JSON.stringify(allcart));
    }  
    alert("Cart successfully add");
    

    
}