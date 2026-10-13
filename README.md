# [Thực hành] Template Web Page using HTML and CSS

Dự án mẫu trang web giới thiệu công nghệ và lập trình (**Simple Web Development Template**) được xây dựng bằng **HTML5** và **CSS3**, tập trung vào việc tổ chức bố cục với các thẻ ngữ nghĩa `<nav>`, `<section>`, `<footer>`, thanh điều hướng ghim cố định (`position: sticky`), và bố cục đa chiều với **Flexbox** bao gồm kỹ thuật đảo chiều hiển thị bằng `flex-direction: row-reverse`.

---

## 🎯 Mục Tiêu Bài Học
1. **Nắm vững cấu trúc HTML cơ bản**:
   - Sử dụng thẻ ngữ nghĩa `<nav>`, `<section>`, `<footer>`.
   - Tổ chức nội dung bằng các lớp phân cấp: `.firstHalf`, `.secondHalf`, `.paras`, `.thumbnail`.
2. **Kỹ thuật bố cục CSS chuyên sâu**:
   - **Sticky Navigation**: Giữ thanh điều hướng cố định trên cùng màn hình khi cuộn trang (`position: sticky; top: 0;`).
   - **Flexbox Layout**: Căn giữa linh hoạt (`justify-content: center; align-items: center;`), phân chia tỉ lệ danh sách menu (`width: 70%`) và thanh tìm kiếm (`width: 30%`).
   - **Kỹ thuật Flex Direction Row-Reverse**: Đảo chiều vị trí hình ảnh và văn bản thông qua lớp `.section-Left` (`flex-direction: row-reverse;`).
   - **Typography & Font**: Nhúng Google Fonts đặc trưng (`Piazzolla` cho tiêu đề lớn `.text-big` và `Ubuntu` cho chân trang `.text-footer`).
   - **Responsive Design**: Đảm bảo hiển thị tối ưu trên thiết bị di động (Mobile, Tablet) thông qua Media Queries.

---

## 🚀 Các Thành Phần Chính Của Trang Web

1. **Thanh điều hướng (Navbar)**:
   - Logo thương hiệu bo góc tròn (`.logo img`).
   - Danh sách menu liên kết: *Web Technology*, *C Programming*, *Courses*.
   - Khung tìm kiếm và nút bấm Search bo góc hiện đại.
   - Ghim cố định trên đỉnh trang (`position: sticky`).

2. **Section 1: Web Technology (Nền Green)**:
   - Giới thiệu ngôn ngữ HTML (HyperText Markup Language).
   - Bố cục căn giữa toàn diện với Flexbox (`.box-main`).

3. **Section 2: C Programming (Nền Blue)**:
   - Giới thiệu ngôn ngữ lập trình C và các tính năng cốt lõi.
   - Thể hiện sự tương phản màu nền rõ rệt giữa các phần.

4. **Section 3: Java (Bố cục Flexbox chuẩn)**:
   - Nội dung văn bản (`.paras`) nằm ở bên trái.
   - Hình ảnh mô phỏng máy tính (`.thumbnail img`) nằm ở bên phải.

5. **Section 4: Python & Web Fullstack (Bố cục đảo chiều với `section-Left`)**:
   - Ứng dụng `flex-direction: row-reverse;`.
   - Hình ảnh hiển thị ở phía bên trái và đoạn văn bản hiển thị ở phía bên phải.

6. **Chân trang (Footer)**:
   - Dòng thông tin bản quyền: `Copyright ©-All rights are reserved`.
   - Căn giữa hoàn hảo với font chữ `Ubuntu`.

---

## 📋 Bảng Phân Tích Các Thuộc Tính CSS Trọng Tâm

| Thuộc tính CSS | Giá trị áp dụng | Mục đích kỹ thuật |
| :--- | :--- | :--- |
| `display: flex` | `.navbar, .nav-list, .box-main, .section` | Kích hoạt mô hình hộp linh hoạt Flexbox |
| `position: sticky` | `.navbar { position: sticky; top: 0; }` | Ghim thanh navbar trên đỉnh khi người dùng cuộn trang |
| `flex-direction: row-reverse` | `.section-Left, .section-left` | Đảo chiều phần tử con: hình ảnh sang trái, text sang phải |
| `justify-content` | `center` | Căn giữa các thành phần theo trục chính |
| `align-items` | `center` | Căn giữa các thành phần theo trục vuông góc |
| `font-family` | `'Piazzolla', serif`, `'Ubuntu', sans-serif` | Định hình phong cách typography sang trọng |
| `@media (max-width: 900px)` | Media query responsive | Chuyển layout sang dạng cột dọc trên màn hình di động |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
GitProject/
├── index.html              # Tệp cấu trúc HTML chính của trang web
├── template_web_page.html  # Bản sao độc lập chứa cả CSS nhúng
├── style.css               # Tệp định dạng CSS bên ngoài
├── template_web_page.css   # Bản CSS đồng bộ
├── logo.png                # Ảnh logo thương hiệu Dev Academy
├── img.png                 # Ảnh minh họa laptop lập trình viên
└── README.md               # Tài liệu thuyết minh bài tập
```

---

## 💻 Cách Khởi Chạy & Kiểm Tra
1. Mở trực tiếp tệp `index.html` trong trình duyệt web (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc).
2. Cuộn chuột để trải nghiệm hiệu ứng **Sticky Navigation**.
3. Nhấp vào các liên kết trên Navbar (`#web`, `#program`, `#course`) để kiểm tra cuộn mượt đến từng phần.
4. Nhấn phím `F12` và chuyển sang chế độ thiết bị di động để kiểm tra khả năng co giãn linh hoạt (Responsive).

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
