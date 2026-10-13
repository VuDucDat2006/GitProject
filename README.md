# [Bài tập] Tạo Trang Web Tĩnh Giới Thiệu Về Sách (Book Landing Page)

## 📌 Thông tin bài tập
- **Học viên thực hiện:** Vũ Đức Đạt
- **GitHub:** [VuDucDat2006](https://github.com/VuDucDat2006)
- **Repository:** [GitProject](https://github.com/VuDucDat2006/GitProject)
- **Nhánh (Branch):** `bootstrap-book-landing-page`
- **Khóa học:** Web Development Foundation - CodeGym
- **Mã nguồn tham khảo:** [hoanv7169/bootstrap-demo](https://github.com/hoanv7169/bootstrap-demo)

---

## 🎯 Mục tiêu & Yêu cầu đề bài

Xây dựng trang web tĩnh giới thiệu về sách chuyên nghiệp, hiện đại, tương thích hoàn hảo trên các kích thước màn hình (Responsive), bao gồm đầy đủ **7 phần** theo yêu cầu:

1. **Header, Book Overview:** Thanh điều hướng cố định, nhận diện thương hiệu, thông tin cuốn sách, điểm đánh giá và nút kêu gọi hành động (CTA).
2. **Author:** Giới thiệu chân dung tác giả, tiểu sử, thành tựu và câu trích dẫn truyền cảm hứng.
3. **Features:** Những đặc điểm nổi bật tạo nên giá trị cuốn sách cùng 4 khối số liệu thống kê ấn tượng (Bản bán ra, tỷ lệ hài lòng, quốc gia xuất bản, điểm đánh giá).
4. **Prices:** Bảng giá các ấn bản sách (E-Book, Bìa mềm Paperback, Bìa cứng đặc biệt Hardcover).
5. **Download:** Khu vực tải ứng dụng đọc sách và liên kết tải 3 chương đọc thử miễn phí (PDF).
6. **Reader’s Say:** Ý kiến nhận xét từ độc giả và chuyên gia kết hợp Bootstrap Carousel trượt tự động.
7. **Footer:** Thông tin về thương hiệu xuất bản, form đăng ký nhận bản tin Newsletter và liên kết mạng xã hội.

---

## 📁 Cấu trúc mã nguồn dự án

```text
GitProject/
├── index.html                   # Giao diện chính đầy đủ 7 thành phần của Landing Page
├── css/                         # Thư mục chứa stylesheet
│   ├── style.css                # CSS tùy biến giao diện chính (Màu sắc, Typography, Card, 3D Book)
│   └── mobile.css               # Media Queries tối ưu Responsive cho Mobile & Tablet
├── README.md                    # Tài liệu báo cáo và hướng dẫn chi tiết
└── (style.css & mobile.css)     # Bản sao dự phòng tại thư mục gốc
```

---

## 🚀 Chi tiết triển khai 7 thành phần giao diện

### 1. Header, Book Overview (`#home` & `#overview`)
- **Navbar:**
  - Sử dụng `.navbar .navbar-expand-lg .navbar-dark` của Bootstrap.
  - Logo thương hiệu với icon sách `fas fa-book-reader`.
  - Hệ thống menu gồm 7 liên kết điều hướng mượt mà (Smooth Scrolling): *HOME, AUTHOR, FEATURES, PRICES, DOWNLOAD, READER’S SAY, CONTACT*.
  - Nút hamburger toggler hiển thị trực quan trên thiết bị di động.
- **Book Overview (Hero Banner):**
  - Nền chuyển sắc ấm áp đặc trưng: `linear-gradient(135deg, #dd2476, #ff512f)`.
  - Cột trái: Tên tác giả, Tiêu đề lớn `EXCITING ADVENTURE`, mô tả ngắn gọn, xếp hạng 5 sao và 2 nút CTA ("Mua ngay chỉ $5.99", "Đọc thử miễn phí").
  - Cột phải: Mô hình bìa sách 3D (3D Mockup Card) đổ bóng chân thực (`perspective: 1000px`, `transform: rotateY(-18deg)`).

### 2. Author Section (`#author`)
- **Cột ảnh:** Chân dung tác giả chất lượng cao, bo góc mềm mại kèm huy hiệu nổi bật `15+ Năm nghiên cứu & diễn thuyết`.
- **Cột thông tin (Floating Panel):**
  - Thẻ thông tin nổi trên nền trắng với bóng đổ `box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12)`.
  - Tên tác giả `David Smith`, chức danh, đoạn văn tiểu sử giàu sức thuyết phục.
  - Khối trích dẫn (`author-quote`) có dải màu phân tách và các liên kết mạng xã hội của tác giả.

### 3. Features Section (`#features`)
- **Cover Banner:** Nền ảnh kết hợp lớp phủ mờ tối `rgba(15, 23, 42, 0.82)`.
- **4 Thẻ số liệu thống kê (Floating Rectangles):**
  - Được xếp nổi bật đè lên ranh giới giữa 2 section (`margin-top: -65px`).
  - Đổ bóng màu đỏ cam ấm áp: `box-shadow: 0 15px 35px rgba(221, 36, 118, 0.18)`.
  - `250k+` Bản Đã Bán Ra, `98.6%` Độc Giả Hài Lòng, `28+` Quốc Gia, `4.9★` Đánh Giá.
- **3 Hộp tính năng cốt lõi:** Tư Duy Đột Phá, Kế Hoạch 30 Ngày, Hành Động Quyết Đoán.

### 4. Prices Section (`#prices`)
- Hệ thống 3 thẻ giá (Pricing Cards) được thiết kế vòm tròn cong đặc trưng:
  1. **PDF / E-Book ($5.99):** Tải đọc ngay, cập nhật trọn đời.
  2. **Bìa Mềm Paperback ($14.99 - Bán Chạy Nhất):** Viền đỏ nổi bật, huy hiệu `Phổ Biến Nhất`, tặng Bookmark độc quyền.
  3. **Bìa Cứng Đặc Biệt ($29.99):** Chữ ký tác giả, hộp quà cao cấp, tặng kèm Audio Book.
- Nút bấm bo tròn `primary-btn` đồng bộ và có hiệu ứng hover nâng thẻ.

### 5. Download Section (`#download`)
- Nền gradient rực rỡ thu hút thị giác.
- 2 Khối nền tảng tải ứng dụng:
  - **Trên Máy Tính (Desktop):** Đọc trực tiếp trên Web hoặc tải file PDF.
  - **Trên Di Động (Mobile):** Ứng dụng đọc sách trên Apple App Store & Google Play.
- Nút CTA lớn: *Tải 3 Chương Đọc Thử Miễn Phí (PDF)*.

### 6. Reader’s Say Section (`#readers-say`)
- Trình bày ý kiến đánh giá từ các nhà quản lý và độc giả:
  - Thẻ 1: Nguyễn Hoàng Nam (CEO TechX Innovation) - Đánh giá 5 sao.
  - Thẻ 2: **Bootstrap Carousel tích hợp** luân chuyển giữa Trần Mai Linh (Content Creator) và Lê Quang Huy (Founder EduPlus).
  - Thẻ 3: Phạm Thùy Dung (Giám đốc Nhân sự VinaGroup) - Đánh giá 5 sao.
- Ảnh đại diện dạng tròn mềm mại với viền hoa văn sắc nét (`border-radius: 50%`).

### 7. Footer Section (`#footer`)
- Nền đen than sang trọng (`rgba(0, 0, 0, 0.88)`):
  - **Cột 1 (About Us):** Sứ mệnh lan tỏa tri thức của AlphaBooks và dòng bản quyền học viên.
  - **Cột 2 (Newsletter):** Form đăng ký email có nút mũi tên nền gradient tương tác.
  - **Cột 3 (Follow Us):** Hệ thống icon mạng xã hội tròn (Facebook, Instagram, Twitter, YouTube) có hiệu ứng hover nâng biểu tượng.
- Dòng chân trang ghi rõ:
  `Copyright ©2026 All rights reserved • Sinh viên thực hiện: Vũ Đức Đạt (VuDucDat2006) • CodeGym`

---

## 📱 Khả năng tương thích Responsive

Trang web được tối ưu tỉ mỉ trên mọi độ phân giải màn hình:
- **Desktop (>= 992px):** Bố cục đa cột rộng rãi, panel thông tin tác giả nổi đè nhẹ lên ảnh, thanh điều hướng trải ngang.
- **Tablet (768px - 991px):** Menu co lại thành nút hamburger, các thẻ chuyển sang dạng 2 cột cân xứng.
- **Mobile (< 576px):** Tự động xếp chồng dọc (stack) hoàn hảo, kích thước chữ co giãn tỉ lệ, nút bấm chiếm trọn chiều ngang giúp thao tác chạm dễ dàng.

---

## 🔗 Liên kết nộp bài tập
- **Repository:** `https://github.com/VuDucDat2006/GitProject`
- **Nhánh bài tập:** `bootstrap-book-landing-page`
- **Link nộp bài trực tiếp:** `https://github.com/VuDucDat2006/GitProject/tree/bootstrap-book-landing-page`
