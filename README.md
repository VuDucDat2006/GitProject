# [Thực hành] Tạo Mixins & Biến Để Tối Ưu CSS Của Website Mẫu

Dự án thực hành tối ưu hóa mã CSS truyền thống thông qua việc ứng dụng **Biến (Variables)** và **Mixins** trong **SASS/SCSS**, giúp kiểm soát giao diện tập trung, giảm thiểu việc trùng lặp mã và nâng cao khả năng tái sử dụng.

---

## 🎯 1. Mục Tiêu Dự Án
- **Tạo mixins**: Giúp giảm thiểu lặp code khi thiết kế nút bấm (`.button`) và thẻ card (`.card`).
- **Dùng biến**: Kiểm soát màu sắc, kích thước phông chữ và độ đổ bóng toàn bộ website tại một nơi duy nhất.
- **Tổ chức theo module chuẩn**: Phân chia mã nguồn thành các thư mục `abstracts/`, `base/`, `components/` và file tổng hợp `main.scss`.
- **Biên dịch SASS CLI**: Tạo tệp `styles.css` hoàn chỉnh sẵn sàng cho trang web hoạt động.

---

## 📌 2. Đối Chiếu Các Bước Thực Hiện

### Bước 1: File CSS trước khi tối ưu (`original_styles.css`)
```css
h1 {
  font-size: 32px;
  color: #222;
}

h2 {
  font-size: 28px;
  color: #222;
}

.button {
  background: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
```

---

### Bước 2: Tạo biến trong SASS (`abstracts/_variables.scss`)
```scss
// abstracts/_variables.scss
$primary-color: red;
$text-color: #222;
$font-large: 32px;
$font-medium: 28px;
$padding-standard: 10px 20px;
$box-shadow-default: 2px 2px 10px rgba(0, 0, 0, 0.1);
```

---

### Bước 3: Tạo Mixins tái sử dụng (`abstracts/_mixins.scss`)
```scss
// abstracts/_mixins.scss
@mixin button-style($bg-color) {
  background: $bg-color;
  color: white;
  padding: $padding-standard;
  border-radius: 5px;
}

@mixin box-style {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: $box-shadow-default;
}
```

---

### Bước 4: Áp dụng Mixins & Biến vào các tệp SCSS thành phần
- **`base/_typography.scss`**:
  ```scss
  h1 {
    font-size: $font-large;
    color: $text-color;
  }

  h2 {
    font-size: $font-medium;
    color: $text-color;
  }
  ```
- **`components/_buttons.scss`**:
  ```scss
  .button {
    @include button-style($primary-color);
  }
  ```
- **`components/_cards.scss`**:
  ```scss
  .card {
    @include box-style;
  }
  ```

---

### Bước 5: Tổng hợp tại `main.scss`
```scss
@import "abstracts/variables";
@import "abstracts/mixins";
@import "base/typography";
@import "components/buttons";
@import "components/cards";
```

---

## 📂 3. Cấu Trúc Thư Mục Chuẩn

```
GitProject/ (nhánh: sass-mixins-variables-optimization)
├── index.html              # Trang giao diện trực quan hiển thị h1, h2, .button, .card
├── mixins_demo.html        # Bản sao trang demo
├── original_styles.css     # File CSS gốc ban đầu để đối chiếu
├── styles.css              # File CSS sau khi biên dịch từ main.scss
├── styles.css.map          # Source map
├── main.scss               # Tệp SCSS chính
├── abstracts/              # Chứa biến và mixins
│   ├── _variables.scss     # Định nghĩa các biến toàn cục
│   └── _mixins.scss        # Khai báo @mixin button-style và @mixin box-style
├── base/                   # Định dạng cơ bản
│   └── _typography.scss    # Định dạng tiêu đề h1, h2
└── components/             # Các thành phần giao diện
    ├── _buttons.scss       # Định dạng nút bấm .button
    └── _cards.scss         # Định dạng thẻ card .card
```

---

## ⚡ 4. Biên Dịch Bằng SASS CLI
```bash
# Biên dịch một lần
sass main.scss styles.css

# Tự động theo dõi thay đổi (Watch Mode)
sass main.scss styles.css --watch
```

---

## 🎯 5. Kết Quả Mong Đợi
- ✔ **Tập trung hóa**: Khi muốn đổi sang theme màu xanh (`blue`), cỡ chữ lớn hơn (`36px`), chỉ cần chỉnh sửa tại file `_variables.scss` 1 lần duy nhất.
- ✔ **Tối ưu hóa**: Không cần sao chép các dòng padding hay border-radius cho từng nút bấm hay thẻ card.
- ✔ **Dễ mở rộng**: Có thể tạo thêm nhiều biến thể nút bấm mới cực kỳ nhanh:
  ```scss
  .btn-success { @include button-style(#10b981); }
  .btn-warning { @include button-style(#f59e0b); }
  ```

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
