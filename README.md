# [Bài tập] Tạo Trang Đăng Ký Người Dùng

Dự án bài tập áp dụng kết hợp các thành phần của **Bootstrap Forms**, **Bootstrap Carousel**, **Input Groups** và **Bootstrap Grid** để xây dựng một giao diện đăng ký tài khoản người dùng chuyên nghiệp, chuẩn phong cách Auth UI quốc tế.

---

## 🎯 Mục Tiêu Bài Tập
- Luyện tập sử dụng **Bootstrap Carousel** để hiển thị hình ảnh và nội dung quảng bá các lợi ích của dịch vụ.
- Sử dụng **Bootstrap Form** để tạo form đăng ký với 4 trường thông tin bắt buộc: **Họ tên**, **Email**, **Mật khẩu**, **Xác nhận mật khẩu**.
- Ứng dụng các lớp điều khiển biểu mẫu: `form-control`, `input-group`, `input-group-text`, `btn-primary`, `form-check`.
- Tận dụng **Bootstrap Grid** (`row g-0`, `col-lg-6`) để căn chỉnh bố cục 2 cột cân đối: Carousel bên trái và Form bên phải.
- Ưu tiên sử dụng tối đa các lớp Bootstrap có sẵn, hạn chế viết CSS thủ công.

---

## 🏛️ Cấu Trúc Bố Cục Trang Web

```plaintext
Container (.container)
│
└── Card Tổng Thể (.card .rounded-4 .shadow-lg)
    └── Hàng Ngang (.row .g-0)
        │
        ├── Cột Trái (.col-lg-6): Bootstrap Carousel Lợi Ích Dịch Vụ
        │   ├── Slide 1: Bảo Mật An Toàn Tuyệt Đối (Mã hóa 256-bit, 2FA)
        │   ├── Slide 2: Đồng Bộ Siêu Tốc Đa Nền Tảng (< 0.5s)
        │   └── Slide 3: Đội Ngũ Hỗ Trợ Chuyên Nghiệp 24/7
        │
        └── Cột Phải (.col-lg-6): Form Đăng Ký Người Dùng
            ├── Họ và tên (Input-group + Icon User)
            ├── Email (Input-group + Icon Envelope)
            ├── Mật khẩu (Input-group + Icon Lock)
            ├── Xác nhận mật khẩu (Input-group + Icon Shield)
            ├── Checkbox đồng ý điều khoản dịch vụ
            └── Nút Đăng Ký Tài Khoản (btn-primary btn-lg)
```

---

## 📋 Bảng Phân Tích Kỹ Thuật Bootstrap

| Thành phần | Class Bootstrap chính | Tác dụng kỹ thuật |
| :--- | :--- | :--- |
| **Bố cục lưới Grid** | `.row .g-0 &rarr; .col-lg-6` | Chia 2 cột tỷ lệ 50:50 trên Desktop, loại bỏ khoảng cách giữa 2 cột (`g-0`) và tự xếp chồng trên Mobile |
| **Trình chiếu Carousel** | `.carousel .slide .carousel-item` | Slideshow tự động chuyển đổi slide mỗi 4 giây giới thiệu 3 lợi ích vượt trội |
| **Input Groups** | `.input-group .input-group-text` | Ghép biểu tượng Font Awesome vào đầu mỗi ô nhập liệu tạo cảm giác cao cấp |
| **Form Controls** | `.form-control .form-label` | Ô nhập dữ liệu bo tròn góc, có viền nét và phản hồi trạng thái focus xanh sáng |
| **Nút bấm Submit** | `.btn .btn-primary .btn-lg` | Nút gửi màu xanh thương hiệu, kích thước lớn dễ thao tác |
| **Xác thực Client** | `.needs-validation .was-validated` | Kiểm tra tính hợp lệ dữ liệu và so khớp mật khẩu ngay trên trình duyệt |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn giao diện đăng ký kết hợp Carousel & Form hoàn chỉnh
├── style.css        # Tùy biến CSS tối giản: Font Plus Jakarta Sans, chiều cao Carousel
├── image1.jpg       # Hình ảnh minh họa slide 1
├── image2.jpg       # Hình ảnh minh họa slide 2
├── image3.jpg       # Hình ảnh minh họa slide 3
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. **Kiểm tra Carousel**: Cột bên trái tự động chuyển đổi giữa 3 slide giới thiệu lợi ích dịch vụ với hiệu ứng phủ tối (Overlay) và text trắng nổi bật.
3. **Kiểm tra Form Đăng Ký**:
   - Các trường Họ tên, Email, Mật khẩu, Xác nhận mật khẩu đều có biểu tượng icon trực quan ở đầu ô (`input-group-text`).
   - Thử bấm **Đăng Ký Tài Khoản** khi chưa điền thông tin $\rightarrow$ Form báo lỗi viền đỏ.
   - Nhập 2 mật khẩu khác nhau $\rightarrow$ Form báo lỗi *Mật khẩu không khớp!*.
   - Nhập đầy đủ thông tin hợp lệ $\rightarrow$ Xuất hiện thông báo xanh **🎉 Chúc mừng! Bạn đã đăng ký tài khoản thành công**.
4. **Kiểm tra Mobile**: Bấm `F12` $\rightarrow$ `Ctrl + Shift + M` để thấy giao diện co giãn Responsive 100%, Carousel và Form tự xếp dọc ngăn nắp.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-user-registration](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-user-registration)
