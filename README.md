# [Bài tập] Tạo bố cục responsive bằng CSS Flexbox

Dự án bài tập thực hành áp dụng toàn diện **CSS Flexbox** (`display: flex`, `flex-direction`, `flex: 3`, `flex: 1`, `flex-wrap`) để xây dựng một bố cục trang web hoàn chỉnh gồm 5 phân vùng chức năng, tự động thích ứng mượt mà trên cả máy tính (Desktop) và điện thoại di động (Mobile).

---

## 📌 1. Các Phân Vùng Chức Năng Bắt Buộc
1. **Header (`.header`)**: Hiển thị Logo, tên thương hiệu và tiêu đề trang.
2. **Navigation (`.navigation`)**: Thanh menu điều hướng responsive chứa các chuyên mục chính (*Trang chủ, Tin công nghệ, CSS Flexbox, Thực hành, Giới thiệu, Liên hệ*).
3. **Main Content (`.main-content`)**: Khu vực hiển thị nội dung chính với bài viết nổi bật, banner hình ảnh và kiến thức Flexbox.
4. **Sidebar (`.sidebar`)**: Thanh bên chứa các nội dung phụ gồm:
   - 🔥 Tin mới nhất
   - 🎓 Khóa học tiêu biểu
   - 🚀 Khối quảng cáo (Banner Ad)
5. **Footer (`.footer`)**: Chân trang hiển thị thông tin bản quyền và tác giả.

---

## 🏛️ 2. Kiến Trúc CSS Flexbox & Cơ Chế Responsive

### Màn hình Máy tính (Desktop > 768px):
```css
.flex-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-body {
    display: flex;
    gap: 20px;
    flex: 1;
}

.main-content {
    flex: 3; /* Chiếm 3 phần (75%) chiều ngang */
}

.sidebar {
    flex: 1; /* Chiếm 1 phần (25%) chiều ngang */
    min-width: 280px;
}
```
- Khung tổng thể `.flex-layout` xếp dọc theo `flex-direction: column`.
- Khung thân trang `.main-body` xếp theo hàng ngang, chia tỷ lệ 3 : 1 giữa Main Content và Sidebar.

### Màn hình Thiết bị Di động (Mobile &le; 768px):
```css
@media (max-width: 768px) {
    .main-body {
        flex-direction: column;
    }

    .nav-menu {
        flex-direction: column;
    }
}
```
- `.main-body` tự động chuyển sang xếp dọc (`flex-direction: column`).
- Toàn bộ 5 khối xếp chồng dọc gọn gàng theo thứ tự từ trên xuống dưới: **Header &rarr; Navigation &rarr; Main Content &rarr; Sidebar &rarr; Footer**.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Cấu trúc HTML ngữ nghĩa (header, nav, main-body, main, aside, footer)
├── style.css        # Hệ thống định dạng CSS Flexbox và Media Queries
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. Kiểm tra giao diện:
   - **Chế độ Desktop (> 768px)**: Header, Nav ngang, Main Content và Sidebar song song (3:1), Footer ở đáy.
   - **Chế độ Mobile (&le; 768px)**: Nhấn `F12` và bật Device Toolbar (`Ctrl + Shift + M`) để quan sát giao diện tự động chuyển thành 1 cột dọc thông minh.
3. Xem mã nguồn trên GitHub: [Responsive Flexbox Layout](https://github.com/VuDucDat2006/GitProject/tree/responsive-flexbox-layout)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
