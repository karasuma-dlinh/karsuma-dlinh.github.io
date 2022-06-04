const daugachngang = "-"
function chuyen() {
    //Đọc Giá Trị Của Value Trong Phần Seclect Bằng ID
    var x = document.getElementById("loaitien").value;
    x = parseFloat(x);
    if (x == 0) {
        const loaitiendoi = "USD"
        const kyhieutien = "$"
        var a = document.getElementById("sotien").value
        a = parseFloat(a);
        var b = a/23000
        document.querySelector('#loaitiensaukhidoi').innerHTML = loaitiendoi
        document.querySelector('#daugachngang').innerHTML = daugachngang
        document.querySelector('#giatridoi').innerHTML = b
        document.querySelector('#kyhieutien').innerHTML = kyhieutien
    }
    if (x == 1) {
        const loaitiendoi = "CNY"
        const kyhieutien = "¥"
        var a = document.getElementById("sotien").value
        a = parseFloat(a);
        var b = a/5000
        document.querySelector('#loaitiensaukhidoi').innerHTML = loaitiendoi
        document.querySelector('#daugachngang').innerHTML = daugachngang
        document.querySelector('#giatridoi').innerHTML = b
        document.querySelector('#kyhieutien').innerHTML = kyhieutien
    }
    if (x == 2) {
        const loaitiendoi = "EUR"
        const kyhieutien = "€"
        var a = document.getElementById("sotien").value
        a = parseFloat(a);
        var b = a/25000
        document.querySelector('#loaitiensaukhidoi').innerHTML = loaitiendoi
        document.querySelector('#daugachngang').innerHTML = daugachngang
        document.querySelector('#giatridoi').innerHTML = b
        document.querySelector('#kyhieutien').innerHTML = kyhieutien
    }
    if (x == 3) {
        const loaitiendoi = "JPY"
        const kyhieutien = "¥"
        var a = document.getElementById("sotien").value
        a = parseFloat(a);
        var b = a/200
        document.querySelector('#loaitiensaukhidoi').innerHTML = loaitiendoi
        document.querySelector('#daugachngang').innerHTML = daugachngang
        document.querySelector('#kyhieutien').innerHTML = kyhieutien
        document.querySelector('#giatridoi').innerHTML = b
    }
}