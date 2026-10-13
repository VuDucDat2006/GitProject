# [Thực hành] Tạo bố cục hai cột bằng Float và Clear

Dự án thực hành sử dụng thuộc tính \loat\ và kỹ thuật \clear\ (Clearfix) trong CSS để xây dựng bố cục hai cột chuẩn chỉnh, ngăn ngừa lỗi sập chiều cao của phần tử cha.

## 📌 Nội Dung & Mục Tiêu Thực Hành
1. **Phân chia 2 cột**:
   - \.left-column\ (Nội dung chính): Chiếm \60%\, \loat: left;\, màu nền \lightblue\, \padding: 20px;\, \ox-sizing: border-box;\.
   - \.right-column\ (Sidebar): Chiếm \38%\, \loat: right;\, màu nền \lightgreen\, \padding: 20px;\, \ox-sizing: border-box;\.
2. **Kỹ thuật chống sập khung Clearfix**:
   - Sử dụng bộ chọn giả lập:
     \\\css
     .container::after {
         content: "";
         display: block;
         clear: both;
     }
     \\\
   - Giúp khối cha \.container\ tự động ôm trọn các phần tử con bị thả nổi (floating elements) và đẩy các khối phía dưới (như footer) xuống đúng vị trí.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 hai cột
├── style.css        # Định dạng Float, Clear và Box-sizing
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Quan sát cột trái (60%) và cột phải (38%) nằm cạnh nhau trên cùng một hàng và phần chân trang được đẩy xuống bên dưới một cách chuẩn xác.
- Xem trực tiếp trên GitHub: [Float & Clear Two Columns Layout](https://github.com/VuDucDat2006/GitProject/tree/float-clear-two-columns)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
