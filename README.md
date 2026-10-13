# [Thực hành] Xây dựng bố cục trang web với CSS Flexbox

Dự án thực hành sử dụng **CSS Flexbox** (`flex-direction`, `flex: 3`, `flex: 1`) để xây dựng một bố cục trang web hoàn chỉnh, linh hoạt và đáp ứng chuẩn Responsive hiển thị mượt mà trên cả máy tính (Desktop) và điện thoại di động (Mobile).

---

## 📌 1. Các Phân Vùng Chức Năng Bố Cục
1. **Header (`.header`)**: Hiển thị tiêu đề trang web ở phía trên cùng.
2. **Navigation (`.nav`)**: Thanh menu điều hướng với các liên kết chính.
3. **Main Container (`.main-container`)**: Khung chứa Flexbox linh hoạt bao bọc cả Content và Sidebar.
   - **Main Content (`.content`)**: Khu vực nội dung chính chiếm phần lớn diện tích (`flex: 3`).
   - **Sidebar (`.sidebar`)**: Thanh nội dung phụ chứa tin tức và tiện ích (`flex: 1`).
4. **Footer (`.footer`)**: Chân trang hiển thị thông tin bản quyền và tác giả.

---

## 🏛️ 2. Kiến Trúc CSS Flexbox & Cơ Chế Responsive

### Màn hình Máy tính (Desktop > 768px):
```css
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.main-container {
    display: flex;
    flex: 1;
}

.content {
    flex: 3; /* Chiếm 3/4 (75%) chiều rộng */
    padding: 20px;
}

.sidebar {
    flex: 1; /* Chiếm 1/4 (25%) chiều rộng */
    background-color: #f4f4f4;
    padding: 20px;
}
```
- Khung `.container` xếp dọc từ trên xuống dưới theo `flex-direction: column`.
- Khung giữa `.main-container` mang `flex: 1` để co dãn chiếm toàn bộ chiều cao còn lại của màn hình (`height: 100vh`), giúp Footer luôn ở đáy.
- Main Content và Sidebar chia tỷ lệ $3 : 1$ theo hàng ngang.

### Màn hình Thiết bị Di động (Mobile &le; 768px):
```css
@media (max-width: 768px) {
    .container {
        height: auto;
        min-height: 100vh;
    }

    .main-container {
        flex-direction: column;
    }
}
```
- Khi màn hình nhỏ hơn hoặc bằng 768px, `.main-container` chuyển sang xếp dọc (`flex-direction: column`).
- Sidebar tự động chuyển xuống dưới Main Content, tạo trải nghiệm cuộn trang tự nhiên và dễ thao tác trên smartphone.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Cấu trúc HTML (header, nav, main-container, content, sidebar, footer)
├── style.css        # Hệ thống CSS Flexbox và Media Queries
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. Kiểm tra giao diện:
   - **Desktop (> 768px)**: Header và Nav trải rộng 100%, Content và Sidebar nằm song song tỷ lệ 3:1, Footer nằm ở chân trang.
   - **Mobile (&le; 768px)**: Nhấn `F12` và chọn chế độ Device Toolbar (`Ctrl + Shift + M`) để quan sát Sidebar tự động xếp xuống dưới Content.
3. Chụp ảnh màn hình cả 2 chế độ (Desktop và Mobile) để nộp bài.
4. Xem mã nguồn trên GitHub: [CSS Flexbox Website Layout](https://github.com/VuDucDat2006/GitProject/tree/css-flexbox-website-layout)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
