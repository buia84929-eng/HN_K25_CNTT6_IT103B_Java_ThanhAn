let tenSach = prompt("Nhập tên sách:");
let namXuatBan = prompt("Nhập năm xuất bản:");
let namHienTai = prompt("Nhập năm hiện tại:");

namXuatBan = Number(namXuatBan);
namHienTai = Number(namHienTai);

let tuoiSach = namHienTai - namXuatBan;

console.log("Sách: " + tenSach);
console.log("Năm xuất bản: " + namXuatBan);
console.log("Tuổi của sách: " + tuoiSach + " năm");