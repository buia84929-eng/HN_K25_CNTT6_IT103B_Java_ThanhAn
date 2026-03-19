let products = []

let productName = document.getElementById('productName');
let productCategory = document.getElementById('productCategory');
let productPrice = document.getElementById('productPrice');
let productQuantity = document.getElementById('productQuantity');
let productDescription = document.getElementById('productDescription');

let productForm = document.getElementById('productForm')
let tableBody = document.getElementById("productTableBody");

productForm.addEventListener('submit', createProduct)

function getDataLocale(){
    let getData = localStorage.getItem('product');
    console.log(getData);
    if(getData){
        products = JSON.parse(getData);
        renderProducts();
    }
}
getDataLocale();

function createProduct(e) {
    e.preventDefault();
    let newProduct = {
        id: Date.now(),
        productName: productName.value.trim(),
        productCategory: productCategory.value,
        productPrice: productPrice.value,
        productQuantity: productQuantity.value,
        productDescription: productDescription.value
    }
    console.log(newProduct);
    products.push(newProduct)
    localStorage.setItem('product', JSON.stringify(products))
    productForm.reset()
    renderProducts();
}

function renderProducts() {
    tableBody.innerHTML = "";

    products.forEach((p) => {
        let row = `
        <td>${p.id}</td>
                <td><strong>${p.productName}</strong></td>
                <td>${p.productCategory}</td>
                <td class="price">${Number(p.productPrice).toLocaleString()}VND</td>
                <td class="quantity">${p.productQuantity}</td>
                <td class="description">${p.productDescription}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${p.id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
        `;
        tableBody.innerHTML += row;
    });
}

// function deleteProduct(id) {
//     products = products.filter(p => p.id !== id);
//     localStorage.setItem("product", JSON.stringify(products));
//     renderProducts();
// }

function deleteProduct(id){
    let deleteId = products.findIndex(product => product.id === id);
        if(deleteId !== -1){
            products.splice(deleteId, 1);
            localStorage.setItem("product", JSON.stringify(products));
            renderProducts();
        }
}

renderProducts();