# [Thực hành] Tạo menu ngang (Horizontal Dropdown Menu)

Dự án thực hành xây dựng trình đơn hàng ngang hai cấp có khả năng buông xuống (dropdown) khi rê chuột qua các mục chọn bằng HTML và CSS thuần.

## 📌 Nội Dung & Yêu Cầu Kỹ Thuật
1. **Cấu trúc HTML**:
   - Sử dụng thẻ phân vùng \<div id="menu">\ chứa danh sách hai cấp lồng nhau (\ul\, \li\, \\).
2. **Kỹ thuật định vị Dropdown ngang**:
   - \#menu ul li\: Thiết lập \loat: left;\ để các mục cấp 1 nằm trên cùng một hàng ngang, kết hợp \position: relative;\ làm mốc toạ độ cho menu con.
   - \#menu ul li a\: Thiết lập kích thước cố định (\width: 150px; height: 42px; line-height: 42px;\), căn giữa (\	ext-align: center;\), màu nền đen và màu chữ trắng.
   - \#menu ul li a:hover\: Chuyển màu nền sang màu đỏ khi con trỏ chuột đưa qua theo đúng yêu cầu đề bài.
   - \#menu ul ul\: Sử dụng \position: absolute; top: 42px; left: 0;\ để menu con buông xuống ngay bên dưới mục cha.
   - \#menu ul ul li\: Thiết lập \loat: none;\ để các mục con xếp theo chiều dọc.
   - Ẩn menu con bằng \isibility: hidden;\ và kích hoạt hiển thị khi di chuột bằng bộ chọn \#menu ul li:hover > ul { visibility: visible; }\.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Mã nguồn HTML5 và CSS định dạng menu ngang
└── README.md        # Hướng dẫn chi tiết và giải thích kỹ thuật
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Di chuột qua mục **Khóa học** hoặc **Dịch vụ** để thấy menu con buông xuống và chuyển sang màu đỏ.
- Xem trực tiếp trên GitHub: [Horizontal Dropdown Menu](https://github.com/VuDucDat2006/GitProject/tree/horizontal-dropdown-menu)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
