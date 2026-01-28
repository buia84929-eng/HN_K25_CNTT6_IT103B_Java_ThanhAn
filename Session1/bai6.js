let tenSachGoc = prompt("Nhập tên sách:");
let stt = prompt("Nhập số thứ tự của sách:");

let tenSachChuanHoa = tenSachGoc.trim().toUpperCase();
let maSach = "LIB - " + tenSachChuanHoa + " - " + stt;

console.log("Tên sách gốc: " + tenSachGoc);
console.log("Mã sách sau chuẩn hóa: " + maSach);