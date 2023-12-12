Feature: Edit info Emp

Scenario: Edit info thành công
Given Tôi truy cập website và login thành công với username "Admin", password "admin123"
When Chuyển đến trang "My Info Personal"
Then Hiển thị trang "My Info Personal"
When Nhập data edit theo data faker vào form Personal
When Click "Save" button đầu tiên ở trang Personal
Then Edit info emp thành công
When Chuyển đến trang "Contact details"
Then Hiển thị trang "Contact details"
When Input vào form "Contact details"
When Click "Save" button ở trang Contact
Then Verify info "Contact details" mới update

