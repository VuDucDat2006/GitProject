# [Thực hành] Tạo thanh điều hướng responsive (Responsive Navbar)

Dự án thực hành sử dụng HTML5, CSS3 (Flexbox & Media Queries) kết hợp JavaScript DOM Event để tạo thanh điều hướng Responsive hiển thị tối ưu trên cả máy tính (Desktop) và điện thoại di động (Mobile).

## 📌 Nội Dung & Cơ Chế Hoạt Động
1. **Trên màn hình Desktop (rộng > 768px)**:
   - Áp dụng CSS Flexbox: \display: flex; justify-content: space-between; align-items: center;\.
   - Các mục menu nằm ngang thẳng hàng.
   - Biểu tượng Hamburger \☰\ được ẩn đi bằng \display: none;\.
2. **Trên màn hình Mobile (rộng <= 768px)**:
   - Sử dụng Media Query \@media (max-width: 768px)\.
   - Menu \.nav-links\ mặc định ẩn đi bằng \display: none;\.
   - Biểu tượng \.menu-icon\ xuất hiện (\display: block;\).
3. **Tương tác JavaScript**:
   - Lắng nghe sự kiện click vào \.menu-icon\:
     \\\javascript
     menuIcon.addEventListener("click", function () {
         navLinks.classList.toggle("active");
     });
     \\\
   - Khi có class \.active\, menu sẽ mở ra dưới dạng cột dọc (\display: flex; flex-direction: column;\).

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 gồm logo, nav-links và menu-icon
├── style.css        # Định dạng Flexbox và Media Query cho mobile
├── script.js        # JavaScript xử lý toggle class active
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Trên màn hình máy tính: Menu hiển thị ngang.
- Bấm phím \F12\ hoặc co nhỏ chiều rộng cửa sổ trình duyệt xuống dưới 768px: Menu sẽ ẩn đi và hiển thị biểu tượng \☰\. Nhấn vào \☰\ để mở/đóng menu.
- Xem trực tiếp trên GitHub: [Responsive Navbar](https://github.com/VuDucDat2006/GitProject/tree/responsive-navbar-hamburger)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
