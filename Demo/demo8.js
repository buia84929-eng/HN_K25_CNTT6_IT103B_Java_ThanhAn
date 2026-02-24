let students = ["An", "Hiếu", "Dung", "Linh"];
let scores = [ 8,9,7,8,9]
// forEach - lặp qua từng phần tử để thực thi 
students.forEach((element, index, arr) => { 
    console.log("Giá trị phần tử :", element);
    console.log("Chỉ số phần tử :", index);
    console.log("Mảng ban đầu : ", arr);
})

// map - duyệt qua toàn bộ mảng và mảng mới có độ dài bằng mảng ban đầu
// tạo ra 1 mảng mới dựa trên mảng ban đầu
let newScores = scores.map((element, index) => { })
console.log(newScores);

// filter - cũng tương tự như map : trả về 1 mảng mới nhưng giữ lại những phần tử thỏa mãn điều kiện còn nếu false sẽ bỏ qua
let temp = students.filter(element => element.includes ("i"))
let goodScore = scores.filter(element => element >= 9)
console.log(temp);

// every & some - đều trả về true và false
let check = scores.every((element) => element >= 0);  // nếu chỉ cần 1 phần tử k thỏa mãn => false
let checks = scores.some((element) => element < 0);  // nếu 1 phần tử thỏa mãn => true

console.log(check);
console.log(checks);

// find - trả về giá trị tìm được & findIndex - trả về chỉ số tìm được
let findStudent = students.find((element) => element === "An");
let findIndexStudent = students.findIndex((element) => element === "An");
console.log(findStudent);
console.log(findIndexStudent);

// reduce - đóng gói mảng thành 1 giá trị duy nhất
let totalScore = scores.reduce((accumulative, element, index) => { 
    accumulative += element;
    console.log("Giá trị tích lũy sau phần tử thứ", index);
    console.log(accumulative);
    return accumulative;
}, 0);  // accumulative là giá trị tích lũy
console.log(totalScore);



