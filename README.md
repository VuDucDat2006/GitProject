# [Bài tập] Thiết kế Trang Giới Thiệu Sản Phẩm (Apple iPhone Product Page Showcase)

Dự án mô phỏng trang giới thiệu sản phẩm cao cấp theo phong cách chính hãng của **Apple iPhone 16 Pro**, xây dựng bằng **Bootstrap 5.3.3**, **Font Awesome 6.5.2** và tối giản hóa CSS tùy biến theo đúng yêu cầu bài tập của CodeGym.

---

## 🎯 Mục Tiêu Bài Tập
- Luyện tập việc sử dụng các thuộc tính **display** (`d-flex`, `d-none`, `d-md-inline`, `d-inline-block`).
- Áp dụng **margin** và **padding** hợp lý (`py-5`, `my-4`, `px-4`, `p-md-5`, `mb-3`, `mx-auto`) để căn chỉnh khoảng cách thoáng đãng theo phong cách Apple.
- Sử dụng **Flexbox** và các thuộc tính `justify-content` (`justify-content-center`, `justify-content-between`, `justify-content-around`), `align-items` (`align-items-center`) để bố trí nội dung linh hoạt.
- Tận dụng hệ thống icon công nghệ từ **Font Awesome 6**.
- Hạn chế tối đa việc viết thêm CSS mới, ưu tiên tận dụng các utility classes có sẵn của **Bootstrap 5**.

---

## 🚀 Các Thành Phần Giao Diện Chính

1. **Apple Global Navigation (Thanh điều hướng toàn cầu)**:
   - Sử dụng `.navbar-expand-lg`, `.bg-dark`, `.bg-opacity-75`, `.sticky-top` kết hợp `.backdrop-blur`.
   - Logo quả táo Apple `<i class="fab fa-apple"></i>`, danh mục sản phẩm (Mac, iPad, iPhone, Watch, AirPods...) và icon tìm kiếm/giỏ hàng.

2. **Product Sub-Navigation Ribbon (Thanh điều hướng sản phẩm)**:
   - Định dạng `sticky-top`, sử dụng `d-flex justify-content-between align-items-center`.
   - Chứa tên sản phẩm `iPhone 16 Pro`, liên kết nhanh đến các section và nút CTA **Mua ngay** `.btn-primary.rounded-pill`.

3. **Hero Section (Giới thiệu iPhone 16 Pro)**:
   - Sử dụng Display utilities, Typography lớn (`.display-3`), căn giữa hoàn toàn bằng Flexbox và Margin tự động (`.mx-auto`).
   - Hình ảnh render sắc nét của iPhone 16 Pro Titanium Cấp 5 với cụm camera 3 mắt và viền màn hình siêu mỏng.
   - Nhóm nút kêu gọi hành động (Call To Action): *Mua ngay* và *Tìm hiểu thêm*.

4. **Bento Grid Highlights (Điểm nhấn công nghệ đột phá)**:
   - Áp dụng **Bootstrap Grid System** linh hoạt với các tỷ lệ kết hợp (`col-lg-8` và `col-lg-4`) theo xu hướng Bento Box của Apple:
     - **Điều Khiển Camera Mới**: Phím cảm ứng lực mới, camera Fusion 48MP, 4K 120 fps Dolby Vision.
     - **Chip A18 Pro**: GPU 6 lõi, Ray Tracing phần cứng, hiệu năng vượt trội.
     - **Khung Titan Cấp 5**: Vật liệu hàng không vũ trụ siêu nhẹ, bền bỉ.
     - **Pin Vượt Trội**: Lên đến 33 giờ xem video, sạc nhanh không dây MagSafe.

5. **Comparison Lineup (So sánh các dòng iPhone)**:
   - Bố cục 3 cột cân đối (`col-md-4`) hiển thị:
     - **iPhone 16 Pro Max** (6.9 inch)
     - **iPhone 16 Pro** (6.3 inch - Card nổi bật với viền xanh công nghệ và huy hiệu `badge`)
     - **iPhone 16** (6.1 inch tiêu chuẩn)

6. **Apple Store Services & Perks**:
   - Sử dụng `d-flex flex-wrap justify-content-around align-items-center gap-4` để phân bổ đều các tiện ích: Giao hàng miễn phí, Thu cũ đổi mới, Trả góp 0%, Tư vấn trực tuyến 24/7.

7. **Bảng Phân Tích Kỹ Thuật**:
   - Bảng tổng hợp rõ ràng các class Bootstrap và mục đích kỹ thuật đã được vận dụng trong bài học.

8. **Footer Chuẩn Apple**:
   - Thông tin pháp lý, bản quyền, ghi chú kích thước màn hình và thông tin sinh viên thực hiện.

---

## 📋 Bảng Phân Tích Kỹ Thuật Bootstrap Áp Dụng

| Nhóm thuộc tính | Lớp Bootstrap sử dụng | Mục đích kỹ thuật |
| :--- | :--- | :--- |
| **Grid System** | `.container`, `.row`, `.col-lg-8`, `.col-lg-4`, `.col-md-4`, `.g-4` | Chia layout Bento và so sánh 3 cột; co giãn responsive từ Mobile lên Desktop |
| **Display Utilities** | `.d-flex`, `.d-none`, `.d-md-inline`, `.d-inline-block` | Quản lý hiển thị linh hoạt theo breakpoint màn hình |
| **Flexbox & Justify** | `.justify-content-center`, `.justify-content-between`, `.justify-content-around`, `.align-items-center`, `.gap-3` | Căn giữa nút CTA, dàn đều thanh điều hướng và phân bổ cân đối dịch vụ |
| **Spacing (Margin/Padding)**| `.py-5`, `.my-4`, `.px-4`, `.p-md-5`, `.mb-3`, `.mt-2`, `.mx-auto` | Tạo khoảng cách nhịp điệu thoáng đãng, sang trọng |
| **Colors & Borders** | `.bg-black`, `.bg-dark`, `.text-white`, `.border-secondary`, `.rounded-4`, `.rounded-pill` | Bảng màu tối Dark Theme cao cấp đặc trưng của các dòng Pro |
| **Icons** | Font Awesome 6 (`fab fa-apple`, `fas fa-camera`, `fas fa-microchip`, `fas fa-battery-full`...) | Tăng tính trực quan và sinh động cho sản phẩm |

---

## 🛠️ Cấu Trúc Thư Mục Dự Án

```
GitProject/
├── index.html              # Trang chủ giới thiệu sản phẩm Apple iPhone 16 Pro
├── product_page.html       # Bản sao dự phòng cho cấu trúc trang sản phẩm
├── style.css               # CSS tối giản (Hiệu ứng kính mờ, typography, hover)
├── product_page.css        # Bản CSS đồng bộ
├── images/
│   └── iphone16pro.png     # Ảnh mô phỏng iPhone 16 Pro Titanium
└── README.md               # Tài liệu thuyết minh bài tập
```

---

## 💻 Cách Khởi Chạy & Kiểm Tra
1. Mở trực tiếp tệp `index.html` trong trình duyệt web (Google Chrome, Microsoft Edge, Firefox).
2. Nhấn phím `F12` và chọn chế độ **Device Toolbar** để kiểm tra tính responsive trên các kích thước màn hình: Mobile (375px), Tablet (768px), Desktop (1200px+).

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
