# [Thực Hành] Hướng Dẫn Cài Đặt SASS Bằng npm & SASS CLI

Dự án thực hành quy trình cài đặt, cấu hình và sử dụng **SASS (Syntactically Awesome Style Sheets)** thông qua **npm** và công cụ dòng lệnh **SASS CLI (Dart Sass)**.

---

## 🎯 1. Mục Tiêu Bài Học
- **Kiểm tra môi trường**: Xác nhận Node.js và npm đã được cài đặt trên máy tính.
- **Cài đặt SASS**: Sử dụng `npm install -g sass` để cài đặt Dart Sass toàn cục.
- **Biên dịch SCSS sang CSS**: Sử dụng lệnh `sass styles.scss styles.css`.
- **Chế độ theo dõi (Watch Mode)**: Kích hoạt cờ `--watch` để tự động cập nhật file CSS ngay khi file SCSS được lưu.
- **Biên dịch nhiều file SCSS theo thư mục**: Sử dụng cú pháp `sass scss/:css/ --watch` kết hợp chia nhỏ dự án thành các partials (`_variables.scss`, `_mixins.scss`, `_header.scss`, `_cards.scss`, `_footer.scss`).
- **Xử lý sự cố quyền hạn**: Hướng dẫn xử lý lỗi `Set-ExecutionPolicy` trên hệ điều hành Windows.

---

## 💻 2. Nhật Ký Kiểm Tra Môi Trường Thực Tế

| Thành phần | Lệnh kiểm tra | Kết quả thực tế | Trạng thái |
| :--- | :--- | :--- | :---: |
| **Node.js** | `node -v` | `v24.19.0` | Đã sẵn sàng |
| **npm** | `npm -v` | `11.17.0` | Đã sẵn sàng |
| **SASS (Dart Sass)** | `sass --version` | `1.105.1 compiled with dart2js 3.13.5` | Đã cài đặt toàn cục |

---

## 🚀 3. Hướng Dẫn Các Lệnh SASS CLI Cốt Lõi

### 3.1. Cài đặt SASS
```bash
# Cài đặt SASS toàn cục (Global) qua npm
npm install -g sass

# Kiểm tra phiên bản SASS sau khi cài
sass --version
```

### 3.2. Biên dịch một tệp SCSS đơn
```bash
# Biên dịch file styles.scss thành styles.css
sass styles.scss styles.css
```

### 3.3. Chế độ theo dõi tự động (Watch Mode cho 1 tệp)
```bash
# Tự động lắng nghe thay đổi trong styles.scss và cập nhật styles.css
sass styles.scss styles.css --watch
```

### 3.4. Biên dịch và theo dõi toàn bộ thư mục (Multi-file Compilation)
```bash
# Biên dịch toàn bộ thư mục scss/ sang thư mục css/ trong thời gian thực
sass scss/:css/ --watch
```

### 3.5. Nén tối ưu dung lượng CSS (Production Build)
```bash
# Nén CSS loại bỏ khoảng trắng và comment
sass scss/:css/ --style=compressed
```

---

## 📂 4. Cấu Trúc Dự Án SCSS / CSS

```
sass-npm-cli-practice/
├── index.html              # Trang giao diện trực quan kiểm chứng kết quả SASS
├── package.json            # Cấu hình scripts npm (build:single, watch:multi...)
├── styles.scss             # Tệp SCSS nguồn cấp gốc
├── styles.css              # Tệp CSS sau khi biên dịch từ styles.scss
├── styles.css.map          # Tệp Source Map phục vụ Debug trên trình duyệt
├── scss/                   # Thư mục chứa các tệp SCSS Partials theo module
│   ├── _variables.scss     # Khai báo biến ($primary, $font-stack...)
│   ├── _mixins.scss        # Khai báo mixin (@mixin flex-center, button-style...)
│   ├── _header.scss        # Module Header & Navbar
│   ├── _cards.scss         # Module Grid Cards
│   ├── _footer.scss        # Module Footer
│   └── main.scss           # Tệp SCSS chính tổng hợp các partials bằng @use
├── css/                    # Thư mục đích nhận file CSS sau biên dịch
│   ├── main.css            # Tệp CSS hoàn chỉnh biên dịch từ scss/main.scss
│   └── main.css.map        # Source Map tương ứng
└── README.md               # Tài liệu hướng dẫn chi tiết
```

---

## 🛠️ 5. Các Tính Năng SCSS Tiêu Biểu Đã Áp Dụng

1. **Variables (Biến)**:
   ```scss
   $primary: #6366f1;
   $dark: #0f172a;
   $radius: 12px;
   ```
2. **Nesting (Lồng bộ chọn)**:
   ```scss
   .navbar {
     background: #1e293b;
     ul {
       display: flex;
       li a {
         color: #e2e8f0;
         &:hover { color: #0ea5e9; }
       }
     }
   }
   ```
3. **Mixins (Tái sử dụng khối mã)**:
   ```scss
   @mixin button-style($bg-color, $hover-color) {
     padding: 10px 22px;
     background-color: $bg-color;
     border-radius: 8px;
     &:hover { background-color: $hover-color; }
   }
   ```
4. **Partials & `@use` Module System**:
   - Sử dụng `@use 'variables' as *;` để nạp các module mà không gây xung đột phạm vi biến.

---

## ⚡ 6. Sử Dụng Nhanh Qua npm Scripts

Trong dự án đã cấu hình sẵn các lệnh trong `package.json`:

```bash
# Biên dịch cả tệp đơn và thư mục
npm run build

# Theo dõi liên tục thư mục scss/:css/
npm run watch:multi

# Theo dõi tệp đơn styles.scss
npm run watch:single

# Biên dịch nén cho môi trường Production
npm run build:compressed
```

---

## 🔧 7. Xử Lý Lỗi Quyền Hạn Trên Windows (Troubleshooting)

Nếu gặp thông báo lỗi:
> *File sass.ps1 cannot be loaded because running scripts is disabled on this system...*

Hãy mở **PowerShell với quyền Administrator** và chạy lệnh:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
hoặc:
```powershell
Set-ExecutionPolicy Unrestricted
```

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
