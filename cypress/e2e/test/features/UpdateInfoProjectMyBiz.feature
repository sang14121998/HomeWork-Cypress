Feature: Update info project 

Scenario: Thêm thành viên thành công vào dự án
Given Đã login thành công với tài khoản username "nowasew301@vkr1.com" và password "A123456!"
When Đã tạo 1 project thành công
When Chọn dự án muốn xóa từ dropdown choose project 
Then Click vào cấu hình button
When Click vào Thêm nhân sự button
When Click vào Thêm thành viên trong dropdown 
When Nhập email thành viên muốn thêm vào textbox email invite
When Click Gửi lời mời button 
Then Thêm thành viên vào dự án thành công