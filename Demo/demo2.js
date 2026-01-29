// Toán tử so sánh
console.log(1 > 2);   // false
console.log(1 < 2);   // true
console.log("a" > 5); // false vì khi so sánh 1 chuỗi hoặc 1 ký tự sẽ luôn luôn trả về false, chuỗi và ký tự luôn luôn nhỏ hơn số
console.log("10" > 5); // true
console.log("a" > "b"); //false 

console.log("1" == 1);   // true 
console.log("1" === 1);  // false vì xét trên kiểu dữ kiệu 
console.log("1" !== 1);  // true vì kí tự 1 khác số 1

console.log(3 > -2 > 0);     //true nhưng không nên dùng
console.log( 1 > 2 || 3 > 1); // true nên dùng

// Toán tử logic
console.log(1 > 2 && 3 > 2);   // false vì chỉ cần 1 vế sai sẽ trả về false
console.log(1 > 2 || 3 > 2);  // true vì chỉ cần 1 vế đúng sẽ trả về true

let input = +prompt("Nhập vào một số nguyên");
let number = input || 0;   // nếu vế trước sai thì sẽ lấy giá trị sau
console.log(number);      // còn nếu đúng thì lấy vế trước

// Câu điều kiện if/else
    let input1 = prompt("Nhập tên của bạn").trim();
if (input1){
    console.log(`Tên của bạn là ${input1}`);
} else{
    console.log("Bạn chưa nhập tên");
}

// Câu lệnh switch/case
let number2 = 1
switch (number2) {
    case 1:
        console.log("Số là 1");
        break;
    case 2:
        console.log("Số là 2");
        break;
    case 3:
        console.log("Số là 3");
        break;
    default:
        console.log("Số không phải là 1 và 2");
        break;
}