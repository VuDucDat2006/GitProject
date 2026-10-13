# [Bài tập] Tạo Gallery đơn giản sử dụng RWD (Responsive Web Design)

Dự án bài tập thực hành sử dụng CSS và **Media Queries** để tạo bộ sưu tập hình ảnh (Responsive Image Gallery) tự động co dãn và thay đổi số lượng cột hiển thị theo các kích thước màn hình khác nhau (Desktop, Tablet, Mobile) theo chuẩn bản mẫu CodeGym & W3Schools.

---

## 📌 1. Mục Tiêu & Yêu Cầu Bố Cục
Thiết kế trang Gallery hiển thị danh sách hình ảnh phong cảnh với các điểm ngắt (*breakpoints*) quy định bởi đề bài:
- **Màn hình lớn (> 700px)**: Hiển thị **4 ảnh trên cùng một dòng** (width: 24.99999% hoặc 25%).
- **Màn hình vừa (&le; 700px)**: Hiển thị **2 ảnh trên cùng một dòng** (width: 49.99999% hoặc 50%).
- **Màn hình nhỏ (&le; 500px)**: Hiển thị **1 ảnh trên một dòng** (width: 100%).

---

## 🏛️ 2. Kỹ Thuật CSS Trọng Tâm
1. **Mô hình hộp ox-sizing: border-box**:
   - Đảm bảo khoảng đệm ngang (padding: 0 8px) và viền (order) không làm tăng kích thước chiều ngang thực tế của phần tử, giúp các khối chia tỷ lệ phần trăm cộng lại không vượt quá 100%.
2. **Kỹ thuật dàn cột bằng loat: left & Clearfix**:
   - Các khối bao ngoài .responsive được thả nổi sang trái với loat: left.
   - Lớp .clearfix:after { content: "; display: table; clear: both; } giúp container tự động dãn chiều cao theo nội dung con, loại bỏ triệt để lỗi sụp độ cao do thuộc tính float.
3. **Hiệu ứng tương tác hiện đại**:
 - Khung thẻ div.gallery có hiệu ứng đổ bóng mượt mà và phóng to nhẹ khi di chuột (hover).
 - Tỷ lệ khung hình spect-ratio: 3 / 2 cùng object-fit: cover giúp toàn bộ ảnh luôn đồng đều và sắc nét.

---

## 🛠️ 3. Cấu Trúc Thư Mục
`plaintext
GitProject/
├── index.html # Mã nguồn HTML cấu trúc Responsive Gallery
├── style.css # Hệ thống CSS phân chia cột và Media Queries
└── README.md # Hướng dẫn chi tiết dự án và tài liệu nộp bài
`

---

## 🚀 4. Hướng Dẫn Xem & Kiểm Tra Responsive
1. Mở file index.html trực tiếp trên bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. Kiểm tra tính năng Responsive:
 - **Kéo dãn cửa sổ trình duyệt**: Quan sát số lượng ảnh trên 1 dòng tự động chuyển đổi từ 4 ảnh &rarr; 2 ảnh &rarr; 1 ảnh.
 - **Chế độ kiểm tra (F12)**: Bật *Device Toolbar* (Ctrl + Shift + M) và chọn các kích thước thử nghiệm:
 - Trên 700px: 4 ảnh / dòng
 - Từ 501px đến 700px: 2 ảnh / dòng
 - Dưới 500px: 1 ảnh / dòng
3. Xem trực tiếp trên GitHub: [Responsive Image Gallery](https://github.com/VuDucDat2006/GitProject/tree/responsive-image-gallery)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006) 
**Khóa học:** CodeGym Web Development
