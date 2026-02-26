let myObj = {       //  kiểu dữ liệu tập hợp các thành phần trong 1 đối tượng
    key: "value",
    key: "value1"
}

let id = prompt("Nhập vào id: ");
let firstName = prompt ("Nhập vào họ: ");
let lastName = prompt("Nhập vào tên: ");
let student = {
    id : 1,
    firstName: "Bùi",
    lastName: "An",
    hand: number,
}
// Read
console.log(student.firstName);

// Create
student.age = 20;
let input = "age";
console.log(student.age);    // truy cập trực tiếp đối tượng thông qua obj
console.log(student[input]); // truy cập qua 1 biến

// Update
student.age = 30;
console.log(student);

// Delete
delete student.age;
console.log(student);

// Mảng đối tượng
let students = [
    {
        id: 1,
        name: "An"
    },          // dùng dấu , để ngăn cách các mảng
    {
        id: 2,
        name: "Su"
    }
]
// các đối tượng bên trong mảng phải đồng nhất

let idStudent = prompt("Nhập id");
let studentName = prompt ("Nhập tên sinh viên");
let newStudent = {
    id: id,    // thuộc tính để phân biệt đối tượng
    names: studentName
}
student.push(newStudent)
console.log(students);

let findName = prompt("Nhập tên sinh viên cần tìm kiếm");
let findStudent = students.find((student => student.name === findName));    // truy cập vào thuộc tính tên để tìm ra 
