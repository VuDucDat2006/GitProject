# [Thực hành] Xây dựng Trang Chủ với Bootstrap

Dự án bài tập thực hành áp dụng toàn diện các kỹ thuật của framework **Bootstrap 5.3.3** kết hợp thư viện biểu tượng **Font Awesome 6.5.2** để xây dựng một Trang Chủ (Homepage) hoàn chỉnh, tương tác sinh động và chuẩn Responsive.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Luyện tập sử dụng **Bootstrap 5.3.3** để tạo bố cục trang web linh hoạt.
- Ứng dụng thuộc tính hiển thị (**Display Property**) và hệ thống đo khoảng cách lề (**Margin & Padding** utilities: `py-5`, `mt-4`, `mb-3`, `gap-4`).
- Vận dụng **CSS Flexbox** (`d-flex`, `justify-content-center`, `align-items-center`) để căn giữa nội dung hoàn hảo.
- Tích hợp component **Carousel** (`carousel slide`, `data-bs-ride="carousel"`, indicators, caption) để tạo slideshow trình chiếu hình ảnh tự động.
- Nhúng thư viện biểu tượng nổi tiếng **Font Awesome 6.5.2** vào Navbar, Cards và Form liên hệ.
- Ứng dụng **Bootstrap Forms** (`form-control`, `form-label`, `btn-primary`) để xây dựng form gửi liên hệ người dùng.

---

## 🚀 Các Bước Thực Hiện Chi Tiết

### Bước 1: Cài đặt Bootstrap 5.3.3 & Font Awesome 6.5.2
- **Bootstrap CSS**:
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  ```
- **Bootstrap JS Bundle** (đã tích hợp sẵn Popper):
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  ```
- **Font Awesome 6.5.2**:
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  ```

---

### Bước 2: Tạo Navbar với Font Awesome
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#"><i class="fas fa-home"></i> MyWebsite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-house me-1"></i> Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-info-circle me-1"></i> About</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-cogs me-1"></i> Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-envelope me-1"></i> Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

---

### Bước 3: Tạo Hero Section với Carousel
```html
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="image1.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
            <img src="image2.jpg" class="d-block w-100" alt="Slide 2">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

---

### Bước 4: Thêm Section với Flexbox
```html
<div class="d-flex justify-content-center align-items-center bg-light py-5">
    <h2>Chào mừng đến với trang web của chúng tôi!</h2>
</div>
```

---

### Bước 5: Tạo Contact Form với Bootstrap Form
```html
<form class="container mt-4">
    <div class="mb-3">
        <label for="name" class="form-label">Tên của bạn</label>
        <input type="text" class="form-control" id="name" placeholder="Nhập tên">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Nhập email">
    </div>
    <button type="submit" class="btn btn-primary">Gửi</button>
</form>
```

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn HTML trang chủ tích hợp Bootstrap 5.3.3 & Font Awesome
├── style.css        # Tùy biến CSS: Chiều cao ảnh Carousel, hiệu ứng hover thẻ Flexbox
├── image1.jpg       # Hình ảnh minh họa slide 1
├── image2.jpg       # Hình ảnh minh họa slide 2
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng trình duyệt web bất kỳ.
2. **Kiểm tra Carousel**: Quan sát slideshow tự động chuyển đổi slide hình ảnh mượt mà mỗi 4 giây, hoặc bấm nút mũi tên Prev/Next để đổi slide thủ công.
3. **Kiểm tra Navbar**: Các biểu tượng Font Awesome hiển thị đồng bộ bên cạnh chữ menu.
4. **Kiểm tra Flexbox Center**: Khối tiêu đề chào mừng được căn giữa hoàn hảo cả ngang lẫn dọc.
5. **Kiểm tra Form Liên Hệ**: Nhập thử Tên, Email và bấm nút *Gửi Tin Nhắn* để xem thông báo tương tác.
6. **Kiểm tra Mobile**: Bấm `F12` $\rightarrow$ `Ctrl + Shift + M` để thấy giao diện co giãn Responsive 100% không bị vỡ bố cục.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-homepage](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-homepage)
