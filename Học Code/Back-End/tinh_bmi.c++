#include <iostream>
#include <string>

struct ConNguoi {
    std::string ten_ban;
    float tuoi;
    float chieu_cao;
    float can_nang;
};

void chi_so_bmi(ConNguoi nguoi) {
    float bmi = nguoi.can_nang / (nguoi.chieu_cao * nguoi.chieu_cao);
    std::string ket_qua;
    if (bmi < 18.5) 
    {
        ket_qua = "Thể Trạng Của Bạn Gầy Quá Rồi Đấy";
    } 
    else if (bmi > 25) 
    {
        ket_qua = "Thể Trạng Của Bạn Hơi Béo Đấy Nhá";
    } 
    else 
    {
        ket_qua = "Thể Trạng Của Bạn Bình Thường Đó Chứ";
    }
    std::cout << "Tên: " << nguoi.ten_ban << ". \nTuổi: " << nguoi.tuoi << ". " << "\nCân Nặng: " << nguoi.can_nang << "kg" << ". \nChiều Cao: " << nguoi.chieu_cao <<  "m = " << nguoi.chieu_cao * 100 << "cm." <<std::endl;
    std::cout << "BMI của bạn là " << bmi << ". " << ket_qua << std::endl;
}

int main() {


    std::string ten_minh = "Zinh";
    std::string ten_ny = "Chang";
    std::cout << ten_minh << " " << "Love" << " " << ten_ny << "\n" << std::endl;

    ConNguoi nguoi;
    nguoi.ten_ban = "Thành Vinh";
    nguoi.tuoi = 16;
    nguoi.can_nang = 43;
    nguoi.chieu_cao = 1.65;

    chi_so_bmi(nguoi);
    return 0;
}

