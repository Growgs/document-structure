document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const quantityInc = product.querySelector('.product__quantity-control_inc');
        const quantityDec = product.querySelector('.product__quantity-control_dec');
        const addToCartButton = product.querySelector('.product__add');

        const productId = product.getAttribute('data-id');

        quantityInc.addEventListener('click', function () {
            let currentQuantity = parseInt(quantityValue.innerText);
            if (currentQuantity >= 1) {
                quantityValue.innerText = currentQuantity + 1;
            }
        });

        quantityDec.addEventListener('click', function () {
            let currentQuantity = parseInt(quantityValue.innerText);
            if (currentQuantity > 1) {
                quantityValue.innerText = currentQuantity - 1;
            }
        });

        addToCartButton.addEventListener('click', function () {
            const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                const currentCartCount = parseInt(cartProductCount.innerText);
                const productQuantity = parseInt(quantityValue.innerText);
                cartProductCount.innerText = currentCartCount + productQuantity;
            } else {
                const cartProducts = document.querySelector('.cart__products');
                const newCartProduct = document.createElement('div');
                newCartProduct.className = 'cart__product';
                newCartProduct.setAttribute('data-id', productId);

                const productImageSrc = product.querySelector('.product__image').getAttribute('src');
                newCartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImageSrc}">
                    <div class="cart__product-count">${quantityValue.innerText}</div>
                `;

                cartProducts.appendChild(newCartProduct);
            }
        });
    });
});
