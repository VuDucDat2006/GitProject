# [Bài tập] Tạo Landing Page với Bootstrap và Hình Ảnh

Dự án bài tập thực hành áp dụng toàn diện **Bootstrap Containers**, **Grid System**, **Bootstrap Buttons** và **Bootstrap Images** (`.img-fluid`) để xây dựng một Landing Page hiện đại, chuẩn thẩm mỹ UI/UX cao cấp và tương thích Responsive mượt mà trên mọi thiết bị.

---

## 🎯 Mục Tiêu Bài Tập
- Luyện tập sử dụng **Bootstrap Containers** và **Grid System** để bố trí các phân vùng trang web cân đối, hài hòa.
- Ứng dụng **Bootstrap Images**, đặc biệt là lớp `.img-fluid` (`max-width: 100%; height: auto;`), để hình ảnh co giãn linh hoạt và không bị tràn khung trên thiết bị di động.
- Sử dụng **Bootstrap Buttons** (`btn-primary`, `btn-lg`, `btn-light`, `rounded-pill`) để tạo các nút kêu gọi hành động (Call to Action - CTA) nổi bật.
- Nắm vững sự thay đổi quan trọng giữa các phiên bản Bootstrap: **Bootstrap 5 đã loại bỏ hoàn toàn component Jumbotron**; thay vào đó, khu vực Banner/Hero được tự xây dựng bằng các lớp tiện ích (`container`, `py-5`, `bg-*`, `text-center`, flex utilities) kết hợp CSS tùy biến.

---

## 🏛️ Cấu Trúc 4 Phân Vùng Cốt Lõi

```plaintext
Landing Page
│
├── 1. Banner / Hero (Tự xây dựng theo chuẩn Bootstrap 5, không dùng .jumbotron)
│   ├── Tiêu đề lớn & đoạn giới thiệu ấn tượng
│   ├── Cặp nút CTA: "Đăng Ký Ngay" & "Xem Thêm"
│   └── Hình ảnh công nghệ nổi bật (img-fluid rounded-4 shadow)
│
├── 2. Giới thiệu (About Showcase)
│   ├── Row 2 cột: Hình ảnh sản phẩm (img-fluid) + Nội dung mô tả tính năng
│   └── Huy hiệu thống kê nổi bật (Floating Stat Badge)
│
├── 3. Tính năng (Features)
│   ├── Row 4 cột trên Desktop (col-lg-3), 2 cột Tablet (col-md-6), 1 cột Mobile (col-12)
│   └── 4 Card tính năng: Tốc độ siêu tốc ⚡, Bảo mật 🛡️, Responsive 📱, Hỗ trợ 24/7 🎧
│
└── 4. Kêu Gọi Hành Động (CTA Section)
    └── Khối biểu ngữ kêu gọi đăng ký dùng thử 30 ngày với nút bấm lớn
```

---

## 📋 Bảng Phân Tích Kỹ Thuật Bootstrap 5 & Images

| Phân vùng | Class Bootstrap áp dụng | Tác dụng kỹ thuật |
| :--- | :--- | :--- |
| **Hero / Banner** | `.hero-section .container .py-5` | Khu vực đầu trang tự dựng thay thế cho Jumbotron cũ, có gradient và họa tiết |
| **Ảnh Banner** | `.img-fluid .rounded-4 .shadow` | Hình ảnh tự động co giãn 100% độ rộng cột, bo tròn 4 góc 16px và đổ bóng |
| **Khối Giới thiệu** | `.row .align-items-center &rarr; .col-lg-6` | Căn giữa theo trục dọc 2 cột ảnh và chữ trên máy tính, tự xếp chồng trên điện thoại |
| **Lưới Tính năng** | `.row &rarr; .col-12 .col-md-6 .col-lg-3` | Chia 4 cột cân đối ($12/4 = 3$) trên Desktop, 2 cột trên Tablet và 1 cột trên Mobile |
| **Thẻ Tính năng** | `.card .h-100 .p-4 .border-0 .shadow-sm` | Khối thẻ tính năng có chiều cao bằng nhau 100%, hiệu ứng hover bay nhẹ |
| **Nút bấm CTA** | `.btn .btn-primary .btn-lg, .btn-light` | Nút bấm nổi bật kích thước lớn, bo tròn mềm mại và chuyển màu khi rê chuột |
| **Chân trang** | `.bg-dark .text-white .py-4` | Phần chân trang màu tối hiển thị bản quyền và sinh viên thực hiện |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn Landing Page hoàn chỉnh chuẩn Bootstrap 5.3
├── style.css        # Tùy biến thẩm mỹ: Google Font Plus Jakarta Sans, Hero Radial Gradient, Card Hover
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Cốc Cốc).
2. **Kiểm tra trên Desktop (> 992px)**:
   - Thanh Navbar cố định trên cùng (`sticky-top`) với nút đăng ký bo tròn viền.
   - Khu vực Hero Banner hiển thị 2 cột cân đối: chữ bên trái và hình ảnh sắc nét bên phải.
   - Khối Giới thiệu ảnh và nội dung song song.
   - Khối Tính năng dàn trải đều 4 cột trên 1 hàng ngang, thẻ card có hiệu ứng bay nhẹ khi rê chuột.
   - Khối CTA cuối trang nổi bật với nút bấm lớn.
3. **Kiểm tra trên Mobile (< 768px)**:
   - Nhấn `F12` $\rightarrow$ Nhấn tổ hợp `Ctrl + Shift + M` để bật chế độ giả lập điện thoại.
   - Hình ảnh tự động co nhỏ vừa vặn với chiều rộng màn hình nhờ thuộc tính `.img-fluid`, không gây thanh cuộn ngang vỡ trang.
   - Tất cả các khối tự động chuyển thành 1 cột dọc thẳng đứng dễ đọc và thao tác ngón tay.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-landing-page-images](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-landing-page-images)
