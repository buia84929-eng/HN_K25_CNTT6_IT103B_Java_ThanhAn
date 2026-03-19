let products =[
    {id: 1, name:"Bng Thanh An", phone: "1123453246", email:"thanhan@gmail.com"},
    {id: 1, name:"Thanh An", phone: "8492748291", email:"an@gmail.com"}
];

let tableWrapper = document.getElementById("table-wrapper");

function renderTableWrapper(){
    tableWrapper.innerHTML = "";
    products.forEach((product) => {
        tableWrapper.innerHTML += `
        <tr>
                <td>${products.id}</td>
                <td>${products.name}</td>
                <td>${products.phone}</td>
                <td>${products.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onClick="edit${products.id}">Sửa</button>
                    <button class="btn-delete" onClick="deleteProduct ${products.id}">Xóa</button>
                  </div>
                </td>
              </tr>
        `
    })
}

function deleteProduct(id){
    let deleteId = products.findIndex(product => product.id === id);
        if(deleteId !== -1){
            products.splice(deleteId, 1);
            localStorage.setItem("product", JSON.stringify(products));
            renderProducts();
        }
}

