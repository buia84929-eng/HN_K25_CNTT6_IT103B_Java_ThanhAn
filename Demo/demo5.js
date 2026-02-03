// Mảng trong java không có giới hạn xác định
let myArray = [1, "a", true,undefined,[1,2,3]];
let array = [1,2,3,4,];
console.log(myArray.length); // lấy độ dài phần tử của mảng 

// Lưu ý 2 mảng đang sử dụng chung 1 địa chỉ trong bộ nhớ
let aray = [1,2,3,4,5];
console.log(array == aray);   // array là kiểu dữ liệu tham chiếu => false

let arayy = array;     // mảng bằng nhau khi gán trực tiếp
arayy[0] = "Phần tử mới"
console.log(array == arayy);  // true
console.log("arayy:", array )     // phần tử mới

// ==================== Các thao tác với mảng CRUD ====================
let myArr = [1,2,3,4,5];
// Thao tác đọc cơ bản
for( let i = 0; i <myArr.length; i++){
    console.log(`Phần tử có chỉ số ${i} có giá trị là ${myArr[i]}`);
}
for( let index in myArr){
    console.log(`Chỉ số của phần tử là ${index}`);     // chỉ số
}
for (let element of myArr){
    console.log(`Giá trị của phần tử là ${element}`);  // giá trị
}
// Thao tác thêm phàn tử
// Thao tác thêm vào cuối
myArr.push(1,2,3, "Đây là giá trị cuối mảng");
// Thêm vào đầu
myArr.unshift("Đây là giá trị đầu mảng", 4, 5, 6);
// Thêm vào vị trí bất kỳ
myArr.splice(4, 0, "Đây là phần tử được chèn");  // vị trí chèn - số phần tử xóa - các giá trị chèn vào
console.log(myArr);

// Thao tác xóa các phần tử  
// Xóa ở cuối
myArr.pop();
// Xóa ở đầu
myArr.shift(); // chỉ xóa được 1 
//Xóa ở vị trí bất kỳ
myArr.splice( 4, 1, "Phần tử mới", 2);  // tại vị trí 1 - xóa bao nhiêu phần tử - chèn phần tử 

// Thao tác cập nhật phần tử 
myArr[1] = "Phần tử mới"

// =================== Các phương thức khi làm việc với mảng ===================
let mArr =[11, 3, 9, 6, 7, 9];
// chỉ số của phần tử đầu tiên thông qua giá trị
let position = mArr.indexOf(9);    
// chỉ số của phần tử cuối cùng thông qua giá trị
let lastPosition = mArr.lastIndexOf(9);
// nối 2 mảng với nhau
mArr = mArr.concat([1,2,3]);
// chuyển mảng thành chuỗi
let arrString = mArr.toString();
console.log(position);