Feature: Create new project

Scenario: Create new projetc với 1 giải pháp thành công 
Given Đã login thành công với tài khoản username "nowasew301@vkr1.com" và password "A123456!"
When Click dropdown Chọn dự án và click on Tạo dự án mới button
Then Chọn giải pháp BizCRM
When Click on Bắt đầu sử dụng ngay button
Then Tạo dự án mới thành công đi kèm với giải pháp BizCRM đã chọn
