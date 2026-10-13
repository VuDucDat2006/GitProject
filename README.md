# [Thực hành] CSS | flex-basis Property

Dự án thực hành chuyên sâu về thuộc tính `flex-basis` trong **CSS Flexbox** nhằm chỉ định kích thước cơ sở ban đầu của Flex Item trên trục chính (Main Axis) trước khi phân phối không gian trống.

---

## 📌 1. Nguyên Lý Cốt Lõi Của flex-basis
```css
flex-basis: number | auto | initial | inherit;
```

> **Quy tắc quan trọng:** `flex-basis` phụ thuộc trực tiếp vào `flex-direction`:
> - Khi `flex-direction: row` (mặc định) &rarr; Main Axis là **chiều ngang** &rarr; `flex-basis` tương đương **chiều rộng** ban đầu.
> - Khi `flex-direction: column` &rarr; Main Axis là **chiều dọc** &rarr; `flex-basis` tương đương **chiều cao** ban đầu.

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 Ví dụ 1: `flex-basis` với đơn vị px (Main Axis: Chiều ngang)
- **HTML**:
  ```html
  <div class="container">
      <div class="item item1">Item 1</div>
      <div class="item item2">Item 2</div>
      <div class="item item3">Item 3</div>
  </div>
  ```
- **CSS**:
  ```css
  .container {
      display: flex;
      gap: 10px;
  }
  .item1 { flex-basis: 200px; }
  .item2 { flex-basis: 100px; }
  .item3 { flex-basis: 150px; }
  ```
- **Kết quả**: Item 1 rộng 200px, Item 2 rộng 100px, Item 3 rộng 150px.

---

### 🔹 Ví dụ 2: `flex-basis` với `flex-direction: column` (Main Axis: Chiều dọc)
- **CSS**:
  ```css
  .container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 420px;
  }
  .item {
      flex-basis: 100px;
  }
  ```
- **Kết quả**: Mỗi Item có **chiều cao** cơ sở 100px theo chiều dọc.

---

### 🔹 Ví dụ 3: `flex-basis` với tỷ lệ phần trăm (`50%`)
- **CSS**: `.item { flex-basis: 50%; box-sizing: border-box; }`
- **Kết quả**: 2 phần tử chia đều tạo thành 2 cột với độ rộng 50% theo chiều ngang.

---

### 🔹 Ví dụ 4: Kết hợp `flex-basis` với `flex-grow`
- **CSS**:
  ```css
  .container { display: flex; width: 600px; gap: 10px; }
  .item1 { flex-basis: 100px; flex-grow: 1; }
  .item2 { flex-basis: 100px; flex-grow: 2; }
  .item3 { flex-basis: 100px; flex-grow: 1; }
  ```
- **Kết quả**: Sau khi phân bổ kích thước cơ sở 100px mỗi ô, phần không gian còn dư được chia theo tỷ lệ `1 : 2 : 1`, Item 2 nhận phần không gian lớn gấp đôi Item 1 và Item 3.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan toàn bộ các ví dụ
├── style.css        # Hệ thống CSS định dạng Flexbox và flex-basis
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Quan sát trực quan kết quả của cả 4 ví dụ:
   - **Ví dụ 1 (px)**: Độ rộng ngang 200px, 100px, 150px.
   - **Ví dụ 2 (column)**: Độ cao dọc 100px cho từng phần tử.
   - **Ví dụ 3 (50%)**: Hai cột chia đôi màn hình 50% - 50%.
   - **Ví dụ 4 (flex-grow)**: Tỷ lệ phân phối không gian trống 1 : 2 : 1.
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Flex Basis](https://github.com/VuDucDat2006/GitProject/tree/css-flex-basis)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
