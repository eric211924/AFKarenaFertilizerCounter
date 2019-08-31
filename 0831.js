let a1 = ['', '1張', '3張', '9張', '18張', '54張', '72張', '144張', '216張', '252張'];
let a2 = ['', '1張', '2張', '6張', '8張', '16張', '24張', '28張'];
let b = ['藍卡', '紫卡'];
let c = ['光耀', '蠻族', '綠裔', '亡靈'];
let d = ['你需要', '<br>至少需', '自己'];
let e = ['3張', '6張', '12張', '24張', '36張', '2張', '4張', '4張', '8張'];

function print_value() {
    let x = document.getElementById('user1').value;
    let y = document.getElementById('user2').value;
    console.log('x=' + x + 'y=' + y);
    console.log('ok');
    document.getElementById("show5").innerHTML = '';
    document.getElementById("show0").innerHTML = d[0];

    if (x % 4 == 1) document.getElementById("show3").innerHTML = c[0];
    else if (x % 4 == 2) document.getElementById("show3").innerHTML = c[1];
    else if (x % 4 == 3) document.getElementById("show3").innerHTML = c[2];
    else if (x % 4 == 0) document.getElementById("show3").innerHTML = c[3];

    if (x > 4) {
        document.getElementById("show1").innerHTML = a2[(y - 2)];
        document.getElementById("show2").innerHTML = b[1];

        if (y < 3) { //原生紫卡想要藍品質時
            document.getElementById("show0").innerHTML = '他沒有藍唷>.^<br>請重新選擇品質';
            document.getElementById("show1").innerHTML =
                document.getElementById("show2").innerHTML =
                document.getElementById("show3").innerHTML =
                document.getElementById("show4").innerHTML = '';
        } else if (y == 4 || y == 5)
            document.getElementById("show4").innerHTML = d[1] + e[5] + d[2];
        else if (y == 6 || y == 7)
            document.getElementById("show4").innerHTML = d[1] + e[6] + d[2];
        else if (y == 8)
            document.getElementById("show4").innerHTML = d[1] + e[7] + d[2];
        else if (y == 9)
            document.getElementById("show4").innerHTML = d[1] + e[8] + d[2];

        if (y == 3) {
            document.getElementById("show0").innerHTML = '只要一張，去抽就對惹';
            document.getElementById("show1").innerHTML =
                document.getElementById("show2").innerHTML =
                document.getElementById("show3").innerHTML =
                document.getElementById("show4").innerHTML =
                document.getElementById("show5").innerHTML = '';
        }
    } else {
        document.getElementById("show1").innerHTML = a1[y];
        document.getElementById("show2").innerHTML = b[0];
        if (y == 2 || y == 3)
            document.getElementById("show4").innerHTML = d[1] + e[0] + d[2];
        else if (y == 4 || y == 5)
            document.getElementById("show4").innerHTML = d[1] + e[1] + d[2];
        else if (y == 6 || y == 7)
            document.getElementById("show4").innerHTML = d[1] + e[2] + d[2];
        else if (y == 8)
            document.getElementById("show4").innerHTML = d[1] + e[3] + d[2];
        else if (y == 9)
            document.getElementById("show4").innerHTML = d[1] + e[4] + d[2];

        if (y == 1) {
            document.getElementById("show0").innerHTML = '只要一張，去抽就對惹';
            document.getElementById("show1").innerHTML =
                document.getElementById("show2").innerHTML =
                document.getElementById("show3").innerHTML =
                document.getElementById("show4").innerHTML =
                document.getElementById("show5").innerHTML = '';
        }

        if (y == 3) //原生藍要紫
            document.getElementById("show5").innerHTML = '<br>有可能直接抽到';
    }
}