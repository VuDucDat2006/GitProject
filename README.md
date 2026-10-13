# [Bài tập] Thiết kế Trang Web với Bootstrap Grid System

Dự án bài tập áp dụng hệ thống **Bootstrap Containers** và **Grid System** để xây dựng một bố cục trang web responsive 2 cột chuyên nghiệp, hiển thị tối ưu trên mọi kích thước màn hình. Trang web gồm 5 phân vùng chức năng cốt lõi: **Header**, **Navbar (có Dropdown)**, **Main Content**, **Sidebar** và **Footer**.

---

## 🎯 Mục Tiêu Bài Tập
- Luyện tập sử dụng **Bootstrap Containers** (`container` / `container-fluid`) để giới hạn và cân bằng chiều rộng nội dung trang web.
- Vận dụng thành thạo **Bootstrap Grid System** (`row`, `col-*`) để chia cột layout:
  - **Trên Desktop ($\ge 992\text{px}$)**: Hiển thị 2 cột song song với tỷ lệ vàng $8 : 4$ (**Main Content**: `col-lg-8`, **Sidebar**: `col-lg-4`).
  - **Trên Mobile ($< 992\text{px}$)**: Hai khối tự động chuyển thành chiều rộng đầy đủ 100% (**col-12**), trong đó Sidebar nằm gọn gàng bên dưới Main Content.
- Áp dụng **Bootstrap Navbar** tích hợp menu đa cấp xổ xuống (**Dropdown**) và nút thu gọn (**Hamburger toggler**) trên thiết bị di động.
- Đảm bảo tính thích ứng (Responsive) mượt mà trên toàn bộ các kích thước màn hình (Desktop, Tablet, Mobile).

---

## 🏛️ Kiến Trúc Bootstrap Grid System Trong Dự Án

### 1. Phân chia Cột Layout chính
```html
<div class="container my-5">
    <div class="row g-4">
        <!-- Cột chính: Chiếm 8 phần trên Desktop (>=992px), 12 phần trên Mobile -->
        <main class="col-12 col-lg-8" id="main-content">
            ...
        </main>

        <!-- Cột phụ Sidebar: Chiếm 4 phần trên Desktop (>=992px), 12 phần trên Mobile -->
        <aside class="col-12 col-lg-4" id="sidebar">
            ...
        </aside>
    </div>
</div>
```

### 2. Bảng Phân Tích Cơ Chế Breakpoints
| Thành phần | Class áp dụng | Desktop ($\ge 992\text{px}$ - `lg`) | Mobile / Tablet ($< 992\text{px}$) |
| :--- | :--- | :--- | :--- |
| **Bao bọc** | `.container` | Giới hạn chiều rộng tối đa (1140px/1320px) căn giữa | Co giãn 100% có khoảng cách đệm lề 2 bên |
| **Hàng ngang** | `.row .g-4` | Kích hoạt CSS Flexbox với gutter khoảng cách 24px | Tự động xếp các cột con thành nhiều dòng |
| **Main Content** | `.col-12 .col-lg-8` | Chiếm **8 / 12** cột (66.67% chiều ngang) | Chiếm **12 / 12** cột (100% chiều ngang, nằm trên) |
| **Sidebar** | `.col-12 .col-lg-4` | Chiếm **4 / 12** cột (33.33% chiều ngang) | Chiếm **12 / 12** cột (100% chiều ngang, nằm dưới) |
| **Navbar** | `.navbar-expand-lg` | Dàn ngang toàn bộ liên kết và menu Dropdown | Thu gọn lại thành nút Hamburger icon 3 gạch |

---

## 🛠️ Cấu Trúc 5 Phân Vùng Chức Năng
1. **Header (`site-header`)**: Tiêu đề trang web, badge nhận diện và thông điệp giới thiệu chuyên trang công nghệ.
2. **Navbar (`navbar navbar-expand-lg navbar-dark bg-dark`)**:
   - Logo thương hiệu TechPortal.
   - Menu điều hướng với Dropdown danh mục (*Công Nghệ, Lập Trình Web, Bootstrap 5 Grid, Thiết Kế UI/UX*).
   - Form tìm kiếm nhanh.
3. **Main Content (`col-12 col-lg-8`)**:
   - Bài viết tiêu điểm: *Làm Chủ Hệ Thống Lưới Bootstrap Grid System Từ Con Số 0*.
   - Lưới lồng nhau (**Nested Grid**: `row g-3` với `col-sm-6`) minh họa tính linh hoạt của Bootstrap.
   - Bảng phân tích chi tiết thông số kỹ thuật Grid System.
4. **Sidebar (`col-12 col-lg-4`)**:
   - Hộp tìm kiếm thông tin nhanh.
   - Danh sách chuyên mục nổi bật với huy hiệu số lượng (`list-group-item` + `badge`).
   - Top bài viết đọc nhiều nhất.
   - Thẻ tác giả (Author Card) thông tin học viên thực hiện.
5. **Footer (`site-footer`)**: Chân trang cố định chứa thông tin bản quyền và tác giả.

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn HTML bố cục 2 cột Bootstrap Grid System & Navbar Dropdown
├── style.css        # Tùy biến thẩm mỹ: Google Font Plus Jakarta Sans, Gradient, Sticky Sidebar
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Cốc Cốc).
2. **Kiểm tra trên màn hình lớn Desktop ($\ge 992\text{px}$)**:
   - Thanh Navbar dàn ngang đầy đủ các mục; bấm vào mục **Chuyên Mục** để kiểm tra menu xổ xuống (**Dropdown**).
   - Khung nội dung chia thành 2 cột cân đối: **Main Content (66.7%)** bên trái và **Sidebar (33.3%)** bên phải.
   - Sidebar được cố định dính thông minh (`position: sticky; top: 80px`) khi người dùng cuộn chuột.
3. **Kiểm tra trên màn hình nhỏ Mobile ($< 992\text{px}$)**:
   - Nhấn phím `F12` $\rightarrow$ Nhấn tổ hợp `Ctrl + Shift + M` để bật Device Mode.
   - Navbar tự động thu gọn lại thành biểu tượng nút bấm Hamburger 3 gạch $\rightarrow$ Click để mở menu.
   - Toàn bộ layout chuyển thành 1 cột dọc: **Main Content nằm trên** và **Sidebar nằm gọn gàng ngay phía dưới** (đều chiếm `col-12` 100% chiều ngang).

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-grid-layout](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-grid-layout)
