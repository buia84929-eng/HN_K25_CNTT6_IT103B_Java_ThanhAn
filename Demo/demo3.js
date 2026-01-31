// Vòng lặp for
// for ( Khởi tạo; điều kiện; cập nhật){ // code được thực hiện lặp đi lặp lại}
for(let i = 1; i < 5; i++){
    console.log(`Lần lặp thứ ${i}`);
}

// Vòng lặp while
//while (Điều kiện){ // code được thực hiện lặp đi lặp lại}
let j = 1
while ( j <= 5){
    console.log("Lần lặp thứ", j);
    j++
}

// Vòng lặp do/while
// do{ //code được thực hiện lặp đi lặp lại} while {điều kiện}
let a = 1
do{
    console.log("Lần lặp thứ", a);
    a++
} while( a <= 5)

// Vòng lặp lồng nhau
for(let i = 1; i < 6; i++){
    console.log(`Lần lặp thứ ${i} của vòng lặp ngoài`);   // kiểm tra vòng lặp

    for( let j = 1; j < 6; j++){
        console.log("Code lặp bên trong");
    }
}

// Một số từ khóa điều khiển
for(let i = 0; i < 6; i++){
    if ( i % 2 == 0){
        continue;
    }
    console.log("Lần lặp thứ", i);
}