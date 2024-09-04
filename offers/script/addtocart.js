const product = [
    {
        id: 0,
        image: 'images/offers/offer-1.jpg',
        title: 'Double Burger',
        price:  10,
    },
    {
        id: 1,
        image: 'images/offers/offer-2.jpg',
        title: 'Farm House',
        price: 10,
    },
    {
        id: 2,
        image: 'images/offers/offer-3.jpg',
        title: 'Bacon Burger',
        price: 10,
    },
    {
        id: 3,
        image: 'images/offers/offer-4.jpg',
        title: 'Sacial offer',
        price: 10,
    },
    {
        id: 4,
        image: 'images/offers/offer-5.jpg',
        title: 'black burger',
        price: 10,
    },
    {
        id: 5,
        image: 'images/offers/offer-6.jpg',
        title: 'King Burger',
        price: 10,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(

        `
     <div data-aos="zoom-in-up" class="col-md-6 mb-4">
             <div class="card rounded-0" style="background-image:url(' ${image}')">
            
                 <div class="offer-text bg-black bg-opacity-50">
        <h3 class="text-white">${title}</h3>
         <h5>$8.50 <del class="fst-italic opacity-75">$${price}.50</del></h5>`+
        "<a class='main-btn mt-3' style=' cursor: pointer;' onclick='addtocart("+(i++)+")'>Add to cart</a>"+
        `</div>
        </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}