# [Bài tập] Tái cấu trúc mã CSS của các bài tập đã làm bằng SASS

## 📌 Thông tin bài tập
- **Học viên thực hiện:** Vũ Đức Đạt
- **GitHub:** [VuDucDat2006](https://github.com/VuDucDat2006)
- **Repository:** [GitProject](https://github.com/VuDucDat2006/GitProject)
- **Nhánh (Branch):** `refactor-landing-page-sass`
- **Khóa học:** Web Development Foundation - CodeGym
- **Chuyên đề:** CSS Preprocessor (SASS / SCSS)

---

## 🎯 Mục tiêu bài tập
Trong chuỗi bài học chuyên đề **Template**, học viên đã thực hiện xây dựng 4 thành phần cốt lõi của một Landing Page hoàn chỉnh:
1. **[Bài tập] Dựng navigation và header của landing page thiết kế sẵn.**
2. **[Bài tập] Dựng phần sản phẩm nổi bật của landing page thiết kế sẵn.**
3. **[Bài tập] Dựng phần số liệu thống kê của landing page thiết kế sẵn.**
4. **[Bài tập] Dựng phần footer của landing page thiết kế sẵn.**

Trong bài tập này, toàn bộ mã CSS ban đầu được **tái cấu trúc toàn diện sang SASS/SCSS** theo chuẩn kiến trúc module chuyên nghiệp, đảm bảo:
- Sử dụng đầy đủ các tính năng mạnh mẽ của SASS: **Variables**, **Nesting**, **Mixins**, **Partials**, **Functions**.
- Giữ nguyên và nâng cấp độ thẩm mỹ, bố cục responsive của Landing Page ban đầu.
- Biên dịch thành công mã nguồn SCSS sang CSS bằng SASS CLI và npm script.
- Đưa mã nguồn hoàn thiện lên GitHub.

---

## 📁 Cấu trúc thư mục dự án (SASS 7-1 Architecture)

Dự án được tổ chức khoa học theo mô hình partials chuẩn của SASS:

```text
GitProject/
├── index.html                   # Giao diện Landing Page chuẩn HTML5
├── style.css                    # File CSS sau khi biên dịch từ SASS
├── style.css.map                # Source map phục vụ debug
├── package.json                 # Quản lý script biên dịch SASS
├── README.md                    # Tài liệu báo cáo dự án
└── scss/                        # Thư mục mã nguồn SCSS dạng Module
    ├── main.scss                # Tệp SCSS chính import toàn bộ partials
    ├── abstracts/               # Biến và mixin dùng chung toàn dự án
    │   ├── _variables.scss      # Màu sắc, Typography, Spacing, Shadows, Breakpoints
    │   └── _mixins.scss         # Flexbox, Grid auto, Buttons, Card styles, Media queries
    ├── base/                    # Thiết lập CSS cơ bản
    │   ├── _reset.scss          # Reset margin, padding, box-sizing
    │   └── _typography.scss     # Định dạng font chữ, heading và container
    ├── layout/                  # Bố cục trang chính
    │   ├── _header.scss         # Header, Logo, Navigation bar (Sticky)
    │   └── _footer.scss         # Footer đa cột, thông tin liên hệ, bản quyền
    └── components/              # Các khối giao diện thành phần
        ├── _buttons.scss        # Hệ thống nút bấm (Primary, Outline, Accent, Sizes)
        ├── _hero.scss           # Hero Banner, tiêu đề lớn, Call To Action
        ├── _products.scss       # Danh sách sản phẩm/dịch vụ nổi bật (Card Grid)
        ├── _stats.scss          # Số liệu thống kê (Counter cards, Glassmorphism)
        └── _testimonials.scss   # Đánh giá của khách hàng (Testimonials)
```

---

## 🚀 Chi tiết 4 thành phần được tái cấu trúc bằng SASS

### 1. Navigation và Header (`scss/layout/_header.scss` & `scss/components/_hero.scss`)
- **Navigation:**
  - Áp dụng `@include flex-between` để dàn đều Logo và Menu điều hướng.
  - Nesting liên kết menu `nav ul li a` với hiệu ứng gạch chân chuyển động `&::after` và `&:hover`.
  - Cố định trên đầu trang (`position: sticky; top: 0; z-index: 1000`).
  - Hỗ trợ Responsive thông qua mixin `@include respond-to(tablet)`.
- **Hero Section:**
  - Nền gradient chuyển màu nhẹ nhàng và hiệu ứng ánh sáng tỏa tròn radial.
  - Phân cấp kích thước font rõ ràng: `$font-size-hero: 44px`, tiêu đề gradient chữ nổi bật.
  - Hai nút kêu gọi hành động (CTA) kích thước lớn với hiệu ứng đổ bóng mượt mà.

### 2. Phần Sản Phẩm Nổi Bật (`scss/components/_products.scss`)
- Hiển thị 4 thẻ dịch vụ/sản phẩm: *Thiết kế Website Chuẩn SEO*, *Hệ Thống ERP & Quản Trị*, *Marketing Số*, *Ứng Dụng Di Động & AI*.
- Tái sử dụng biến `$primary-light` (#e0f2fe) và `$primary-subtle` (#bae6fd) từ đề bài gốc.
- Áp dụng Nesting cho các thẻ con: `.card-badge`, `.product-icon`, `h3`, `p`, `.product-meta`.
- Hiệu ứng hover nâng thẻ (`transform: translateY(-6px)`), đổ bóng thẻ (`$shadow-card-hover`) và phóng to icon.

### 3. Phần Số Liệu Thống Kê (`scss/components/_stats.scss`)
- Nền xanh đen hiện đại với dải gradient đường viền trên đỉnh.
- Áp dụng mixin `@include grid-auto(240px, 25px)` giúp 4 thẻ thống kê tự động co giãn theo độ rộng màn hình.
- Thẻ thống kê phong cách **Glassmorphism** (`backdrop-filter: blur(8px)` và viền mờ `rgba(255, 255, 255, 0.1)`).
- 4 chỉ số ấn tượng:
  - `15,000+` Khách Hàng Tin Cậy
  - `500+` Dự Án Triển Khai
  - `99.8%` Tỷ Lệ Hài Lòng
  - `24/7` Hỗ Trợ Kỹ Thuật

### 4. Phần Footer (`scss/layout/_footer.scss`)
- Bố cục 4 cột linh hoạt:
  - **Cột 1:** Thông tin thương hiệu MyBrand + Icon mạng xã hội tròn có hover đổi màu.
  - **Cột 2:** Liên kết nhanh đến các mục chính trong trang.
  - **Cột 3:** Danh mục giải pháp công nghệ.
  - **Cột 4:** Thông tin liên hệ thực tế (Địa chỉ, Hotline, Email, Giờ làm việc).
- Dòng chân trang bản quyền đầy đủ thông tin học viên: **Vũ Đức Đạt (VuDucDat2006)**.

---

## 💡 Các tính năng SASS đã áp dụng

### 1. Variables (Hệ thống biến quản lý tập trung)
```scss
$primary-color: #0284c7;
$primary-dark: #0369a1;
$primary-light: #e0f2fe;
$secondary-color: #0f172a;
$dark-bg: #1e293b;
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$radius-md: 10px;
$radius-full: 9999px;
$transition-normal: all 0.3s ease;
```

### 2. Nesting (Lồng ghép bộ chọn & bộ chọn cha `&`)
```scss
.nav ul {
  display: flex;
  gap: 28px;

  li {
    a {
      color: $text-footer;
      transition: $transition-fast;

      &:hover {
        color: #38bdf8;
      }
    }
  }
}
```

### 3. Mixins (Hàm tái sử dụng logic CSS)
```scss
@mixin flex-between($align: center) {
  display: flex;
  justify-content: space-between;
  align-items: $align;
}

@mixin button-style($bg-color: $primary-color, $text-color: #fff, $radius: $radius-full) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-color;
  color: $text-color;
  padding: 12px 28px;
  border-radius: $radius;
  transition: $transition-normal;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
  }
}

@mixin respond-to($device) {
  @if $device == "tablet" {
    @media (max-width: 768px) { @content; }
  }
}
```

---

## 🛠️ Hướng dẫn cài đặt & Biên dịch SASS

### 1. Yêu cầu môi trường
- Đã cài đặt **Node.js** và **npm**.
- Cài đặt SASS toàn cục (hoặc dùng SASS có sẵn):
  ```bash
  npm install -g sass
  ```

### 2. Biên dịch thủ công qua SASS CLI
```bash
# Biên dịch 1 lần từ SCSS sang CSS
sass scss/main.scss style.css

# Chế độ theo dõi tự động biên dịch khi sửa file
sass --watch scss/main.scss:style.css
```

### 3. Biên dịch qua npm scripts
```bash
npm run build:css
# hoặc
npm run watch:css
```

---

## 📊 Bảng so sánh Trước & Sau khi tái cấu trúc

| Tiêu chí | CSS Thuần Ban Đầu | SASS/SCSS Sau Tái Cấu Trúc |
| :--- | :--- | :--- |
| **Tổ chức file** | Dồn tất cả hơn 250 dòng vào 1 file duy nhất | Tách thành các modules partials độc lập (`abstracts/`, `base/`, `components/`, `layout/`) |
| **Quản lý màu & font** | Hardcode mã màu hex ở khắp mọi nơi | Định nghĩa 1 lần trong `_variables.scss`, thay đổi 1 chỗ áp dụng toàn trang |
| **Tái sử dụng code** | Lặp lại thuộc tính Flexbox, Grid, Button | Dùng `@mixin flex-center`, `@mixin button-style`, `@mixin grid-auto` |
| **Responsive** | Media query viết rải rác, khó theo dõi | Dùng mixin `@include respond-to(tablet)` lồng trực tiếp trong component |
| **Khả năng mở rộng** | Khó bảo trì khi dự án phát triển lớn | Dễ dàng bổ sung component mới mà không ảnh hưởng code cũ |

---

## 🔗 Liên kết nộp bài tập
- **Repository:** `https://github.com/VuDucDat2006/GitProject`
- **Nhánh bài tập:** `refactor-landing-page-sass`
- **Link trực tiếp:** `https://github.com/VuDucDat2006/GitProject/tree/refactor-landing-page-sass`
