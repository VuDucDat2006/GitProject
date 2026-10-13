# [Thực hành] Tạo Navbar với Bootstrap

Dự án bài tập thực hành xây dựng thanh điều hướng (Navbar) chuyên nghiệp, hiện đại và chuẩn Responsive bằng framework **Bootstrap 5.3**. Thanh điều hướng hỗ trợ hiển thị danh mục con (Dropdown Menu) và tự động chuyển đổi thành nút bấm Hamburger thu gọn (Toggler) trên thiết bị di động.

---

## 🎯 Mục Tiêu Bài Thực Hành
- Luyện tập sử dụng thành phần **Bootstrap Navbar** (`navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-dark`).
- Hiểu và áp dụng cơ chế nhúng thư viện Bootstrap thông qua CDN (CSS & JS Bundle).
- Xây dựng thanh điều hướng gồm: Logo thương hiệu (`navbar-brand`), Nút toggle trên di động (`navbar-toggler`), danh sách điều hướng (`navbar-nav`), và danh mục thả xuống (`dropdown-menu`).
- Kiểm tra tính tương tác trên trình duyệt: đóng/mở menu trên mobile, xổ danh sách dropdown, hiệu ứng hover.

---

## 🚀 Các Bước Thực Hiện Chi Tiết

### Bước 1: Cài đặt Bootstrap 5.3 (CDN)
Nhúng mã CSS vào thẻ `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

Nhúng mã JavaScript Bundle (đã tích hợp sẵn Popper) trước thẻ đóng `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Bước 2: Xây dựng cấu trúc HTML từng bước
- **Bước 2.1: Tạo file HTML cơ bản**: Khởi tạo khung HTML5, thiết lập thẻ `meta` viewport và nạp Bootstrap CSS.
- **Bước 2.2: Tạo khung Navbar**:
  ```html
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">MyWebsite</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
          </button>
      </div>
  </nav>
  ```
- **Bước 2.3: Thêm menu điều hướng và Dropdown**:
  - `navbar-nav`: Danh sách các mục menu.
  - `nav-item` & `nav-link`: Từng mục liên kết (Home, About, Services, Contact).
  - `dropdown-toggle` & `dropdown-menu`: Danh mục con thả xuống (Web Design, SEO, Cloud Hosting).
- **Bước 2.4: Hoàn thiện Navbar**:
  Bọc danh sách menu trong khối `<div class="collapse navbar-collapse" id="navbarNav">` để kết nối đồng bộ với nút toggler.

---

## 📋 Bảng Phân Tích Các Class Bootstrap 5

| Class / Thuộc tính | Vị trí áp dụng | Chức năng chi tiết |
| :--- | :--- | :--- |
| `navbar` | Thẻ `<nav>` | Khởi tạo cấu trúc cơ bản của thanh điều hướng Bootstrap |
| `navbar-expand-lg` | Thẻ `<nav>` | Mở rộng dạng ngang ở màn hình Large (&ge; 992px); thu gọn thành icon dưới 992px |
| `navbar-dark bg-dark` | Thẻ `<nav>` | Thiết lập tông màu nền tối (Dark mode) và màu chữ sáng tương phản |
| `navbar-brand` | Thẻ `<a>` | Định dạng tên thương hiệu/logo ở góc trái thanh điều hướng |
| `navbar-toggler` | Thẻ `<button>` | Nút bấm Hamburger icon hiển thị trên thiết bị di động |
| `data-bs-toggle="collapse"` | Thuộc tính nút | Chỉ định Bootstrap JS thực hiện hiệu ứng đóng/mở khối menu |
| `data-bs-target="#navbarNav"`| Thuộc tính nút | Xác định ID của vùng menu cần được kích hoạt |
| `collapse navbar-collapse` | Thẻ `<div>` | Vùng nội dung menu sẽ tự động ẩn/hiện theo trạng thái toggler |
| `navbar-nav` | Thẻ `<ul>` | Danh sách các liên kết trong thanh điều hướng |
| `nav-item` | Thẻ `<li>` | Đại diện cho từng mục trong danh sách menu |
| `nav-link active` | Thẻ `<a>` | Liên kết điều hướng với trạng thái đang được chọn (Active) |
| `dropdown-menu` | Thẻ `<ul>` | Hộp menu con đổ xuống khi bấm vào nút cha |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn HTML hoàn chỉnh chứa Bootstrap 5.3 Navbar & Hero Section
├── style.css        # Tùy biến thẩm mỹ: Google Font, hiệu ứng hover, shadow, dropdown animation
└── README.md        # Tài liệu hướng dẫn, giải thích kỹ thuật và cách kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra Giao Diện
1. **Kiểm tra trên Desktop (> 992px)**:
   - Thanh điều hướng trải dài toàn bộ chiều ngang với màu nền tối sang trọng.
   - Các liên kết dàn ngang: *Home*, *About*, *Services*, *Contact* và ô tìm kiếm.
   - Bấm vào mục **Services** để kiểm tra menu đổ xuống (*Web Design*, *SEO*, *Cloud Hosting*).
2. **Kiểm tra trên Mobile / Tablet (&le; 991px)**:
   - Nhấn phím `F12` trên trình duyệt Chrome/Edge, chuyển sang chế độ Device Mode (`Ctrl + Shift + M`).
   - Quan sát menu tự động ẩn đi và xuất hiện nút bấm **Hamburger icon** ở góc phải.
   - Bấm vào nút Hamburger để menu trượt mượt mà mở ra/thu gọn lại.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-navbar](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-navbar)
