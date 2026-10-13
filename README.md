# [Thực hành] CSS | grid-row-gap Property

Dự án thực hành chuyên sâu về thuộc tính `grid-row-gap` (và chuẩn W3C hiện đại `row-gap`) trong **CSS Grid Layout** nhằm xác định khoảng cách giữa các hàng.

---

## 📌 1. Giới Thiệu Cú Pháp & Chuẩn CSS Hiện Đại
```css
grid-row-gap: length | percentage | global-values;
/* Chuẩn W3C hiện đại: */
row-gap: length | percentage | global-values;
```

> **Lưu ý:** W3C đã chuẩn hóa thuộc tính `grid-row-gap` thành `row-gap` (hỗ trợ cả Grid và Flexbox). Cả hai cách viết đều hợp lệ; trong dự án này ta khai báo cả hai để đảm bảo tương thích tuyệt đối.

### Các Giá Trị Trọng Tâm
- **`length` (px, rem, em)**: Khoảng cách cố định chính xác (ví dụ `20px`).
- **`percentage (%)`**: Khoảng cách tính theo phần trăm chiều cao container cha (ví dụ `5%`).
- **`initial`**: Đặt lại về giá trị mặc định (`0` - các hàng nằm sát nhau).
- **`inherit`**: Kế thừa giá trị khoảng cách hàng từ phần tử cha bao ngoài.

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 Ví dụ 1: Độ dài cố định (`grid-row-gap: 20px;`)
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
      grid-row-gap: 20px;
      row-gap: 20px;
  }
  .grid-container div {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
  }
  ```
- **Kết quả**: Xuất hiện khoảng cách ngang 20px giữa Hàng 1 (Ô 1, Ô 2) và Hàng 2 (Ô 3, Ô 4).

---

### 🔹 Ví dụ 2: Tỷ lệ phần trăm (`grid-row-gap: 5%;`)
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
      grid-row-gap: 5%;
      row-gap: 5%;
      height: 360px;
  }
  .grid-container div {
      background-color: lightgreen;
      padding: 20px;
      text-align: center;
  }
  ```
- **Kết quả**: Khoảng cách giữa các hàng được tính toán bằng `5% * 360px = 18px`.

---

### 🔹 Ví dụ 3: Giá trị toàn cục (`initial` & `inherit`)
- `initial`: Khoảng cách hàng trở về `0px`, các hàng dính liền kề nhau.
- `inherit`: Kế thừa giá trị `row-gap: 30px` từ phần tử cha bao bọc bên ngoài.

---

### 🔹 Ví dụ 4 (Mở rộng): Kết hợp `row-gap`, `column-gap` và thuộc tính viết tắt `gap`
- Sử dụng `row-gap: 25px; column-gap: 15px;` (hoặc `gap: 25px 15px;`) để tạo lưới thông thoáng cả theo hàng dọc lẫn hàng ngang.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS định dạng khoảng cách Grid
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Kiểm tra trực quan kết quả của từng ví dụ:
   - **Ví dụ 1 (20px)**: Khoảng cách giữa 2 hàng màu xanh dương (lightblue).
   - **Ví dụ 2 (5%)**: Khoảng cách phần trăm giữa 2 hàng màu xanh lá (lightgreen) trong khung cao 360px.
   - **Ví dụ 3 (initial & inherit)**: So sánh trực tiếp giữa hàng dính liền và hàng cách nhau 30px do kế thừa.
3. Chụp ảnh màn hình kết quả theo hướng dẫn nộp bài.
4. Xem mã nguồn trên GitHub: [CSS Grid Row Gap](https://github.com/VuDucDat2006/GitProject/tree/css-grid-row-gap)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
