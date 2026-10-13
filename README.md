# [Bài tập] Tạo giao diện giản lược của trang chủ (Simplified Homepage Layout)

Dự án bài tập thực hành xây dựng giao diện trang chủ cơ bản kết hợp thuộc tính \position: fixed\ cho Header, phân lớp hiển thị \z-index\ và hệ thống bố cục đa cột bằng \CSS Flexbox\.

## 📌 Nội Dung & Mục Tiêu Kỹ Thuật
1. **Header cố định (\position: fixed\)**:
   - Sử dụng \position: fixed; top: 0; left: 0; width: 100%;\.
   - Kết hợp \z-index: 1000;\ để đảm bảo thanh điều hướng luôn nổi trên các khối nội dung khi cuộn trang.
   - Thêm \ody { padding-top: 70px; }\ để bù đắp khoảng trống do Header bị đưa ra ngoài luồng tài liệu (*normal flow*).
2. **Bố cục 3 cột bằng Flexbox (\.page-container\)**:
   - \display: flex; gap: 20px;\ kết nối trực quan giữa Sidebar trái, Nội dung chính và Sidebar phải.
   - \.left-sidebar\ và \.right-sidebar\: Chiều rộng cố định \220px\ kết hợp \lex-shrink: 0;\ ngăn không bị co lại.
   - \.main-content\: Tự động co giãn chiếm toàn bộ phần diện tích còn lại bằng \lex-grow: 1;\.
3. **Trải nghiệm cuộn trang**:
   - Thiết lập \ody { min-height: 1500px; }\ và chèn nội dung phong phú để dễ dàng kiểm tra hiệu ứng Header cố định.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 ngữ nghĩa (<header>, <aside>, <main>)
├── style.css        # Định dạng giao diện với Fixed Header và Flexbox
└── README.md        # Hướng dẫn chi tiết và phân tích kiến trúc bố cục
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Cuộn chuột lên xuống để quan sát thanh Header luôn cố định ở đầu trang, trong khi 3 cột nội dung cuộn bên dưới mượt mà.
- Xem trực tiếp trên GitHub: [Simplified Homepage Layout](https://github.com/VuDucDat2006/GitProject/tree/simplified-homepage-layout)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
