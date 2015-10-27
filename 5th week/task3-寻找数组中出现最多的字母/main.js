var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = 1;
var element = new Array();
var sum = new Array();

for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++; //用来计算与当前这个元素相同的个数  
            array.splice(j, 1); //每找到一个相同的元素，就要把它移除掉，  
            j--;
        }
    }
    element[i] = array[i]; //将当前的元素存入到element数组中  
    sum[i] = count; //并且将有多少个当前这样的元素的个数存入sum数组中  
    count = 1; //再将count重新赋值，进入下一个元素的判断  
}

var newsum = new Array();
for (var item in sum) {
    newsum[item] = sum[item];
}
newsum.sort();
// document.write(sum.toString()+"<br/>");  
// document.write(newsum.toString() + "<br/>");  
//算出出现次数最多的元素及个数
//-----------------------------------------寻找最多元素的函数 start-------------------------------------//
function findmost() {
    for (var i = 0; i < sum.length; i++) {
        var lr = document.getElementById("letter_result"); //存放出现次数最多的元素，以及个数  
        if (sum[i] == newsum[newsum.length - 1]) {
            lr.innerHTML = element[i];
        }
    }

}
//-----------------------------------------出现次数的函数 start-------------------------------------//
function howmany() {
    var tr = document.getElementById("times_result");
    tr.innerHTML = newsum[newsum.length - 1];
}
//-----------------------------------------寻找出现位置的函数 end-------------------------------------//

function position() {
    var pr = document.getElementById("position_result");
    for (i = 0; i < array.length; i++) {
        if (sum[i] == newsum[newsum.length - 1]) {
            var elemost = element[i]
        }
    }
    var arraynew = new Array();
    for (i = 0; i < array.length; i++) {
        if (array[i] == elemost) {
            arraynew.push(i);
            pr.innerHTML = arraynew.toString();
        };
    }
}
