# [Thực hành] CSS | flex-grow Property

Dự án thực hành chuyên sâu về thuộc tính `flex-grow` trong **CSS Flexbox** nhằm chỉ định khả năng phát triển (tăng kích thước) của một Flex Item so với các item khác khi còn không gian trống trong Flex Container.

---

## 📌 1. Bản Chất Thuộc Tính `flex-grow`
```css
flex-grow: number | initial | inherit;
```

### Nguyên Tắc Hoạt Động:
- `flex-grow` xác định **tỷ lệ phần không gian còn trống** (Available Free Space) trong Flex Container mà item sẽ nhận thêm.
- **Giá trị mặc định**: `0` (item không tự ý phình to, giữ nguyên kích thước ban đầu).
- **Khi chỉ có 1 item có `flex-grow > 0`**: Item đó sẽ nhận **toàn bộ** khoảng trống còn lại trong container.
- **Khi nhiều item có `flex-grow > 0`**: Không gian trống được chia tỷ lệ theo hệ số của từng item.

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 Ví dụ 1 (Đề bài chính): Vùng chứa gồm 5 div, áp dụng `flex-grow` trên div thứ 2
- **HTML**:
  ```html
  <div class="flex-container">
      <div class="item">Div 1</div>
      <div class="item item2">Div 2</div>
      <div class="item">Div 3</div>
      <div class="item">Div 4</div>
      <div class="item">Div 5</div>
  </div>
  ```
- **CSS**:
  ```css
  .item {
      width: 90px;
      flex-grow: 0;
  }
  .item2 {
      flex-grow: 1; /* Chiếm trọn không gian còn trống */
  }
  ```
- **Kết quả**: Bốn Div (1, 3, 4, 5) giữ nguyên chiều rộng ban đầu (90px). Riêng **Div 2** tự động mở rộng và nuốt trọn toàn bộ không gian trống còn lại trong container.

---

### 🔹 Ví dụ 2: Cả 5 div cùng có `flex-grow: 1`
- Toàn bộ khoảng trống được chia đều cho cả 5 div, giúp các ô có chiều rộng bằng nhau và dàn đều 100% container.

---

### 🔹 Ví dụ 3: Phân chia không gian theo tỷ lệ khác nhau (`1 : 3 : 1 : 2 : 1`)
- Div 2 nhận tỷ lệ tăng trưởng gấp 3 (`flex-grow: 3`).
- Div 4 nhận tỷ lệ tăng trưởng gấp 2 (`flex-grow: 2`).
- Div 1, 3, 5 nhận tỷ lệ cơ bản (`flex-grow: 1`).

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS Flexbox định dạng flex-grow
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Kiểm tra trực quan kết quả của cả 3 ví dụ:
   - **Ví dụ 1 (Đề bài)**: Quan sát Div 2 màu xanh dương tự động phình to vượt trội so với 4 div còn lại.
   - **Ví dụ 2**: Cả 5 div chia đều bề ngang.
   - **Ví dụ 3**: Các div mở rộng theo tỷ lệ 1 : 3 : 1 : 2 : 1.
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Flex Grow](https://github.com/VuDucDat2006/GitProject/tree/css-flex-grow)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
