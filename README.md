# [Thực hành] CSS | grid-gap Property

Dự án thực hành chuyên sâu về thuộc tính `grid-gap` (và chuẩn W3C hiện đại `gap`) trong **CSS Grid Layout** nhằm thiết lập khoảng cách giữa các hàng và các cột trong bố cục lưới.

---

## 📌 1. Giới Thiệu Cú Pháp & Chuẩn Hiện Đại
```css
grid-gap: <grid-row-gap> <grid-column-gap>;
/* Chuẩn W3C hiện đại (áp dụng cho cả Grid & Flexbox): */
gap: <row-gap> <column-gap>;
```

### Nguyên Tắc Hoạt Động:
- **Khi truyền 1 giá trị** (ví dụ `grid-gap: 20px;`): Khoảng cách 20px được áp dụng đồng thời cho **cả hàng và cột** (`row-gap: 20px; column-gap: 20px;`).
- **Khi truyền 2 giá trị** (ví dụ `grid-gap: 30px 10px;`):
  - Giá trị thứ nhất là khoảng cách **giữa các hàng** (`grid-row-gap: 30px;`).
  - Giá trị thứ hai là khoảng cách **giữa các cột** (`grid-column-gap: 10px;`).
- **Giá trị mặc định**: `0` nếu không khai báo.

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 Ví dụ 1: Thiết lập khoảng cách hàng và cột bằng nhau (`grid-gap: 20px;`)
- **HTML**:
  ```html
  <div class="grid-container">
      <div>Ô 1</div>
      <div>Ô 2</div>
      <div>Ô 3</div>
      <div>Ô 4</div>
  </div>
  ```
- **CSS**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      gap: 20px;
  }
  .grid-container div {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
  }
  ```
- **Kết quả**: Lưới 2 cột &times; 2 hàng với khoảng cách 20px đều nhau xung quanh mỗi ô.

---

### 🔹 Ví dụ 2: Thiết lập khoảng cách hàng và cột khác nhau (`grid-gap: 30px 10px;`)
- **HTML**:
  ```html
  <div class="grid-container">
      <div>Ô 1</div>
      <div>Ô 2</div>
      <div>Ô 3</div>
      <div>Ô 4</div>
      <div>Ô 5</div>
      <div>Ô 6</div>
  </div>
  ```
- **CSS**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px 10px;
      gap: 30px 10px;
  }
  .grid-container div {
      background-color: lightgreen;
      padding: 20px;
      text-align: center;
  }
  ```
- **Kết quả**: Khoảng cách giữa các hàng là 30px (thoáng hơn), khoảng cách giữa các cột là 10px.

---

### 🔹 Ví dụ 3 (Mở rộng): Cú pháp chuẩn hóa `gap` hiện đại (`gap: 15px 35px;`)
- Minh họa tính ứng dụng rộng rãi của từ khóa `gap` trong phát triển web hiện đại.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS định dạng khoảng cách lưới
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Kiểm tra trực quan kết quả của 2 ví dụ:
   - **Ví dụ 1 (20px)**: Khoảng cách đều 20px giữa hàng và cột của 4 ô màu xanh dương (lightblue).
   - **Ví dụ 2 (30px 10px)**: Khoảng cách hàng 30px và cột 10px của 6 ô màu xanh lá (lightgreen).
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Grid Gap](https://github.com/VuDucDat2006/GitProject/tree/css-grid-gap)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
