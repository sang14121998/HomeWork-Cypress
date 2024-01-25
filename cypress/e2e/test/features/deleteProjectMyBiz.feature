Feature: Delete 1 project 

Scenario: Delete 1 project thành công
Given Đã login thành công với tài khoản username "nowasew301@vkr1.com" và password "A123456!"
When Đã tạo 1 project thành công
When Chọn dự án muốn xóa từ dropdown choose project 
Then Click vào cấu hình button
When Click vào Xóa dự án button
When Click vào Xóa dự án button trong popup confirm xóa dự án
Then Xóa dự án thành công, click Trờ về trang chủ button
