# [Thực hành] Tạo Bố Cục 3 Cột bằng Bootstrap Grid và Flexbox

Dự án bài tập thực hành áp dụng toàn diện các kỹ thuật của framework **Bootstrap 5.3.3** kết hợp thư viện biểu tượng **Font Awesome 6.5.2** để xây dựng một trang web bố cục 3 cột linh hoạt, ứng dụng Display Property, Spacing Utilities (Margin & Padding), Flexbox, Carousel Slideshow, và Bootstrap Form.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Luyện tập sử dụng **Bootstrap Grid** kết hợp **Flexbox** để tạo bố cục 3 cột cân đối và căn giữa nội dung.
- Ứng dụng hệ thống tiện ích khoảng cách **Margin & Padding** (`my-5`, `py-3`, `p-3`).
- Sử dụng **Display Property** (`d-none d-md-block`, `d-block d-md-none`) để điều khiển ẩn/hiện nội dung theo kích thước màn hình Responsive.
- Tích hợp thành phần **Carousel** (`carousel slide`, `data-bs-ride="carousel"`) tạo trình chiếu 3 slide hình ảnh với nút điều hướng chuyển qua lại.
- Nhúng thư viện **Font Awesome 6.5.2** bổ sung biểu tượng vector (`fa-home`, `fa-paper-plane`, `fa-cubes`) cho nội dung và nút bấm.
- Xây dựng biểu mẫu liên hệ **Bootstrap Form** hoàn chỉnh gồm Họ và tên, Email, Nội dung tin nhắn và nút gửi.

---

## 🚀 Các Bước Thực Hiện Chi Tiết

### Bước 1: Cấu trúc Grid với 3 cột (kết hợp Flexbox)
```html
<div class="container mt-5">
    <div class="row">
        <div class="col-md-4 d-flex justify-content-center align-items-center bg-light p-3">
            <p>Phần 1</p>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center bg-secondary p-3 text-white">
            <p>Phần 2</p>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center bg-light p-3">
            <p>Phần 3</p>
        </div>
    </div>
</div>
```
*Tác dụng:* Chia đều 3 cột trên màn hình $\ge 768\text{px}$ và căn giữa nội dung hoàn hảo nhờ `d-flex justify-content-center align-items-center`.

---

### Bước 2: Áp dụng Margin & Padding để điều chỉnh khoảng cách
```html
<div class="container my-5 py-3">
    <h3 class="text-center">Khoảng cách được điều chỉnh bằng Margin & Padding</h3>
</div>
```
*Tác dụng:* Lớp `my-5` tạo margin trên dưới 3rem, `py-3` tạo padding đệm trong 1rem giúp nội dung thông thoáng.

---

### Bước 3: Sử dụng Display Property để ẩn/hiện nội dung
```html
<div class="d-none d-md-block bg-warning text-center p-3">
    <p>Nội dung này chỉ hiển thị trên màn hình lớn hơn hoặc bằng 768px</p>
</div>
```
*Tác dụng:* Ẩn nội dung trên mobile (`d-none`) và chỉ kích hoạt hiển thị dạng block từ màn hình medium trở lên (`d-md-block`).

---

### Bước 4: Tạo Carousel (Slideshow 3 hình ảnh)
```html
<div id="myCarousel" class="carousel slide mt-5" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="image1.jpg" class="d-block w-100" alt="Hình ảnh 1">
        </div>
        <div class="carousel-item">
            <img src="image2.jpg" class="d-block w-100" alt="Hình ảnh 2">
        </div>
        <div class="carousel-item">
            <img src="image3.jpg" class="d-block w-100" alt="Hình ảnh 3">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

---

### Bước 5: Sử dụng Font Awesome
```html
<h3><i class="fas fa-home"></i> Trang chủ</h3>
<button class="btn btn-primary"><i class="fas fa-paper-plane"></i> Gửi</button>
```

---

### Bước 6: Tạo Biểu Mẫu Liên Hệ (Bootstrap Form)
```html
<form class="container mt-5">
    <div class="mb-3">
        <label for="name" class="form-label">Họ và tên</label>
        <input type="text" class="form-control" id="name" placeholder="Nhập họ và tên">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Nhập email">
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Nội dung</label>
        <textarea class="form-control" id="message" rows="4" placeholder="Nhập nội dung"></textarea>
    </div>
    <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Gửi</button>
</form>
```

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn HTML hoàn chỉnh tích hợp 6 bước thực hành
├── style.css        # Tùy biến CSS: Bo góc, hiệu ứng hover thẻ Grid, chiều cao Carousel
├── image1.jpg       # Hình ảnh minh họa slide 1
├── image2.jpg       # Hình ảnh minh họa slide 2
├── image3.jpg       # Hình ảnh minh họa slide 3
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. **Kiểm tra Bước 1 (Grid 3 cột)**: 3 khối *Phần 1*, *Phần 2*, *Phần 3* dàn đều trên Desktop, chữ và icon căn giữa hoàn hảo.
3. **Kiểm tra Bước 2 (Margin & Padding)**: Quan sát khoảng cách cách biên trên dưới thông thoáng.
4. **Kiểm tra Bước 3 (Display Property)**:
   - Trên Desktop ($\ge 768\text{px}$): Thấy thanh màu vàng cảnh báo.
   - Nhấn `F12` chuyển sang Mobile ($< 768\text{px}$): Thanh màu vàng tự động ẩn đi (`d-none`), thanh màu xanh xuất hiện thay thế.
5. **Kiểm tra Bước 4 (Carousel)**: Slideshow tự động lướt qua 3 hình ảnh, có nút bấm chuyển slide thủ công.
6. **Kiểm tra Bước 5 (Font Awesome)**: Các icon hiển thị sắc nét bên cạnh tiêu đề và nút bấm.
7. **Kiểm tra Bước 6 (Form)**: Thử điền thông tin và bấm nút *Gửi*.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-grid-flexbox-3col](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-grid-flexbox-3col)
