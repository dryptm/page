var c = 1;

function myfunction() {
    if (c % 2 != 0) {
        document.getElementById('a').style.visibility = "visible";
        c++;
    } else {
        document.getElementById('a').style.visibility = "hidden";
        c--;
    }

}