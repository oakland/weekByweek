// var time=new Array("","","","")
//---------------------------------------------------------------------------------------------------------------------
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++; //用来计算与当前这个元素相同的个数  
            array.splice(j, 1); //每找到一个相同的元素，就要把它移除掉，  
            j--;
        }
    }
    yuansu[i] = array[i]; //将当前的元素存入到yuansu数组中  
    sum[i] = count; //并且将有多少个当前这样的元素的个数存入sum数组中  
    count = 1; //再将count重新赋值，进入下一个元素的判断  
}


//---------------------------------------------------------------------------------------------------------------------
var str = '';
//算出array数组中不同的元素出现的次数  
for (var i = 0; i < yuansu.length; i++) {
    str += yuansu[i] + "出现的次数为：" + sum[i] + "<br/>";
}
document.write(str);
//---------------------------------------------------------------------------------------------------------------------

var newsum = new Array(); //  sum;  
for (var item in sum) {
    newsum[item] = sum[item];
}
newsum.sort();
// document.write(sum.toString()+"<br/>");  
// document.write(newsum.toString() + "<br/>");  
var first = ''; //存放出现次数最多的元素，以及个数  
var second = ''; //存放出现次数居第二位的元素，以及个数  
var fcount = 1; //计算出现次数最多的元素总共有多少个  
//算出出现次数最多的元素及个数  
document.write("<br/>");
for (var i = 0; i < sum.length; i++) {
    if (sum[i] == newsum[newsum.length - 1]) {
        //document.write("出现次数最多的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>");  
        first += "出现次数最多的元素是：" + yuansu[i] + "。次数为：" + sum[i] + "<br/>";
        fcount++;
    }

}
//算出出现次数居第二位的元素及个数  
for (var i = 0; i < sum.length; i++) {

    if (sum[i] == newsum[newsum.length - fcount]) {
        //document.write("出现次数居第二位的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>");  
        second += "出现次数居第二位的元素是：" + yuansu[i] + "。次数为：" + sum[i] + "<br/>"
    }
}
document.write("出现次数最多的元素有" + (fcount - 1) + "个<br/>" + first + "<br/>" + second);


