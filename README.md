# [Bài tập] Tái Cấu Trúc Mã CSS Cho Sẵn Bằng SASS/SCSS

Dự án thực hành tái cấu trúc (refactoring) mã nguồn HTML & CSS của bài tập **Responsive Grid** từ kho lưu trữ chính thức của CodeGym ([https://github.com/codegym-vn/responsive-grid](https://github.com/codegym-vn/responsive-grid)) sang hệ thống **SASS/SCSS modular** chuẩn mực theo mô hình 7-1 Pattern.

---

## 🎯 1. Mục Tiêu Dự Án
- **Luyện tập SASS nâng cao**: Chuyển đổi mã CSS nguyên khối (~420 dòng) thành các module SCSS riêng biệt, có tính tổ chức cao và dễ bảo trì.
- **Áp dụng Biến (Variables)**: Quản lý tập trung toàn bộ bảng màu (Theme Colors), khoảng cách (Spacing), độ bo góc (Border-radius), đổ bóng (Box-shadow) và kích thước lưới (Grid gaps/widths).
- **Ứng dụng Mixins**: Đóng gói các đoạn mã lặp lại như `@mixin respond-to($breakpoint)`, `@mixin flex()`, `@mixin card-container()`, `@mixin button-style()`.
- **Cấu trúc Nesting trực quan**: Sử dụng tính năng lồng bộ chọn của SASS để thể hiện rõ mối quan hệ phân cấp giữa các phần tử HTML con (`header-content`, `nav-menu li a`, `article-card`, `widget-list`).
- **Biên dịch chuẩn mực bằng SASS CLI**: Sử dụng công cụ dòng lệnh SASS (Dart Sass) để biên dịch tự động ra tệp `responsive_grid.css` và `styles.css`.

---

## 📂 2. Cấu Trúc Thư Mục Sau Khi Tái Cấu Trúc

```
GitProject/ (nhánh: refactor-responsive-grid-sass)
├── index.html                  # Giao diện responsive bằng CSS Grid Layout
├── responsive_grid.html        # Bản sao trang HTML gốc
├── responsive_grid.css         # Tệp CSS đầu ra được biên dịch từ SASS
├── styles.css                  # Tệp CSS đồng bộ
├── responsive_grid.css.map     # Source map hỗ trợ DevTools
├── scss/                       # Toàn bộ mã nguồn SASS sau khi tái cấu trúc
│   ├── abstracts/              # Chứa biến và mixins toàn cục
│   │   ├── _variables.scss     # Quản lý bảng màu, kích thước, breakpoint
│   │   └── _mixins.scss        # Mixin responsive, flexbox, card, button
│   ├── base/                   # Định dạng nền tảng
│   │   ├── _reset.scss         # Box-sizing và reset margin/padding
│   │   └── _typography.scss    # Định dạng phông chữ và body
│   ├── layout/                 # Bố cục lưới và các phân vùng chính
│   │   ├── _grid.scss          # .grid-layout, grid-template-areas và responsive
│   │   ├── _header.scss        # Header, logo và khẩu hiệu
│   │   ├── _navigation.scss    # Navigation menu và hover states
│   │   ├── _sidebar.scss       # Sidebar và các khối widgets
│   │   └── _footer.scss        # Footer bản quyền và thông tin tác giả
│   ├── components/             # Các thành phần giao diện độc lập
│   │   ├── _article.scss       # Thẻ bài viết, tiêu đề, banner, code snippet
│   │   ├── _buttons.scss       # Nút bấm .btn-primary với mixin
│   │   └── _badges.scss        # Huy hiệu .article-category
│   └── main.scss               # Tệp SCSS trung tâm gom nhóm toàn bộ partials
└── README.md                   # Tài liệu báo cáo phân tích và hướng dẫn
```

---

## 📊 3. Bảng So Sánh Trước & Sau Khi Tái Cấu Trúc

| Tiêu chí | Trước khi tái cấu trúc (CSS nguyên khối) | Sau khi tái cấu trúc (SASS chuẩn 7-1) |
| :--- | :--- | :--- |
| **Tổ chức tệp** | 1 tệp `responsive_grid.css` duy nhất dài hơn 420 dòng | Chia nhỏ thành 11 tệp SCSS partials theo từng trách nhiệm cụ thể |
| **Quản trị màu sắc** | Mã màu `#0284c7`, `#1e293b`, `#f1f5f9` lặp lại hàng chục lần | Khai báo 1 lần tại `$primary-color`, `$dark-header`, `$bg-body` |
| **Media Queries** | Các đoạn `@media (max-width: 768px)` rải rác ở cuối file | Đóng gói trong `@mixin respond-to('mobile')` lồng trực tiếp trong bộ chọn |
| **Khối Card** | Lặp lại thuộc tính `background`, `border-radius`, `box-shadow` | Gọi tái sử dụng gọn gàng bằng `@include card-container()` |
| **Khả năng mở rộng**| Rất khó tìm kiếm và dễ gây xung đột khi thay đổi giao diện | Dễ dàng tùy biến theme hoặc thêm widget mới chỉ trong vài giây |

---

## 💻 4. Chi Tiết Các Tệp SCSS Trọng Tâm

### 4.1. `scss/abstracts/_variables.scss`
```scss
$primary-color: #0284c7;
$primary-dark: #0369a1;
$primary-light: #e0f2fe;
$secondary-color: #38bdf8;

$bg-body: #f1f5f9;
$bg-white: #ffffff;
$dark-bg: #0f172a;
$dark-header: #1e293b;

$text-dark: #0f172a;
$text-main: #334155;
$text-muted: #64748b;
$text-white: #ffffff;

$max-width-container: 1240px;
$sidebar-width: 320px;
$grid-gap-desktop: 20px;
$grid-gap-mobile: 15px;

$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$font-family-code: "Fira Code", Consolas, Monaco, monospace;
$breakpoint-mobile: 768px;
```

### 4.2. `scss/abstracts/_mixins.scss`
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'mobile' {
    @media (max-width: $breakpoint-mobile) {
      @content;
    }
  }
}

@mixin flex($justify: flex-start, $align: center, $direction: row) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-direction: $direction;
}

@mixin card-container($bg: $bg-white, $padding: 20px, $radius: 10px) {
  background-color: $bg;
  border-radius: $radius;
  padding: $padding;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

@mixin button-style($bg: $primary-color, $hover-bg: $primary-dark, $color: #fff) {
  display: inline-block;
  background-color: $bg;
  color: $color;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: $hover-bg;
  }
}
```

### 4.3. `scss/layout/_grid.scss`
```scss
.grid-layout {
  display: grid;
  grid-template-columns: 1fr $sidebar-width;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "header  header"
    "nav     nav"
    "main    sidebar"
    "footer  footer";
  gap: $grid-gap-desktop;
  min-height: 100vh;
  max-width: $max-width-container;
  margin: 0 auto;
  padding: 20px;

  @include respond-to('mobile') {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar"
      "footer";
    gap: $grid-gap-mobile;
    padding: 12px;
  }
}

.header       { grid-area: header; }
.navigation   { grid-area: nav; }
.main-content { grid-area: main; }
.sidebar      { grid-area: sidebar; }
.footer       { grid-area: footer; }
```

### 4.4. `scss/main.scss`
```scss
// 1. ABSTRACTS
@import "abstracts/variables";
@import "abstracts/mixins";

// 2. BASE
@import "base/reset";
@import "base/typography";

// 3. LAYOUT
@import "layout/grid";
@import "layout/header";
@import "layout/navigation";
@import "layout/sidebar";
@import "layout/footer";

// 4. COMPONENTS
@import "components/article";
@import "components/buttons";
@import "components/badges";
```

---

## ⚡ 5. Lệnh Biên Dịch SASS CLI

```bash
# Biên dịch một lần từ scss/main.scss sang responsive_grid.css
sass scss/main.scss responsive_grid.css

# Chế độ tự động theo dõi (Watch Mode)
sass scss/main.scss responsive_grid.css --watch
```

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
