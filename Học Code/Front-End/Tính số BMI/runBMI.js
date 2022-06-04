function runBMI_input() {
    var ho_va_ten = document.getElementById("ho_va_ten").value
    var can_nang = document.getElementById("can_nang").value
    var chieu_cao = document.getElementById("chieu_cao").value
    if (ho_va_ten,can_nang,chieu_cao == null || ho_va_ten,can_nang,chieu_cao == "") {
        document.querySelector("#ketqua").innerHTML = "Bạn Nhập Sai Cách Rồi"
    } else {
        var baocao
        var text ="BMI Của Bạn là: "
        var bmi = can_nang / (chieu_cao * chieu_cao)
        bmi = bmi.toFixed(1)
        if (bmi <= 18.5) {
            baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Quá Gầy"
        } else if (bmi >= 25.0) {
            baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Quá Béo"
        } else if (18.6 < bmi <25.0 ) {
            baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Bình Thường"
        }
        document.querySelector("#ketqua").innerHTML = baocao
    }
}

function runBMI() {
    var xac_nhan = confirm("Bạn Muốn Tính BMI Qua Hộp Thoại Chứ ?")
    if (xac_nhan) {
        var ho_va_ten = prompt("Họ và Tên Của Bạn Là Gì ?")
        var can_nang = prompt("Cân Nặng Của Bạn Là Bao Nhiêu ? (Đơn vị: kg)")
        var chieu_cao = prompt("Chiều Cao Của Bạn Là Bao Nhiêu ? (Đơn vị: m)")
        if (ho_va_ten,can_nang,chieu_cao == null || ho_va_ten,can_nang,chieu_cao == "") {
            document.querySelector("#ketqua").innerHTML = "Bạn Nhập Sai Cách Rồi"
        } else {
            var baocao
            var text ="BMI Của Bạn là: "
            var bmi = can_nang / (chieu_cao * chieu_cao)
            bmi = bmi.toFixed(1)
            if (bmi <= 18.5) {
                baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Quá Gầy"
            } else if (bmi >= 25.0) {
                baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Quá Béo"
            } else {
                baocao ="Họ Và Tên: " + ho_va_ten + ".</br>" + "Cân Nặng: " + can_nang + "</br>" + "Chiều Cao: " + chieu_cao + "</br>" + text + bmi + ". Thể Trạng Của Bạn Bình Thường"
            }
            document.querySelector("#ketqua").innerHTML = baocao
        }
    } else {
        alert("Đừng Ấn Nhầm Nữa Nhé!")
    }
}