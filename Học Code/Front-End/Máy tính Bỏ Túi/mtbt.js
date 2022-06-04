//Xóa tất cả
function xoa_tat_ca() {
    document.getElementById("man_hinh").value = "";
}
// Xóa từng kí tự
function xoa_tung_so() {
    var gia_tri = document.getElementById("man_hinh").value;
    var gia_tri = gia_tri.toString();
    if(gia_tri) { 
        gia_tri = gia_tri.substr(0, gia_tri.length -1); 
        document.getElementById("man_hinh").value = gia_tri;
    }
}
// Lấy số hoặc dấu điền vào bảng
function manhinh(so_hoac_dau) {
    var check = document.getElementById("man_hinh").value;
    // Check trường hợp thừa chứ
    if (check == "HÃY NHẬP PHÉP TÍNH" || check == "HÃY NHẬP PHÉP TÍN" || check == "HÃY NHẬP PHÉP TÍ" 
        || check == "HÃY NHẬP PHÉP T" || check == "HÃY NHẬP PHÉP " || check == "HÃY NHẬP PHÉP") 
    {
        document.getElementById("man_hinh").value = "";
        document.getElementById("man_hinh").value += so_hoac_dau;
    } else {
        document.getElementById("man_hinh").value += so_hoac_dau;
    }   
}
// Tính kết quả bằng hàm eval()
function tinh_ket_qua() {
    var ket_qua = document.getElementById("man_hinh").value;
    // Check có giá trị hay ko
    if (ket_qua == null || ket_qua == "") {
        document.getElementById("man_hinh").value = "HÃY NHẬP PHÉP TÍNH";
    }
    else {
        var ket_qua = eval(ket_qua);
        document.getElementById("man_hinh").value = ket_qua;
    }
}