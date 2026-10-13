# [Bài tập] Quản lý bố cục trang với overflow và float

Dự án bài tập thực hành kết hợp các thuộc tính \loat\, \clear\, \overflow\ và \ox-sizing\ trong CSS để tạo bố cục hai cột và kiểm soát nội dung dài chống tràn.

## 📌 Nội Dung & Mục Tiêu Kỹ Thuật
1. **Tiêu đề chính**: Thẻ \<h1>\ với nội dung "Bố cục trang với float và overflow".
2. **Khối 2 cột float (\.container\)**:
   - \.left-column\: \width: 50%; float: left; background-color: lightgray; padding: 20px;\.
   - \.right-column\: \width: 50%; float: right; background-color: lightgreen; padding: 20px;\.
   - \overflow: hidden\ trên \.container\: Đóng vai trò tạo Block Formatting Context (BFC) để dọn dẹp float tự động, giúp khối cha ôm trọn 2 cột mà không bị sập chiều cao.
3. **Khối nội dung dài (\.overflow-box\)**:
   - Kích thước cố định: \width: 300px; height: 100px; background-color: lightcoral; padding: 10px;\.
   - Thuộc tính \overflow: auto;\ giúp xuất hiện thanh cuộn mượt mà khi đoạn văn bản bên trong vượt quá chiều cao 100px.
4. **Mô hình hộp (\ox-sizing: border-box\)**:
   - Đảm bảo \width: 50%\ bao gồm cả \padding: 20px\, giúp 2 cột nằm khít vừa vặn 100% trên cùng một hàng.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 chuẩn yêu cầu bài tập
├── style.css        # Định dạng CSS với float, overflow và box-sizing
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Quan sát 2 cột màu xám và xanh lá nằm ngang đều nhau 50% - 50%.
- Kéo cuộn chuột trong ô màu đỏ san hô (\.overflow-box\) để xem thanh cuộn hoạt động.
- Xem trực tiếp trên GitHub: [Overflow & Float Layout](https://github.com/VuDucDat2006/GitProject/tree/overflow-float-layout)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
