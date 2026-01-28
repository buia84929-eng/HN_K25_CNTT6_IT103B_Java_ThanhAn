//biến
//từ khóa khai báo + tên biến + (gán giá trị)
var myName = "An";   // có thể khai báo tên biến giống nhau (nhưng không nên dùng)
let number;          // không dc đặt tên giống (var)
const PI = 3.14;     // phải gán giá trị (cho const)

number = 1 + 1; // tất cả đều là số nếu gán number

let str ="Hello"; // chuỗi có thể dùng ''(`` dùng khi có dạng đặc biệt) 
 
// null không chứa gì cả 
// undefined có chứa nhưng không biết đang chứa cái gì (không xác định)

// input và output 

let inputName = prompt("Vui lòng nhập tên của bạn")

console.log('Xin chào',inputName);          // dùng cái này, in trên console
console.log('Xin chào' + inputName);        // dùng dấu + để mất dấu cách giữa chữ chào và An
console.log( "12",inputName);              // khi debug thì nên thêm dòng vào

alert(inputName);                          // hạn chế dùng, in luôn trên trình duyệt

console.log("15",number);                // nếu không gán giá trị thì sẽ in ra indefine
console.log("15", 1 + "2");             // ưu tiên chuỗi và cộng chuỗi 

// chuỗi không có trừ chỉ có cộng

//-------- ưu tiên ép về số ---------
console.log("15", 1 - "2");             

//---------- ép chuỗi về số -------
let number1 = "2";
number = Number(number);             
number =  + (number);               

//--------- ép về string ---------
number = String(number);    

//---------- ép kiểu về chuỗi ---------
number = parseFloat(number);         


//-------- cách ép kiểu prompt về số ----------
let number2 = +prompt("Nhập vào số nguyên bất kỳ");
console.log(number);

// ------- đối tượng math -------
console.log(Math);
console.log(Math.floor(Math.random() * 10) + 1);     // random từ 1 đến 10

//-------- Một phương thức của chuỗi ----------
let myName = prompt("Nhập tên của bạn");
console.log(isNaN(number));                          // kiểm tra nếu không phải NaN chả về false nếu là NaN chả về true  
console.log(myName.concat);              // nối vào sau 
console.log(myName.trim());              // cắt khoảng trống đầu và cuối 
console.log("Chào" + myName.toUpperCase());              // viết hoa
