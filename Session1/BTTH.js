
let rawTenSach = prompt("Nhập tên sách:");
let rawTenTacGia = prompt("Nhập tên tác giả:");
let namXuatBan = parseInt(prompt("Nhập năm xuất bản:"));
let giaTien = parseFloat(prompt("Nhập giá tiền một cuốn:"));
let soLuong = parseInt(prompt("Nhập số lượng nhập kho:"));

let tenSach = rawTenSach.trim().toUpperCase();

let tenTacGia = rawTenTacGia.toUpperCase();

let prefix = tenTacGia.substring(0, 3);

let randomID = Math.floor(Math.random() * 1000) + 1;
let maSach = `${prefix}${namXuatBan}-${randomID}`;


const namHienTai = 2026;
let tuoiSach = namHienTai - namXuatBan;
let tongGiaTri = giaTien * soLuong;


let keSo = Math.floor(Math.random() * 10) + 1;

console.log(`--- PHIẾU NHẬP KHO ---
Mã sách: ${maSach}
Tên sách: ${tenSach}
Tác giả: ${tenTacGia}
Năm xuất bản: ${namXuatBan}
Tuổi sách: ${tuoiSach} năm
Tổng giá trị: ${tongGiaTri.toLocaleString()} VNĐ
Ngăn kệ gợi ý: Kệ số ${keSo}`);