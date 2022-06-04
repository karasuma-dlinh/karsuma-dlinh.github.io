//Mặc Định Của Cả 4 Phép Tính
const dau_bang = "="
function tinh_tong() {
    //Set mặc định Phép Cộng
    const dau_cong = "+"
    //Lấy giá trị từ input
    var a = document.getElementById("sothu1").value;
    var b = document.getElementById("sothu2").value;
    //Chuyển giá trị value về dạng số
    a = parseFloat(a); 
    b = parseFloat(b);
    //Tính Tổng
    var tong = a+b;
    //In Giá Trị Vào Kết Quả
    document.querySelector('#a').innerHTML = a
    document.querySelector('#dau').innerHTML = dau_cong
    document.querySelector('#b').innerHTML = b
    document.querySelector('#daubang').innerHTML = dau_bang
    document.querySelector('#kq').innerHTML = tong
}
function tinh_hieu(){
    //Set mặc định Phép Trừ
    const dau_tru = "-"
    //Lấy giá trị từ input
    var a = document.getElementById("sothu1").value
    var b = document.getElementById("sothu2").value
    //Chuyển giá trị value về dạng số
    a = parseFloat(a); 
    b = parseFloat(b);
    //Tính Hiệu
    var tru = a-b
    //In Giá Trị Vào Kết Quả
    document.querySelector('#a').innerHTML = a
    document.querySelector('#dau').innerHTML = dau_tru
    document.querySelector('#b').innerHTML = b
    document.querySelector('#daubang').innerHTML = dau_bang
    document.querySelector('#kq').innerHTML = tru
}
function tinh_tich(){
    //Set mặc định Phép Nhân
    const dau_nhan = "x"
    //Lấy giá trị từ input
    var a = document.getElementById("sothu1").value
    var b = document.getElementById("sothu2").value
    //Chuyển giá trị value về dạng số
    a = parseFloat(a); 
    b = parseFloat(b);
    //Tính Tích
    var nhan = a*b
    //In Giá Trị Vào Kết Quả
    document.querySelector('#a').innerHTML = a
    document.querySelector('#dau').innerHTML = dau_nhan
    document.querySelector('#b').innerHTML = b
    document.querySelector('#daubang').innerHTML = dau_bang
    document.querySelector('#kq').innerHTML = nhan
}
function tinh_thuong(){
    //Set mặc định Phép Chia
    const dau_chia = ":"
    //Lấy giá trị từ input
    var a = document.getElementById("sothu1").value
    var b = document.getElementById("sothu2").value
    //Chuyển giá trị value về dạng số
    a = parseFloat(a); 
    b = parseFloat(b);
    //Tính Thương
    var chia = a/b
    //Làm tròn đến 2 chữ số thập phân
    var chia_da_lam_tron = chia.toFixed(2);
    //In Giá Trị Vào Kết Quả
    document.querySelector('#a').innerHTML = a
    document.querySelector('#dau').innerHTML = dau_chia
    document.querySelector('#b').innerHTML = b
    document.querySelector('#daubang').innerHTML = dau_bang
    document.querySelector('#kq').innerHTML = chia_da_lam_tron
}


  

