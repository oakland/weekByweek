// .text和.innerHTML有什么区别？分别在什么时候使用？
function calculate(num1,num2,operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result;
    
    if (isNaN(num1) || isNaN(num2)) {
        // 只要有一个不是数字就弹出提示
        alert("请输入数字");
    } else {
        // 两个输入框都输入数字后进行条件判断
        switch (operator) {
            case "加":
                result = num1 + num2;
                break;
            case "减":
                result = num1 - num2;
                break;
            case "乘":
                result = num1 * num2;
                break;
            case "除":
                result = num1 / num2;
                break;
        }
        document.getElementById('result').innerHTML=result;
    }
}
