var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var dic = {};
for (i = 0; i < array.length; i++) {
    var ch = array[i];
    if (dic[ch] === undefined) {
        dic[ch] = [];
    }
    dic[ch].push(i);
};
var most = 0;
for (i in dic) {
    if (most < dic[i].length) {
        most = dic[i].length
    }
};
var lr = document.getElementById('letter_result');
var tr = document.getElementById('times_result');
var pr = document.getElementById('position_result');

function findMost() {
    for (i in dic) {
        if (dic[i].length == most) {
            lr.innerHTML = i;
        }
    }
};

function howMany() {
    for (i in dic) {
        if (dic[i].length == most) {
            tr.innerHTML = dic[i].length;
        }
    }
};

function positionOf() {
    for (i in dic) {
        if (dic[i].length == most) {
            pr.innerHTML = dic[i];
        }
    }
};

//------------为什么下面这段代码不行？？？？？？？？？----------------
// for (i in dic) {
//     if (dic[i].length == most) {

//         function findMost() {
//             lr.innerHTML = i;
//         }

//         function howMany() {
//             tr.innerHTML = dic[i].length;
//         };

//         function positionOf() {
//             pr.innerHTML = dic[i];
//         };
//     }
// };
