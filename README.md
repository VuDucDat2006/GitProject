# [Bài tập] Xây dựng bố cục trang web với display và inline-block

Dự án bài tập thực hành áp dụng thuộc tính \display: inline-block\, \display: block\, \width\ và \max-width\ để tạo bố cục đa cột cơ bản mà không cần sử dụng float.

## 📌 Nội Dung & Mục Tiêu Kỹ Thuật
1. **Tiêu đề chính**: Thẻ \<h1>\ với nội dung "Bố cục trang web với display".
2. **Thanh điều hướng**: Thẻ \<nav>\ chứa 4 liên kết (\Trang chủ\, \Giới thiệu\, \Dịch vụ\, \Liên hệ\) sử dụng \display: inline-block\ để nhận lề \margin: 0 15px\ và nằm thẳng hàng.
3. **Bố cục 3 cột**: Thẻ \<section>\ chứa 3 khối \<div class="box">\:
   - Sử dụng \display: inline-block;\ cho phép các khối vừa xếp ngang vừa nhận được \width: 30%\ và \padding: 20px;\.
   - Kết hợp \ertical-align: top;\ và \ox-sizing: border-box;\ để đảm bảo 3 cột luôn thẳng hàng đỉnh trên và không bị tràn khung.
4. **Chân trang**: Thẻ \<footer>\ hiển thị thông tin bản quyền và tác giả.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 chuẩn yêu cầu đề bài
├── style.css        # Định dạng CSS với display: inline-block
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Quan sát thanh menu ngang và 3 khối cột màu xanh nhạt xếp đều đặn trên cùng một hàng.
- Xem trực tiếp trên GitHub: [Display Inline-Block Layout](https://github.com/VuDucDat2006/GitProject/tree/display-inline-block-layout)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
