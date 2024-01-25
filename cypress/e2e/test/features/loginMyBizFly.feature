Feature: Login

Scenario: Login is success
Given Truy cập trang login
When Nhập 'nowasew301@vkr1.com' vào textbox account
Then Click on "Tiếp tục" button để chuyển đến màn nhập password
When Nhập 'A123456!' vào textbox password
When Click on "Đăng nhập bằng ViệtID" button
Then Login thành công, hiển thị trang MyBizFly tương ứng 


