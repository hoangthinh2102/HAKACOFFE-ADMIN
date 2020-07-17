
function listProduct(array) {
    let s = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        s+= `<tr>
        <th scope="row">${i+1}</th>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#Edit" onclick="getID(${i+1})">
                Edit
            </button>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#Delete" onclick="getID(${i+1})">
                Delete
            </button>
        </td>
    </tr>
        `
    }
    document.getElementById("list-product").innerHTML = s;
    console.log(data);
    
}
listProduct(JSON.parse(localStorage.getItem("data")));

function addToLocalStorage(array) {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("data", JSON.stringify(array));
    }
    else {
        alert("browser doesn't support local storage!");
    }
}

function addProduct() {
    data = JSON.parse(localStorage.getItem("data"));
    let img = document.getElementById("exampleInputEmail1").value;
    let name = document.getElementById("exampleInputPassword1").value;
    let price = document.getElementById("exampleInputPassword2").value;
    data.push({img,name,price});
    addToLocalStorage(data);
    //alertAction("Add_new");
    alert('Update success, please go back and reload the web to see the update');
    $('#Add_new').modal('hide');
    listProduct(data);
}

function getID(i) {
    localStorage.setItem("ID",i);
}

function deleteProduct() {
    data = JSON.parse(localStorage.getItem("data"));
    let id = localStorage.getItem("ID");
    data.splice((id - 1),1);
    addToLocalStorage(data)
    alert('Update success, please go back and reload the web to see the update');
    $('#Delete').modal('hide');
    listProduct(data);
}

function editProduct() {
    data = JSON.parse(localStorage.getItem("data"));
    let id = localStorage.getItem("ID");
    let img = document.getElementById("exampleInputEmail4").value;
    let name = document.getElementById("exampleInputPassword5").value;
    let price = document.getElementById("exampleInputPassword6").value;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if ((id - 1) == index) {
            element.img = img;
            element.name = name;
            element.price = price;
        }
    }
    addToLocalStorage(data);
    //alertAction("Edit");
    alert('Update success, please go back and reload the web to see the update');
    $('#Edit').modal('hide');
    listProduct(data);
}

// function alertAction(id) {
//     let s = `<div class="modal-dialog" role="document">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Confirm action</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="modal-body">
//         Update success, please go back and reload the web to see the update
//         </div>
//         <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
//             <button type="button" class="btn btn-primary">Yes</button>
//         </div>
//     </div>
// </div>
//     `
//     document.getElementById(id).innerHTML = s;
// }


