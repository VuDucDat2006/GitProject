# [Thực hành] CSS | flex-flow Property

Dự án thực hành chuyên sâu về thuộc tính `flex-flow` trong **CSS Flexbox** - thuộc tính viết tắt (shorthand) kết hợp giữa `flex-direction` và `flex-wrap`.

---

## 📌 1. Cú Pháp & Nguyên Tắc Hoạt Động
```css
flex-flow: <flex-direction> <flex-wrap>;
```

- **Lưu ý quan trọng**: Thuộc tính `flex-flow` chỉ có tác dụng khi đặt tại phần tử cha (**Flex Container** có `display: flex` hoặc `display: inline-flex`).
- **Giá trị mặc định**: `row nowrap` (sắp xếp theo hàng từ trái qua phải và không xuống dòng).

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 Ví dụ 1: `flex-flow: row nowrap;` (Mặc định - Màu xanh biển `#007bff`)
- **HTML**:
  ```html
  <div class="container-1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
  </div>
  ```
- **CSS**:
  ```css
  .container-1 {
      display: flex;
      flex-flow: row nowrap;
      background-color: #f1f1f1;
  }
  .container-1 > div {
      background-color: #007bff;
      color: white;
      width: 100px;
      margin: 10px;
      text-align: center;
      line-height: 50px;
  }
  ```
- **Kết quả**: Sắp xếp các item nằm trên cùng 1 hàng theo hướng đọc văn bản thông thường (trái qua phải: `1 -> 2 -> 3`) và không xuống dòng.

---

### 🔹 Ví dụ 2: `flex-flow: row-reverse nowrap;` (Màu xanh lá `#28a745`)
- **HTML**:
  ```html
  <div class="container-2">
      <div>1</div>
      <div>2</div>
      <div>3</div>
  </div>
  ```
- **CSS**:
  ```css
  .container-2 {
      display: flex;
      flex-flow: row-reverse nowrap;
      background-color: #f1f1f1;
  }
  .container-2 > div {
      background-color: #28a745;
      color: white;
      width: 100px;
      margin: 10px;
      text-align: center;
      line-height: 50px;
  }
  ```
- **Kết quả**: Sắp xếp các item nằm trên cùng 1 hàng nhưng theo hướng ngược lại (bắt đầu từ phải qua trái: `3 <- 2 <- 1`) và không xuống dòng.

---

### 🔹 Ví dụ 3 (Mở rộng): `flex-flow: row wrap;` (Màu cam `#fd7e14`)
- Xếp theo hàng ngang, tự động bọc thành nhiều dòng khi vượt quá chiều rộng container (380px).

### 🔹 Ví dụ 4 (Mở rộng): `flex-flow: column wrap;` (Màu tím `#6f42c1`)
- Xếp theo cột dọc trong khung cao 160px, khi chạm đáy tự động nhảy sang cột mới.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS Flexbox và flex-flow
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Quan sát trực quan kết quả của cả 2 ví dụ chính và 2 ví dụ mở rộng:
   - **Ví dụ 1 (row nowrap)**: 3 ô màu xanh dương xếp từ trái sang phải `1, 2, 3`.
   - **Ví dụ 2 (row-reverse nowrap)**: 3 ô màu xanh lá xếp ngược từ phải sang trái `1` (ngoài cùng bên phải), `2`, `3`.
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Flex Flow](https://github.com/VuDucDat2006/GitProject/tree/css-flex-flow)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
