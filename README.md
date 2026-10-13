# [Thực hành] CSS | grid-row Property

Dự án thực hành chuyên sâu về thuộc tính `grid-row` trong **CSS Grid Layout** nhằm thay đổi vị trí và kích thước của Grid Item (cho một ô chiếm nhiều hàng liên tiếp).

---

## 📌 1. Giới Thiệu Cú Pháp & Nguyên Lý Đường Kẻ Hàng
```css
grid-row: <row-start> / <row-end>;
/* Hoặc sử dụng từ khóa span: */
grid-row: span <số_hàng>;
```

### Sơ đồ 4 đường kẻ hàng trong Grid 3 hàng:
```plaintext
Line 1 ─── Bắt đầu Hàng 1 (height: 100px)
Line 2 ─── Phân cách Hàng 1 & Hàng 2 (height: 100px)
Line 3 ─── Phân cách Hàng 2 & Hàng 3 (height: 100px)
Line 4 ─── Kết thúc Hàng 3
```
- Số lượng đường kẻ hàng luôn bằng: `Số hàng + 1`.
- Với Grid 3 hàng, có **4 đường kẻ hàng (Row Lines)** đánh số từ 1 đến 4 từ trên xuống dưới.

---

## 🏛️ 2. Các Trường Hợp Thực Hành Chi Tiết

### 🔹 Trường hợp 1: `grid-row: 1 / 3;` (Đề bài gốc)
- **HTML**:
  ```html
  <div class="grid-container">
      <div class="item item1">Ô 1</div>
      <div class="item">Ô 2</div>
      <div class="item">Ô 3</div>
      <div class="item">Ô 4</div>
      <div class="item">Ô 5</div>
      <div class="item">Ô 6</div>
  </div>
  ```
- **CSS**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 100px);
      gap: 10px;
  }
  .item1 {
      grid-row: 1 / 3;
  }
  ```
- **Kết quả**: Ô 1 bắt đầu từ Line 1 đến Line 3, chiếm trọn **2 hàng** (Hàng 1 & Hàng 2).

---

### 🔹 Trường hợp 2: Thay đổi thành `grid-row: 2 / 4;`
- **CSS**: `.item1 { grid-row: 2 / 4; }`
- **Kết quả**: Ô 1 dịch chuyển xuống dưới, chiếm **Hàng 2 & Hàng 3** (từ Line 2 đến Line 4). Vị trí Hàng 1 cột 1 được giải phóng cho các ô phía sau điền vào theo luồng tự nhiên.

---

### 🔹 Trường hợp 3: Thử nghiệm với `grid-row: span 2;`
- **CSS**: `.item1 { grid-row: span 2; }`
- **Kết quả**: Ô 1 kéo dài qua **2 hàng** tính từ vị trí tự nhiên của nó (Hàng 1 & Hàng 2).

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan sơ đồ và cả 3 trường hợp
├── style.css        # Hệ thống CSS định dạng Grid Layout và grid-row
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Quan sát trực quan kết quả của cả 3 trường hợp:
   - **Trường hợp 1**: Ô 1 màu xanh dương chiếm Hàng 1 và Hàng 2.
   - **Trường hợp 2**: Ô 1 màu tím dịch xuống chiếm Hàng 2 và Hàng 3.
   - **Trường hợp 3**: Ô 1 màu xanh lá kéo dài tự động qua 2 hàng (`span 2`).
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Grid Row](https://github.com/VuDucDat2006/GitProject/tree/css-grid-row)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
