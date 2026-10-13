# [Thực hành] CSS | grid-template-columns Property

Dự án thực hành chuyên sâu về thuộc tính grid-template-columns trong **CSS Grid Layout** nhằm xác định số lượng và kích thước của các cột trong lưới giao diện.

---

## 📌 1. Giới Thiệu Cú Pháp & Giá Trị
`css
grid-template-columns: none | auto | max-content | min-content | length | initial | inherit;
`

### Các Giá Trị Trọng Tâm
- **1fr, 2fr, ... (Fractional Unit)**: Phân chia không gian còn lại theo tỉ lệ phân số.
- **length (px, rem, %, em)**: Kích thước chiều rộng tuyệt đối hoặc tương đối.
- **uto**: Trình duyệt tự động tính toán kích thước dựa vào nội dung và không gian khả dụng.
- **min-content**: Kích thước nhỏ nhất cần thiết để nội dung hiển thị mà không bị tràn (bó theo từ dài nhất).
- **max-content**: Kích thước lớn nhất cần thiết để nội dung không bị xuống dòng.
- **epeat(n, size)**: Cú pháp lặp lại *n* lần kích thước *size*.
- **minmax(min, max)**: Đặt kích thước tối thiểu và tối đa cho cột.

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### Ví dụ 1: Tạo 3 cột có kích thước bằng nhau
- **CSS**:
  `css
  .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
  }
  .grid-container div {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
  }
  `
- **Kết quả**: 6 phần tử tự động xếp thành 2 hàng, mỗi hàng 3 cột bằng nhau (mỗi cột chiếm 33.33%).

### Ví dụ 2: Tạo các cột có kích thước khác nhau (Cố định & Co giãn)
- **CSS**:
  `css
  .grid-container {
      display: grid;
      grid-template-columns: 100px 200px 1fr;
      gap: 10px;
  }
  .grid-container div {
      background-color: lightgreen;
      padding: 20px;
      text-align: center;
  }
  `
- **Kết quả**: Cột 1 cố định 100px, Cột 2 cố định 200px, Cột 3 (1fr) linh hoạt lấp đầy toàn bộ không gian còn lại.

### Ví dụ 3 (Mở rộng): Sử dụng hàm epeat()
- **CSS**: grid-template-columns: repeat(4, 1fr);
- Tạo 4 cột đều nhau với cú pháp ngắn gọn, dễ bảo trì.

### Ví dụ 4 (Nâng cao): Responsive tự động không cần Media Query
- **CSS**: grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
- Tự động nhảy dòng và co dãn cột khi thay đổi độ rộng màn hình.

### Ví dụ 5 (Giá trị đặc biệt): Phân biệt min-content, max-content và uto
- **CSS**: grid-template-columns: min-content max-content auto;

---

## 🛠️ 3. Cấu Trúc Thư Mục
`plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS định dạng Grid và giao diện
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
`

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file index.html trực tiếp trên trình duyệt web bất kỳ.
2. Kiểm tra trực quan kết quả hiển thị của từng ví dụ:
   - Các ô màu xanh dương (lightblue) chia đều 3 cột.
   - Các ô màu xanh lá (lightgreen) chia 3 cột với độ rộng 100px, 200px, và phần còn lại.
   - Các ví dụ mở rộng epeat() và uto-fit/minmax().
3. Chụp ảnh màn hình các ví dụ theo yêu cầu nộp bài.
4. Xem mã nguồn trên GitHub: [CSS Grid Template Columns](https://github.com/VuDucDat2006/GitProject/tree/css-grid-template-columns)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
