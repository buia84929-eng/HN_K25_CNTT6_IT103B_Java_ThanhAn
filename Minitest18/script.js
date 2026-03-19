let products = [];

let productCode = document.getElementById('product-code');
let productName = document.getElementById('product-name');
let productPrice = document.getElementById('product-price');
let productForm = document.getElementById('product-form');

productForm.addEventListener('submit', createProduct);

function createProduct(e) {
    e.preventDefault();

    let newProduct = {
        id: Date.now(),
        productCode: productCode.value.trim(),
        productName: productName.value.trim(),
        productPrice: Number(productPrice.value)
    };

    products.push(newProduct);
    console.log(products);

    productForm.reset();
    alert("Thêm sản phẩm thành công!");
}

function renderProducts() {
    
}

