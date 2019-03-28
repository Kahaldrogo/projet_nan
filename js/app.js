

//clic sur le panier total
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
        
    })
    
})();

//ajouter un menu au panier

(function () {
    const cartBtn = document.querySelectorAll(".store-item-icon");


    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function(event){
            //cibler un element dans le menu
            if(event.target.parentElement.classList.contains('store-item-icon'))
            {
                let cheminT = event.target.parentElement.previousElementSibling.src;
                 console.log(cheminT)
                let position = cheminT.indexOf('img') + 3;
                // let  = cheminT.slice(position);
                // console.log(position);
                let  cheminP = cheminT.slice(position);
                console.log(cheminP);
                

                const item = {};
                item.img = 'img-cart' + cheminP;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                let pricx = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let prix = pricx.slice(0, 5);
                item.prix = prix;
                // console.log(prix);
                // console.log(item ); 
                
             const panier = document.createElement("div");
              panier.classList.add(
                  "cart-item",
                   "d-flex",
                    "justify-content-between",
                     "text-capitalize",
                     "my-3"

              ) ;
                 
                    panier.innerHTML = 
                   ` <img
                      src ="${
                          item.img
                          }
                        "
                       class = "img-fluid rounded-circle" 
                       id="item-img" alt="">
                        <div class="item-text">

                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.prix}</span>
                            <span>fcfa</span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                        </a>
                        </div>` ;
                    //selection du menu
                    const paner=document.getElementById("cart");
                    const total=document.querySelector(".cart-total-container");
                    cart.insertBefore(panier, total);
                    alert(" 1 Menu ajouter au panier");
                    // alert("ok"); 
                    showTotals();
                
            // }
         } 
        });
        
    }) ; 
//affichage du prix total dans le panier
function showTotals(){

    const total = [];
    const menus = document.querySelectorAll('.cart-item-price');

    menus.forEach(function(item) {
        total.push(parseInt(item.textContent));
    });
    // console.log(total);

    const sommeT = total.reduce(function(total, item)
    {
total += item;
return total;
    }, 0);
    document.getElementById('cart-total').textContent = sommeT;
    document.querySelector('.item-total').textContent = sommeT;
    document.getElementById('item-count').textContent = total.length;

}
//paiement


})();
