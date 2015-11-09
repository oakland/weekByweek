function classify() {
    var score = document.getElementById("score");
    var scoreinput = parseInt(score.value);
    var result = document.getElementById("result");
    switch (true) {
        case (scoreinput == null):
            alert("请输入数字1-100");
            break;
        case (isNaN(scoreinput)):
            alert("请输入1-100的数字");
            break;
        case (scoreinput < 0 || scoreinput > 100):
            alert("请输入1-100的数字");
            break;
        case (scoreinput == 100):
            result.innerHTML = "恭喜，获得满分！";
            break;
        default:
            result.innerHTML = (10 - parseInt(scoreinput / 10)) + "等生";
    }
}
