// cấu trúc của for thường : for(1,2,3) {}
// 1 : nhận vào tham số bắt đầu của for
// 2 : nhận vào điều kiện kết thúc của for điểm kết thúc
// 3 : nhận vào bước nhẩy của dòng for 
//vd : tính tổng các số chẵn từ 1 cho đến 10
let sum =0;
for (let i =1 ; i <=10 ; i++) {
    if (i%2==0) {
        sum +=i;
    }
}
console.log(sum);
//vd : cho một mảng gồm n phần tử tự nhập, tính tổng các phần tử chẵn và các phần tử lẻ
let arr = [1,2,2,3,4];
let sumc =0;
let suml = 0;
for(let i = 0 ; i<arr.length ; i++) {
    if(arr[i]%2==0) {
        sumc +=arr[i];
    } else suml +=arr[i];
}
console.log(sumc);
console.log(suml);
// for of 
//cấu trúc for (let 1 of 2) {}
// 1 : là một biến mang value của giá trị mảng
// 2 : mảng mà mình muốn chạy qua nó
// vd  cho một mảng gồm n phần tử tự nhập, tính tổng các phần tử chẵn 
let arrb = [1,2,2,3,4];
let c = 0;
for (let item of arrb) {
    item
    if (item %2==0) {
        c+=item;
    }
}
console.log(c);
//hàm filter dùng để trả ra một mảng mới từ mảng cũ nhưng chỉ trả ra những giá trị true của mảng cũ
// vd lọc ra các phần tử lẻ từ mảng cho sẵn
let arrc = [1,2,3,4,5,6,7,8,9,10];
// cách 1
for(let item of arrc) {
    if(item %2 !=0 ) {
        console.log(item);
    }
}
// cách 2 
    let sole = arrc.filter(function(item) {
        return item%2!=0;
    })
    console.log(sole);
// bài tập lọc ra các phần tử lớn hơn 10 trong 1 mảng 
//hàm find dùng để tra ra một mảng mới nhưng chỉ trả ra duy nhất một giá trị đúng
let so = arrc.find(function(item) {
    return item%2!=0;
})
console.log(so);

///

const arrList = [
    {
        id :1 ,
        cate : "thịt",
        name : "thịt bò"
    },
    {
        id :3 ,
        cate : "thịt",
        name : "thịt gà"
    },
    {
        id :2,
        cate : "cá",
        name : "cá chép"
    },
    {
        id :4,
        cate : "rau",
        name : "rau muống"
    }
];

let meat = arrList.filter(function(item) {
        return item.cate == "thịt";
});
let rau = arrList.filter(function(item) {
    return item.cate == "rau";
});

console.log(meat , rau);

let main = arrList.find(function(item) {
    return item.id == 1;
});
console.log(main)

/////
let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
console.log(...a1);
console.log(...a2);
let a3 = [...a1,...a2];
console.log(a3);




