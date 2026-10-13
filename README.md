# [Thực hành] Tạo thanh điều hướng sticky khi cuộn trang (Sticky Navigation)

Dự án thực hành sử dụng thuộc tính \position: sticky\ trong CSS để tạo thanh điều hướng tự động bám chặt (dính) vào đỉnh màn hình khi người dùng cuộn trang.

## 📌 Nội Dung & Mục Tiêu Thực Hành
1. **Thuộc tính \position: sticky\**:
   - Thiết lập trên \.sticky-menu\: \position: sticky; top: 0; z-index: 1000;\.
   - Khác biệt so với \position: fixed\: Phần tử vẫn nằm trong luồng tài liệu thông thường cho đến khi người dùng cuộn đến vị trí quy định (\	op: 0\), nó sẽ tự động dính chặt ở mép trên cùng.
2. **Cấu trúc danh sách điều hướng**:
   - Sử dụng CSS Flexbox (\display: flex; justify-content: center;\) để canh giữa các mục menu \Trang chủ\, \Giới thiệu\, \Dịch vụ\, \Liên hệ\.
   - Hiệu ứng đổi màu nền \#575757\ và bo góc khi rê chuột (\:hover\).
3. **Các phân đoạn nội dung (\section\)**:
   - Mỗi section có \height: 100vh\ (toàn màn hình) với các màu nền khác biệt (\#f4f4f4\, \#ddd\, \#bbb\, \#999\) để quan sát rõ hiệu ứng bám dính khi cuộn qua từng phần.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 của trang web
├── style.css        # Định dạng CSS với position: sticky
└── README.md        # Hướng dẫn chi tiết và giải thích kỹ thuật
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Cuộn chuột từ trên xuống dưới để thấy thanh menu dính chặt ở đỉnh trình duyệt khi lướt qua các section.
- Xem trực tiếp trên GitHub: [Sticky Navigation Practice](https://github.com/VuDucDat2006/GitProject/tree/sticky-navbar-scroll)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
