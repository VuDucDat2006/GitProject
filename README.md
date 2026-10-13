# [Bài tập] Tạo bố cục Responsive bằng CSS Grid

Dự án bài tập thực hành áp dụng toàn diện **CSS Grid Layout** (`grid-template-areas`, `grid-template-columns`, `grid-template-rows`) để xây dựng một bố cục trang web hoàn chỉnh gồm 5 phân vùng chức năng, tự động thích ứng mượt mà trên cả máy tính (Desktop) và điện thoại di động (Mobile).

---

## 📌 1. Các Phân Vùng Chức Năng Bắt Buộc

1. **Header (`.header`)**: Hiển thị Logo, tên trang web và tiêu đề chào mừng.
2. **Navigation (`.navigation`)**: Thanh menu điều hướng các chuyên mục chính (*Trang chủ, Tin tức, HTML5 & CSS3, Hướng dẫn, Liên hệ*).
3. **Main Content (`.main-content`)**: Khu vực hiển thị nội dung chính với bài viết nổi bật, hình ảnh banner và kiến thức CSS Grid.
4. **Sidebar (`.sidebar`)**: Thanh bên chứa các khối nội dung phụ gồm:
   - 🔥 Tin tức mới nhất
   - 🎓 Khóa học nổi bật
   - 🚀 Khối quảng cáo (Banner Ad)
5. **Footer (`.footer`)**: Chân trang hiển thị thông tin bản quyền và tác giả.

---

## 🏛️ 2. Kiến Trúc CSS Grid & Cơ Chế Responsive

### Màn hình Máy tính (Desktop > 768px):
```css
.grid-layout {
    display: grid;
    grid-template-columns: 1fr 320px;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        "header  header"
        "nav     nav"
        "main    sidebar"
        "footer  footer";
    gap: 20px;
}
```
- Header và Navigation trải rộng toàn bộ chiều ngang trang web.
- Main Content (chiếm `1fr`) và Sidebar (cố định `320px`) nằm cạnh nhau song song.
- Footer chiếm trọn 2 cột ở dưới cùng.

### Màn hình Thiết bị Di động (Mobile &le; 768px):
```css
@media (max-width: 768px) {
    .grid-layout {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto auto;
        grid-template-areas:
            "header"
            "nav"
            "main"
            "sidebar"
            "footer";
        gap: 15px;
    }
}
```
- Lưới tự động chuyển về **1 cột duy nhất** (`1fr`).
- Toàn bộ 5 khối xếp chồng dọc gọn gàng theo thứ tự từ trên xuống dưới, tối ưu thao tác vuốt chạm trên màn hình nhỏ.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Cấu trúc HTML ngữ nghĩa (header, nav, main, aside, footer)
├── style.css        # Hệ thống CSS Grid Layout và Media Queries
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên trình duyệt web bất kỳ (Chrome, Edge, Firefox).
2. Kiểm tra giao diện:
   - **Chế độ Desktop (> 768px)**: Bố cục lưới hiển thị Header, Menu ngang, Main Content và Sidebar song song, Footer phía dưới.
   - **Chế độ Mobile (&le; 768px)**: Nhấn `F12` và chọn chế độ Device Toolbar (`Ctrl + Shift + M`) để quan sát bố cục tự động xếp chồng dọc thông minh.
3. Xem mã nguồn trên GitHub: [Responsive Grid Layout](https://github.com/VuDucDat2006/GitProject/tree/responsive-grid-layout)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
