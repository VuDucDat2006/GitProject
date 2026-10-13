# [Thực hành] CSS | grid-column-start Property

Dự án thực hành chuyên sâu về thuộc tính grid-column-start trong **CSS Grid Layout** nhằm xác định đường kẻ cột (Column Line) nơi Grid Item bắt đầu.

---

## 📌 1. Cú Pháp & Nguyên Lý Đường Kẻ Cột

### Cú pháp:
`css
grid-column-start: auto | span n | column-line;
`

### Sơ đồ 5 đường kẻ cột trong Grid 4 cột:
`plaintext
|    Cột 1    |    Cột 2    |    Cột 3    |    Cột 4    |
1             2             3             4             5
↑             ↑             ↑             ↑             ↑
Đường kẻ 1    Đường kẻ 2    Đường kẻ 3    Đường kẻ 4    Đường kẻ 5
(Line 1)      (Line 2)      (Line 3)      (Line 4)      (Line 5)
`
- Số lượng đường kẻ cột luôn bằng: Số cột + 1.
- Với Grid 4 cột, có tổng cộng **5 đường kẻ cột** được đánh số thứ tự từ trái sang phải từ 1 đến 5.

---

## 🏛️ 2. Các Giá Trị & Ví Dụ Thực Hành

### 🔹 Ví dụ 1: Giá trị uto (Mặc định)
- **HTML**:
  `html
  <div class=grid-container>
      <div class=item1>1</div>
      <div>2</div>
      <div>3</div>
  </div>
  `
- **CSS**:
  `css
  .grid-container {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      gap: 10px;
  }
  .item1 {
      grid-column-start: auto;
  }
  `
- **Giải thích**: Item 1 được đặt theo luồng sắp xếp tự nhiên của Grid (bắt đầu tại đường kẻ 1).

---

### 🔹 Ví dụ 2: Giá trị span n (Kéo dài n cột)
- **HTML**:
  `html
  <div class=grid-container>
      <div class=item1>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
  </div>
  `
- **CSS**:
  `css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
  }
  .item1 {
      grid-column-start: span 2;
  }
  `
- **Giải thích**: span 2 mở rộng Item 1 để chiếm **2 cột**. Item 2, 3 dịch chuyển sang cột 3, 4; Item 4 tự động rớt xuống hàng kế tiếp.

---

### 🔹 Ví dụ 3: Giá trị column-line (Chỉ định đường kẻ bắt đầu)
- **HTML**:
  `html
  <div class=grid-container>
      <div class=item1>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
  </div>
  `
- **CSS**:
  `css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
  }
  .item1 {
      grid-column-start: 2;
  }
  `
- **Giải thích**: grid-column-start: 2; làm cho Item 1 bắt đầu chính xác từ **đường kẻ cột số 2** (Line 2). Cột 1 (từ Line 1 đến Line 2) để trống ở đầu dòng.

---

## 🛠️ 3. Cấu Trúc Thư Mục
`plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan sơ đồ và các ví dụ
├── style.css        # Hệ thống CSS định dạng Grid và grid-column-start
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
`

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file index.html trực tiếp trên bất kỳ trình duyệt web nào.
2. Quan sát trực quan kết quả của 3 ví dụ:
   - **Ví dụ 1 (auto)**: Ô Item 1 nằm ở vị trí đầu tiên bình thường.
   - **Ví dụ 2 (span 2)**: Ô Item 1 kéo dài gấp đôi bề ngang (chiếm 2 cột).
   - **Ví dụ 3 (Line 2)**: Ô Item 1 thụt vào từ cột thứ hai, để trống cột 1.
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Grid Column Start](https://github.com/VuDucDat2006/GitProject/tree/css-grid-column-start)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
