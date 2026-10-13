# [Thực hành] Xây dựng Landing Page với Bootstrap

Dự án bài tập thực hành xây dựng một trang Landing Page hoàn chỉnh, chuyên nghiệp và chuẩn Responsive bằng framework **Bootstrap 5.3**. Trang web tích hợp đầy đủ 5 thành phần cốt lõi: **Navbar**, **Hero Section**, **Grid System**, **Cards**, **Buttons** và **Footer**.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Luyện tập sử dụng thư viện **Bootstrap 5.3** để xây dựng giao diện Landing Page chuyên nghiệp.
- Ứng dụng hệ thống **Grid System** (`container`, `row`, `col-md-4`) để chia cột đồng đều trên Desktop và tự động xếp chồng trên Mobile.
- Tích hợp thanh điều hướng Responsive **Navbar** với menu tự thu gọn thành nút **Hamburger**.
- Thiết kế **Hero Section** nổi bật với lời kêu gọi hành động (Call To Action - CTA).
- Hiển thị danh sách dịch vụ bằng các khối **Cards** trực quan, đồng đều chiều cao (`h-100`).
- Định dạng chân trang **Footer** cố định thông tin bản quyền và tác giả.

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

#### 2.1. Khởi tạo khung HTML cơ bản
Tạo file `index.html` với chuẩn HTML5 và khai báo thẻ `meta` viewport để giao diện co giãn chính xác trên thiết bị di động.

#### 2.2. Xây dựng Navbar (Thanh điều hướng)
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
        <a class="navbar-brand fw-bold text-info" href="#">🚀 MyBrand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```
*Điểm lưu ý:* Class `ms-auto` (Margin Start Auto) giúp căn đẩy toàn bộ danh sách menu sang mép phải của thanh Navbar.

#### 2.3. Xây dựng Hero Section (Đầu trang ấn tượng)
```html
<header class="bg-primary text-white text-center py-5">
    <div class="container py-4">
        <h1 class="display-4 fw-bold">Chào mừng đến với MyBrand</h1>
        <p class="lead">Giải pháp số 1 cho doanh nghiệp của bạn</p>
        <a href="#services" class="btn btn-light btn-lg">Khám phá ngay</a>
    </div>
</header>
```
*Tác dụng:* Nền xanh chính (`bg-primary`), chữ trắng (`text-white`), padding dọc rộng (`py-5`) kết hợp nút bấm sáng (`btn-light`) thu hút sự chú ý của người truy cập.

#### 2.4. Xây dựng Grid System - Services (Danh mục dịch vụ)
```html
<section id="services" class="container py-5">
    <h2 class="text-center mb-4 fw-bold">Dịch vụ của chúng tôi</h2>
    <div class="row g-4">
        <div class="col-md-4 text-center">
            <div class="card p-4 h-100 shadow-sm border-0">
                <div class="card-icon mb-3">💻</div>
                <h3 class="h4 fw-bold">Thiết kế Web</h3>
                <p class="text-muted">Dịch vụ thiết kế web chuyên nghiệp.</p>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="card p-4 h-100 shadow-sm border-0">
                <div class="card-icon mb-3">📈</div>
                <h3 class="h4 fw-bold">SEO & Marketing</h3>
                <p class="text-muted">Nâng cao thương hiệu của bạn.</p>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="card p-4 h-100 shadow-sm border-0">
                <div class="card-icon mb-3">🛠️</div>
                <h3 class="h4 fw-bold">Hỗ trợ 24/7</h3>
                <p class="text-muted">Chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
            </div>
        </div>
    </div>
</section>
```
*Cơ chế Grid:* Mỗi cột dịch vụ có class `col-md-4` $\rightarrow$ Trên màn hình máy tính bảng và máy tính ($12 / 3 = 4$), các khối dàn thành 3 cột đều nhau. Khi thu nhỏ về điện thoại (`< 768px`), các cột tự động trở về `col-12` (xếp dọc 1 cột).

#### 2.5. Xây dựng Footer (Chân trang)
```html
<footer class="bg-dark text-white text-center py-4">
    <div class="container">
        <p class="mb-1">&copy; 2026 MyBrand. All rights reserved.</p>
        <small class="text-secondary">Học viên thực hiện: Vũ Đức Đạt (VuDucDat2006)</small>
    </div>
</footer>
```

---

## 📋 Bảng Phân Tích Kỹ Thuật Các Class Bootstrap 5

| Thành phần | Class Bootstrap | Mục đích & Tác dụng kỹ thuật |
| :--- | :--- | :--- |
| **Navbar** | `navbar navbar-expand-lg navbar-dark bg-dark` | Tạo thanh điều hướng tông màu tối, co giãn tự động trên Desktop và thu gọn trên Mobile |
| **Căn lề menu** | `ms-auto` | Căn toàn bộ các mục menu sang mép bên phải |
| **Nút mở menu** | `navbar-toggler`, `data-bs-toggle="collapse"` | Nút Hamburger icon kích hoạt mở/đóng menu khi xem trên điện thoại |
| **Hero Banner** | `bg-primary text-white text-center py-5` | Khối giới thiệu thương hiệu nổi bật với tiêu đề lớn và lời kêu gọi hành động (CTA) |
| **Grid System** | `container` $\rightarrow$ `row` $\rightarrow$ `col-md-4` | Khung lưới chia đều 3 cột trên thiết bị có độ phân giải từ Medium ($\ge 768\text{px}$) trở lên |
| **Cards** | `card p-4 h-100 shadow-sm` | Khối thẻ dịch vụ bo tròn góc, có bóng mờ nhẹ và tự động giãn đều chiều cao 100% |
| **Buttons** | `btn btn-light`, `btn-outline-primary` | Nút bấm tương tác theo chuẩn thẩm mỹ giao diện phẳng hiện đại |
| **Footer** | `bg-dark text-white py-4` | Phần chân trang hiển thị bản quyền và tác giả |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn Landing Page hoàn chỉnh chuẩn Bootstrap 5.3
├── style.css        # Tùy biến thẩm mỹ: Google Font, hiệu ứng hover thẻ Card, Hero gradient
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng trình duyệt web bất kỳ.
2. **Kiểm tra trên màn hình Desktop (> 992px)**:
   - Thanh Navbar dàn ngang cố định ở đỉnh trang (`sticky-top`).
   - Hero Section rực rỡ với nút *Khám phá ngay*.
   - Khối Dịch vụ hiển thị 3 cột song song cân đối, thẻ Card có hiệu ứng bay nhẹ khi rê chuột.
3. **Kiểm tra trên màn hình Mobile / Tablet (< 768px)**:
   - Nhấn `F12` và bật **Device Mode** (`Ctrl + Shift + M`).
   - Navbar tự động thu gọn lại thành biểu tượng nút bấm Hamburger 3 gạch.
   - Bấm nút Hamburger để menu mở ra mượt mà.
   - 3 khối thẻ Dịch vụ tự động chuyển đổi thành 1 cột dọc thẳng đứng dễ đọc.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-landing-page](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-landing-page)
