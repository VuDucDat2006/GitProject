# [Thực hành] Tạo layout trong Bootstrap

Dự án bài tập thực hành áp dụng toàn diện các thành phần của framework **Bootstrap 3.3.7** (`container`, `header`, `navbar-inverse`, `glyphicons`, `panel`, `list-group`, `grid system col-sm-9 / col-sm-3 / col-sm-4`) để xây dựng một trang web mua sắm trực tuyến (**Online Shopping Mall**) hoàn chỉnh.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Sử dụng các thành phần có sẵn của Bootstrap để tạo bố cục và nội dung trang web cơ bản.
- Áp dụng hệ thống lưới Bootstrap Grid (`col-sm-9`, `col-sm-3`, `col-sm-4`, `col-sm-5`, `col-sm-7`).
- Thiết kế thanh điều hướng tối màu (`navbar-inverse`) tích hợp hệ thống biểu tượng **Glyphicons**.
- Sử dụng các khối giao diện **Panel** (`panel-heading`, `panel-body`, `panel-footer`) để thiết kế sản phẩm, giỏ hàng và danh mục.
- Tùy biến kiểu dáng nâng cao qua file `poly.css` (`.shopping-mall`, `.poly-cart`, `.poly-prod`).

---

## 🚀 Các Bước Thực Hiện Chi Tiết

### Bước 1: Tạo file `layout.html`
- Khởi tạo cấu trúc HTML5 và nhúng thư viện Bootstrap 3.3.7 & jQuery 3.2.1 qua CDN:
  ```html
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  ```
- Phân chia bố cục khung tổng thể:
  - Khung bao bọc: `<div class="container" style="height: auto">`
  - Header: `<header class="row">`
  - Menu điều hướng: `<nav class="navbar navbar-inverse">`
  - Thân trang chia 2 cột: `<div class="row">` gồm `<article class="col-sm-9">` và `<aside class="col-sm-3">`
  - Chân trang: `<footer class="panel panel-default">`

### Bước 2 & 3: Thiết kế Header & Định dạng `.shopping-mall`
- Đặt tiêu đề lớn, khẩu hiệu và hình ảnh trang trí đẩy sang mép phải bằng `.pull-right`:
  ```html
  <header class="row">
      <div class="shopping-mall">
          <h1>Online shopping mall</h1>
          <h5>The center point of the professional programming</h5>
      </div>
      <img class="pull-right" src="images/header-object.png" alt="Header Object"/>
  </header>
  ```
- Định dạng CSS cho `.shopping-mall` trong `poly.css`:
  ```css
  header { position: relative; }
  .shopping-mall { position: absolute; bottom: 20px; font-variant: small-caps; }
  .shopping-mall > h1 { font-family: Impact; font-size: 50px; color: white; text-shadow: 0 0 2px black; }
  .shopping-mall > h5 { margin-top: 5px; letter-spacing: 0.5px; }
  ```

### Bước 4: Thiết kế Menu `<nav class="navbar navbar-inverse">`
- Đổi từ `.navbar-default` sang `.navbar-inverse` cho nền tối sang trọng.
- Bổ sung các icon Glyphicons chuẩn vào từng mục menu:
  - `<span class="glyphicon glyphicon-home"></span> Trang chủ`
  - `<span class="glyphicon glyphicon-list-alt"></span> Giới thiệu`
  - `<span class="glyphicon glyphicon-earphone"></span> Liên hệ`
  - `<span class="glyphicon glyphicon-envelope"></span> Góp ý`
  - `<span class="glyphicon glyphicon-question-sign"></span> Hỏi đáp`
  - `<span class="glyphicon glyphicon-user"></span> Tài khoản` (Menu con thả xuống: Đăng nhập, Đăng ký, Quên mật khẩu)

### Bước 5: Thiết kế Cột Phụ `<aside class="col-sm-3">`
1. **Giỏ hàng (`.poly-cart`)**: Panel chia 2 phần (`col-sm-5` hình ảnh giỏ hàng + `col-sm-7` thông tin số lượng 100 items, tổng tiền $56.8 và link xem giỏ hàng).
2. **Ô tìm kiếm**: Panel chứa ô input `form-control` placeholder `Keywords`.
3. **Chủng loại hàng**: Panel kết hợp `list-group` hiển thị danh sách: *Điện thoại di động, Máy tính xách tay, Máy tính để bàn, Quạt máy, Tivi, Tủ lạnh*.

### Bước 6: Thiết kế Cột Sản Phẩm `<article class="col-sm-9">`
- Sử dụng lưới chia mỗi hàng 3 sản phẩm, mỗi sản phẩm chiếm 4 cột (`col-sm-4 poly-prod`).
- Ứng dụng cấu trúc Panel cho từng sản phẩm:
  - `.panel-heading`: Tên sản phẩm (*Nokia, Samsung Galaxy, Apple iPhone, Dell, Sony, HP*).
  - `.panel-body`: Hình ảnh sản phẩm `computer.png`.
  - `.panel-footer`: Đơn giá (ví dụ: `$ 100.25`).
- Định dạng `.poly-prod` trong `poly.css`:
  ```css
  .poly-prod { text-align: center; padding: 5px; }
  .poly-prod .panel-body img { height: 150px; max-width: 95%; object-fit: contain; }
  ```

### Bước 7: Kiểm tra & Chạy Thử
- Mở file `layout.html` trên trình duyệt và kiểm tra toàn bộ giao diện theo bản mẫu chuẩn: `http://demo.codegym.vn/web/15/layout-bootstrap/`.

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html           # File giao diện chính (bản sao của layout.html phục vụ GitHub Pages)
├── layout.html          # File bài tập layout.html chuẩn theo giáo trình
├── poly.css             # File định dạng CSS cho Shopping Mall, Giỏ hàng, Sản phẩm
├── images/              # Thư mục hình ảnh dự án
│   ├── header-object.png# Ảnh biểu tượng trang trí header
│   ├── shoppingcart.gif # Ảnh biểu tượng giỏ hàng
│   └── computer.png     # Ảnh sản phẩm điện tử máy tính
└── README.md            # Tài liệu thuyết minh dự án và hướng dẫn nộp bài
```

---

## 🔍 Hướng Dẫn Chạy & Kiểm Tra
1. Mở file `layout.html` hoặc `index.html` trực tiếp bằng trình duyệt (Chrome, Edge, Firefox).
2. Kiểm tra các thành phần:
   - Header chữ lớn `Online shopping mall` font Impact bóng đổ cùng ảnh góc phải.
   - Thanh Navbar màu đen với đầy đủ icon Glyphicons và menu Tài khoản xổ xuống.
   - Thân trang chia 2 cột: Bên trái là lưới sản phẩm 3 cột đều đặn (`col-sm-4`), bên phải là Giỏ hàng, Ô tìm kiếm và Danh mục chủng loại.
   - Chân trang hiển thị thông tin bản quyền CodeGym.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-layout-practice](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-layout-practice)
