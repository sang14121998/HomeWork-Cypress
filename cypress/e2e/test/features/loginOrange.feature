Feature: Login

  
  Scenario: Login is successfuly
    Given Tôi đã chuyển đến trang login
    When Nhập "Admin" và "admin123" vào textbox username và password
    When Click vào'Login' button
    Then Hiển thị trang Dashboard

  @SmokeTest
  Scenario: Login is fail
    Given Tôi đã chuyển đến trang login
    When Tôi đã nhập thông tin Scenario
      | username | password |
      |          |          |
      |          | admin123 |
      | Admin    |          |
    When Click vào'Login' button
    Then Vẫn ở trang login

  Scenario: Login is fail // dung example 
    Given Tôi đã chuyển đến trang login
    When Nhập '<username>' và '<password>' vào textbox username và password
    When Click vào'Login' button
    Then Vẫn ở trang login
    Examples: 
      | username | password |
      |          |          |
      |          |      123 |
      | Sang     |          |

