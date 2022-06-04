#include <stdio.h>
#include <iostream>
#include <conio.h>

int main() 
{
    int n{ 0 };
    std::cout << "Nhập lần lặp: " << std::endl;
    std::cin >> n;
    for (int i = 0; i < n; i++)
    {
        std::cout << i << ".Anh Xin Lỗi Em" << std::endl;
    }
    getch();
    return 0;
}