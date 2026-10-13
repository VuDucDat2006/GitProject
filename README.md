# [Thực hành] Chuyển Đổi CSS Có Sẵn Sang SASS Theo Chuẩn

Dự án thực hành chuyển đổi một tệp CSS truyền thống nguyên khối sang kiến trúc **SASS/SCSS modular** chuẩn mực theo mô hình 7-1 (gồm các thư mục: `abstracts/`, `base/`, `layout/`, `components/` và tệp trung tâm `main.scss`).

---

## 🎯 1. Mục Tiêu Dự Án
- **Tối ưu hóa mã nguồn**: Chuyển đổi mã CSS ban đầu thành các biến (variables) và mixins để loại bỏ hoàn toàn việc lặp lại mã (DRY - Don't Repeat Yourself).
- **Tổ chức thư mục chuẩn**: Áp dụng kiến trúc chia thư mục kinh điển của SASS giúp dự án dễ bảo trì, dễ mở rộng và dễ làm việc nhóm.
- **Biên dịch chính xác**: Sử dụng công cụ dòng lệnh **SASS CLI** để biên dịch từ `main.scss` ra tệp `styles.css` hoàn chỉnh.

---

## 📌 2. Đối Chiếu Các Bước Chuyển Đổi

### Bước 1: Tệp CSS ban đầu (`original_styles.css`)
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
  background: #f4f4f4;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.card {
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
```

---

### Bước 2: Tách biến SASS (`abstracts/_variables.scss`)
```scss
$primary-color: blue;
$text-color: #333;
$background-color: #f4f4f4;
$border-color: #ddd;
$box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
```

---

### Bước 3: Tạo Mixins tái sử dụng (`abstracts/_mixins.scss`)
```scss
@mixin button-style($bg-color) {
  background: $bg-color;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

@mixin box-shadow {
  box-shadow: $box-shadow;
}
```

---

### Bước 4: Viết lại các module thành phần
- **`base/_global.scss`**:
  ```scss
  body {
    font-family: Arial, sans-serif;
    color: $text-color;
    background: $background-color;
  }
  ```
- **`layout/_container.scss`**:
  ```scss
  .container {
    width: 80%;
    margin: 0 auto;
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
    border: 1px solid $border-color;
    padding: 20px;
    @include box-shadow;
  }
  ```

---

### Bước 5: Nhập tất cả vào `main.scss`
```scss
@import "abstracts/variables";
@import "abstracts/mixins";
@import "base/global";
@import "layout/container";
@import "components/buttons";
@import "components/cards";
```

---

## 📂 3. Cấu Trúc Thư Mục Chuẩn Của Dự Án

```
GitProject/ (nhánh: convert-css-to-sass)
├── index.html              # Trang giao diện trực quan kiểm chứng kết quả CSS
├── convert_demo.html       # Bản sao trang demo
├── original_styles.css     # File CSS gốc ban đầu để đối chiếu
├── styles.css              # File CSS đầu ra được biên dịch từ main.scss
├── styles.css.map          # Source map tương ứng
├── main.scss               # Tệp SCSS chính nhập tất cả các module
├── abstracts/              # Chứa các định nghĩa trừu tượng (biến, mixins)
│   ├── _variables.scss     # Quản lý toàn bộ biến màu sắc, shadow
│   └── _mixins.scss        # Khai báo mixin button-style, box-shadow
├── base/                   # Định dạng cơ sở toàn trang
│   └── _global.scss        # Định dạng thẻ body và font chữ
├── layout/                 # Bố cục trang
│   └── _container.scss     # Định dạng khối .container
└── components/             # Các thành phần giao diện nhỏ lẻ (UI components)
    ├── _buttons.scss       # Định dạng lớp .button
    └── _cards.scss         # Định dạng lớp .card
```

---

## ⚡ 4. Lệnh Biên Dịch Bằng SASS CLI

```bash
# Biên dịch một lần từ main.scss ra styles.css
sass main.scss styles.css

# Chế độ tự động theo dõi (Watch Mode)
sass main.scss styles.css --watch
```

---

## 🎯 5. Kết Quả Đạt Được
- ✔ **Tối ưu hóa tối đa**: Mã CSS sinh ra hoàn toàn đồng nhất với thiết kế ban đầu nhưng code nguồn SCSS được chia nhỏ, sạch sẽ và rõ ràng.
- ✔ **Khả năng mở rộng**: Dễ dàng thay đổi `$primary-color` ở một nơi duy nhất để đổi toàn bộ màu sắc của các nút bấm trên website.
- ✔ **Chuẩn kiến trúc**: Đạt tiêu chuẩn cấu trúc thư mục SASS theo khuyến nghị ngành công nghiệp web.

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
