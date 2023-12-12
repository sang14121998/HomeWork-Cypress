Feature: Edit info Emp

Scenario: Edit info thành công
Given Tôi truy cập website và login thành công với username "Admin", password "admin123"
When Chuyển đến trang My Info
Then Hiển thị trang My Info 
When Nhập data edit theo data faker vào form
When Click "Save" button
Then Edit info emp thành công
