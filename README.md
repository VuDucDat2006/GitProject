# [Thực hành] Xây dựng bố cục trang web với CSS Grid

Dự án thực hành sử dụng **CSS Grid** (`grid-template-areas`, `grid-template-columns`, `grid-template-rows`) để tạo bố cục trang web 3 phần hoàn chỉnh (Header, Sidebar + Main Content, Footer) chuẩn Responsive hiển thị mượt mà trên cả Desktop và Mobile.

---

## 📌 1. Yêu Cầu Kỹ Thuật & Cấu Trúc Bố Cục

### Các Phân Vùng Chức Năng:
- **`header`**: Tiêu đề trang, hiển thị nổi bật ở đầu trang web.
- **`sidebar`**: Thanh điều hướng bên trái chứa danh sách liên kết.
- **`content`**: Khu vực nội dung chính của trang web.
- **`footer`**: Chân trang hiển thị thông tin bản quyền và tác giả.

---

## 🏛️ 2. Kiến Trúc CSS Grid & Media Queries

### Màn hình Máy tính (Desktop > 768px):
```css
.container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header"
        "sidebar content"
        "footer footer";
    height: 100vh;
}
```
- `grid-template-columns: 1fr 3fr;`: Sidebar chiếm 1 phần (25%), Content chiếm 3 phần (75%).
- `grid-template-rows: auto 1fr auto;`: Header và Footer có chiều cao theo nội dung (`auto`), Content và Sidebar chiếm toàn bộ chiều cao còn lại (`1fr`).
- `height: 100vh`: Khung container bao trọn chiều cao màn hình, Footer luôn cố định ở đáy.

### Màn hình Thiết bị Di động (Mobile &le; 768px):
```css
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto;
        grid-template-areas: 
            "header"
            "sidebar"
            "content"
            "footer";
        height: auto;
        min-height: 100vh;
    }
}
```
- Lưới chuyển sang 1 cột duy nhất (`1fr`), các phần tử xếp chồng dọc theo thứ tự tự nhiên: **Header &rarr; Sidebar &rarr; Content &rarr; Footer**.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Cấu trúc HTML ngữ nghĩa (header, nav.sidebar, main.content, footer)
├── style.css        # Hệ thống định dạng CSS Grid và Media Queries
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. Kiểm tra giao diện:
   - **Trên Desktop (> 768px)**: Header và Footer trải dài 100%, Sidebar và Content chia tỷ lệ 1:3 nằm song song.
   - **Trên Mobile (&le; 768px)**: Mở công cụ kiểm tra (`F12`), chuyển chế độ Mobile (`Ctrl + Shift + M`) để quan sát bố cục tự động xếp chồng dọc thông minh.
3. Chụp ảnh màn hình cả 2 chế độ (Desktop và Mobile) để nộp bài.
4. Xem mã nguồn trên GitHub: [CSS Grid Website Layout](https://github.com/VuDucDat2006/GitProject/tree/css-grid-website-layout)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
