# [Thực hành] Tạo Trang Giới Thiệu Doanh Nghiệp với Bootstrap

Dự án bài tập thực hành xây dựng một trang giới thiệu doanh nghiệp chuyên nghiệp, giao diện hiện đại chuẩn thẩm mỹ và tương thích Responsive trên toàn bộ các thiết bị bằng framework **Bootstrap 5.3**. Trang web bao gồm 6 phân vùng chức năng cốt lõi: **Navbar**, **Hero Section**, **About Section**, **Services (Grid Cards)**, **Contact Section** và **Footer**.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Luyện tập sử dụng thư viện **Bootstrap 5.3** để xây dựng trang giới thiệu hồ sơ doanh nghiệp (Company Profile).
- Ứng dụng thanh điều hướng sáng **Navbar** (`navbar-light bg-light`) có khả năng co giãn tự động theo kích thước màn hình.
- Thiết kế **Hero Section** nổi bật với tiêu đề lớn và lời kêu gọi hành động (Call To Action - CTA).
- Triển khai **About Section** giới thiệu tổng quan tầm nhìn, sứ mệnh của công ty.
- Ứng dụng hệ thống **Grid System** (`container`, `row`, `col-md-4`) để phân chia 3 cột dịch vụ đồng đều trên Desktop và tự động xếp chồng trên Mobile.
- Xây dựng **Contact Section** hiển thị thông tin Email và Hotline kết nối khách hàng.
- Định dạng chân trang **Footer** hiển thị bản quyền và tác giả.

---

## 🚀 Các Bước Thực Hiện Chi Tiết

### Bước 1: Cài đặt Bootstrap 5.3 (CDN)
- **Bootstrap CSS** đặt trong phần `<head>`:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  ```
- **Bootstrap JS Bundle** (đã tích hợp sẵn Popper) đặt trước thẻ đóng `</body>`:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  ```

---

### Bước 2: Xây Dựng Cấu Trúc HTML Từng Bước

#### 2.1. Khởi tạo cấu trúc HTML cơ bản
Tạo file `index.html` với cấu trúc HTML5 chuẩn, thiết lập viewport và tiêu đề trang `Giới Thiệu Công Ty`.

#### 2.2. Xây dựng Navbar (Thanh điều hướng sáng)
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Doanh Nghiệp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Trang Chủ</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">Về Chúng Tôi</a></li>
                <li class="nav-item"><a class="nav-link" href="#services">Dịch Vụ</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Liên Hệ</a></li>
            </ul>
        </div>
    </div>
</nav>
```
*Tác dụng:* Thanh điều hướng nền sáng (`bg-light`), menu tự động căn phải bằng thuộc tính `ms-auto`, tích hợp nút toggler hỗ trợ di động.

#### 2.3. Thêm Hero Section (Đầu trang)
```html
<header class="bg-primary text-white text-center py-5">
    <h1>Chào mừng đến với Công Ty Chúng Tôi</h1>
    <p>Chúng tôi cung cấp các giải pháp chuyên nghiệp cho doanh nghiệp của bạn</p>
    <a href="#services" class="btn btn-light">Tìm Hiểu Ngay</a>
</header>
```
*Tác dụng:* Nền xanh chính (`bg-primary`), chữ trắng (`text-white`), padding dọc `py-5`, tạo ấn tượng ban đầu mạnh mẽ.

#### 2.4. Tạo About Section (Về chúng tôi)
```html
<section id="about" class="container py-5">
    <h2 class="text-center mb-4">Về Chúng Tôi</h2>
    <p class="text-center">Công ty chúng tôi chuyên cung cấp các dịch vụ công nghệ, thiết kế website và tiếp thị kỹ thuật số.</p>
</section>
```
*Tác dụng:* Đoạn mô tả trọng tâm giúp người truy cập nhanh chóng nắm bắt lĩnh vực hoạt động của doanh nghiệp.

#### 2.5. Thêm Services Section (Hệ thống lưới Grid 3 cột)
```html
<section id="services" class="container py-5">
    <h2 class="text-center mb-4">Dịch vụ của chúng tôi</h2>
    <div class="row">
        <div class="col-md-4 text-center">
            <div class="card p-3">
                <h3>Thiết kế Website</h3>
                <p>Thiết kế giao diện chuyên nghiệp và tối ưu hóa trải nghiệm người dùng.</p>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="card p-3">
                <h3>Marketing Online</h3>
                <p>Giải pháp tiếp thị số giúp doanh nghiệp của bạn phát triển.</p>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="card p-3">
                <h3>Hỗ trợ khách hàng</h3>
                <p>Chúng tôi cam kết hỗ trợ khách hàng 24/7.</p>
            </div>
        </div>
    </div>
</section>
```
*Tác dụng:* Phân chia 3 cột dịch vụ đồng đều trên màn hình máy tính (`col-md-4`) và tự động xếp chồng trên điện thoại.

#### 2.6. Thêm Contact Section (Liên hệ)
```html
<section id="contact" class="container py-5 text-center">
    <h2>Liên hệ với chúng tôi</h2>
    <p>Email: contact@company.com</p>
    <p>Hotline: 0988 123 456</p>
</section>
```
*Tác dụng:* Cung cấp thông tin liên lạc rõ ràng, giúp khách hàng kết nối nhanh chóng với công ty.

#### 2.7. Tạo Footer (Chân trang)
```html
<footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 Công Ty Chúng Tôi. All rights reserved.</p>
</footer>
```

---

## 📋 Bảng Phân Tích Các Thành Phần Bootstrap 5 Trong Bài Thực Hành

| Thành phần | Class Bootstrap | Ý nghĩa & Tác dụng kỹ thuật |
| :--- | :--- | :--- |
| **Navbar sáng** | `navbar navbar-expand-lg navbar-light bg-light` | Thanh menu nền sáng hiện đại, mở rộng ngang ở màn hình $\ge 992\text{px}$, thu gọn trên Mobile |
| **Căn lề menu** | `navbar-nav ms-auto` | Đẩy toàn bộ danh mục menu sang mép bên phải |
| **Hero Banner** | `bg-primary text-white text-center py-5` | Khối banner màu xanh chính, chữ trắng căn giữa thu hút người đọc |
| **Grid System** | `container` $\rightarrow$ `row` $\rightarrow$ `col-md-4` | Khung lưới 3 cột cân đối ($12 / 3 = 4$) trên Desktop, xếp dọc trên Mobile |
| **Cards** | `card p-3 / p-4 h-100 shadow-sm border-0` | Khối thẻ dịch vụ bo tròn, đổ bóng mềm và đồng đều chiều cao 100% |
| **Buttons** | `btn btn-light`, `btn-outline-primary` | Nút tương tác phẳng theo tiêu chuẩn thiết kế UI hiện đại |
| **Footer** | `bg-dark text-white text-center py-3` | Khối chân trang màu tối hiển thị bản quyền và tác giả |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn HTML trang giới thiệu công ty chuẩn Bootstrap 5.3
├── style.css        # Tùy biến thẩm mỹ: Google Font, hiệu ứng hover card, shadow, divider
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng trình duyệt web bất kỳ (Chrome, Edge, Firefox).
2. **Kiểm tra trên Desktop (> 992px)**:
   - Thanh Navbar cố định trên cùng (`sticky-top`) với menu dạt sang bên phải (`ms-auto`).
   - Hero Banner hiển thị rõ ràng lời kêu gọi *Tìm Hiểu Ngay*.
   - Khối About và khối Dịch Vụ 3 cột song song cân đối.
   - Khối Liên hệ hiển thị nổi bật Email và Hotline.
3. **Kiểm tra trên Mobile (< 768px)**:
   - Nhấn `F12` $\rightarrow$ Nhấn `Ctrl + Shift + M` để vào chế độ Device Toolbar.
   - Navbar tự động thu gọn lại thành biểu tượng nút bấm Hamburger 3 gạch $\rightarrow$ Click để mở/đóng menu.
   - Các khối dịch vụ và khối liên hệ tự động chuyển đổi thành 1 cột dọc thẳng đứng dễ đọc.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-company-profile](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-company-profile)
