# [Thực hành] Xây dựng trang web Landing Page Responsive

Dự án thực hành áp dụng toàn diện HTML5 và CSS3 (**Flexbox & Media Queries**) để xây dựng trang đích (Landing Page) chuẩn Responsive, hiển thị trực quan và tối ưu trải nghiệm người dùng trên cả màn hình máy tính (Desktop) và điện thoại di động (Mobile).

## 📌 Các Phân Vùng Chức Năng Bố Cục
1. **Header (\.header\)**: Gồm Logo thương hiệu \MyBrand\ và menu điều hướng ngang (\Trang chủ\, \Dịch vụ\, \Đánh giá\, \Liên hệ\).
2. **Hero Section (\.hero\)**: Khu vực biểu ngữ chính chào mừng với tiêu đề lớn, thông điệp kêu gọi hành động (Call To Action - CTA) và nút bấm \.btn\.
3. **Services Section (\.services\)**: Giới thiệu 3 dịch vụ chính (\Thiết kế web\, \Phát triển phần mềm\, \Marketing số\) sử dụng Flexbox linh hoạt (\lex-wrap: wrap; justify-content: space-around;\).
4. **Testimonials Section (\.testimonials\)**: Khu vực đánh giá từ khách hàng với các nhận xét tích cực dạng thẻ card.
5. **Footer (\.footer\)**: Chân trang hiển thị thông tin bản quyền và tác giả.

## 📱 Cơ Chế Responsive Bằng Media Queries
- **Trên Desktop (rộng > 768px)**:
  - Header hiển thị menu ngang đầy đủ.
  - Các khối dịch vụ dàn đều trên cùng một hàng ngang (\lex: 1; min-width: 250px;\).
- **Trên Mobile (rộng <= 768px)**:
  - \.nav ul\ được ẩn đi để không vỡ thanh header.
  - \.service-container\ tự động chuyển sang xếp dọc (\lex-direction: column;\) và mỗi khối dịch vụ chiếm trọn \width: 100%;\.
  - Cắt giảm khoảng đệm \padding\ phù hợp, loại bỏ hiện tượng tràn ngang màn hình.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 Landing Page
├── style.css        # Hệ thống CSS Flexbox và Media Queries
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Thử co nhỏ cửa sổ trình duyệt hoặc bật chế độ kiểm tra thiết bị di động (\F12\ -> Mobile View) để quan sát giao diện tự động thích ứng mượt mà.
- Xem trực tiếp trên GitHub: [Responsive Landing Page](https://github.com/VuDucDat2006/GitProject/tree/responsive-landing-page)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
