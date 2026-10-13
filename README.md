# [Thực hành] Quản lý nội dung bị tràn với Overflow

Dự án thực hành sử dụng thuộc tính \overflow\ trong CSS để kiểm soát và xử lý nội dung vượt quá kích thước của phần tử HTML.

## 📌 Nội Dung & Mục Tiêu Thực Hành
1. **Bài toán chính theo đề bài**:
   - Khối \.overflow-box\ có kích thước cố định \width: 300px; height: 100px; padding: 10px; background-color: lightgray;\.
   - Sử dụng \overflow: auto;\ để hiển thị thanh cuộn khi nội dung văn bản dài vượt quá chiều cao \100px\.
2. **Khảo sát toàn diện 4 giá trị của thuộc tính \overflow\**:
   - \overflow: visible\ (Mặc định): Nội dung tràn tự do ra ngoài khung viền.
   - \overflow: hidden\: Cắt bỏ phần nội dung bị tràn, không xuất hiện thanh cuộn.
   - \overflow: scroll\: Luôn luôn xuất hiện cả thanh cuộn ngang và dọc ngay cả khi nội dung ngắn.
   - \overflow: auto\ (Khuyên dùng): Thanh cuộn chỉ xuất hiện một cách thông minh khi nội dung thực sự bị tràn.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML thực hành
├── style.css        # Định dạng CSS với overflow: auto và bảng so sánh
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Dùng chuột kéo cuộn văn bản bên trong khối xám \.overflow-box\ (300px x 100px) để quan sát thanh cuộn dọc hoạt động mượt mà.
- Xem trực tiếp trên GitHub: [CSS Overflow Practice](https://github.com/VuDucDat2006/GitProject/tree/css-overflow-practice)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
