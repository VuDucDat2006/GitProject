# [Thực hành] Tạo bố cục các Fixed Header và Fixed Footer

Dự án mẫu thực hành kỹ thuật cố định thanh điều hướng (\Fixed Header / Navbar\) và thanh chân trang (\Fixed Footer\) sử dụng thuộc tính \position: fixed\ trong CSS.

## 📌 Nội Dung & Mục Tiêu Thực Hành
1. **Fixed Header (\.navbar\)**:
   - Sử dụng \position: fixed;\ kết hợp \	op: 0; left: 0;\ và \width: 100%;\.
   - Giữ thanh menu luôn bám chặt mép trên cùng của màn hình khi người dùng cuộn trang.
   - Thêm hiệu ứng di chuột (\:hover\) và trạng thái kích hoạt (\.active\) đẹp mắt.
2. **Fixed Footer (\.footer\)**:
   - Sử dụng \position: fixed;\ kết hợp \ottom: 0; left: 0;\ và \width: 100%;\.
   - Giữ thông tin bản quyền và trạng thái cố định ở mép dưới cùng màn hình.
3. **Quản lý lề (\margin-top\ & \margin-bottom\)**:
   - Khối nội dung chính (\.main\) được thiết lập \margin-top: 55px\ và \margin-bottom: 50px\ để không bị các thanh fixed che khuất nội dung.
   - Chiều cao lớn (\min-height: 1600px\) để tạo thanh cuộn kiểm tra hiệu ứng thực tế.
4. **Lớp hiển thị (\z-index\)**:
   - Thiết lập \z-index: 1000\ cho header và footer để đảm bảo luôn hiển thị trên nội dung cuộn bên dưới.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Mã nguồn HTML5 và CSS định dạng Fixed Layout
└── README.md        # Hướng dẫn chi tiết và giải thích thuộc tính
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt nào.
- Cuộn chuột lên xuống để quan sát thanh menu ở trên và footer ở dưới luôn giữ nguyên vị trí cố định.
- Xem trực tiếp trên GitHub: [Fixed Header & Footer Layout](https://github.com/VuDucDat2006/GitProject/tree/fixed-header-footer-layout)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
