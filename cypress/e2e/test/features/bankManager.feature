Feature: Add new customer

   Scenario: Thêm 1 customer thành công
    Given Tôi đã chuyển đến trang Login
    When  Click "Bank manager login" button
    Then Show screen 'Bank manager"
    When Click 'Add Customer" button
    Then Show form to input 
    When Input to all filed
    Then Display data inputed to field 
    When Click "Add customer" button
    Then Verifi notice add customer success

