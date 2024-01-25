Feature: Thêm giải pháp

Scenario: Thêm 1 giải pháp thành công khỏi dự án
Given Đã tạo 1 dự án thành công chưa có đủ toàn bộ giải pháp
When Chọn dự án muốn xóa giải pháp từ dropdown choose project 
Then Click vào Thêm giải pháp khác button 
When Chọn thêm 1 giải pháp khác
When Click Bắt đầu sử dụng ngay button
Then Thêm giải pháp mới vào dự án đã tạo thành công

