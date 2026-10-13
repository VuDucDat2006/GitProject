# [Bài tập] Tạo layout với RWD (Responsive Web Design)

Dự án bài tập thực hành xây dựng bố cục trang web chuẩn **Responsive Web Design (RWD)** bằng cách kết hợp thẻ <div> và CSS, dựa trên mô hình hệ thống lưới 12 cột (12-Column Grid System) kinh điển (chủ đề du lịch thành phố Chania).

---

## 📌 1. Mục Tiêu & Yêu Cầu Kỹ Thuật
- **HTML Layout**: Sử dụng các thẻ <div> với các class phân vùng rõ ràng (header, ow, col-3, col-6, menu, main-content, side, ooter).
- **Hệ Thống Lưới 12 Cột**: Xây dựng bộ quy tắc CSS chia trang thành 12 cột đều nhau từ .col-1 đến .col-12.
- **Mô Hình Hộp Chuẩn**: Bắt buộc áp dụng ox-sizing: border-box trên toàn bộ phần tử (*) để độ rộng cột không bị phình to khi thêm padding và order.
- **Kỹ Thuật Xếp Khối (Floats) & Xóa Nổi (Clearfix)**: Áp dụng loat: left cho tất cả các cột [class*=col-] và Clearfix hiện đại (.row::after { content: "; clear: both; display: table; }) để container không bị sụp chiều cao.
- **Tính Năng Responsive (RWD)**: Sử dụng Media Queries @media only screen and (max-width: 768px) để tự động chuyển tất cả các cột sang xếp dọc (width: 100%) khi hiển thị trên các màn hình nhỏ (Tablet, Smartphone).

---

## 🏛️ 2. Bố Cục Trang Web (Desktop vs. Mobile)

### Màn hình Máy tính (Desktop / Màn hình rộng > 768px)
| Phân vùng | Class CSS | Tỷ lệ cột / Độ rộng | Màu sắc & Nội dung |
| :--- | :--- | :--- | :--- |
| **Đầu trang** | .header | width: 100% | Màu tím #9933cc, chữ trắng: tiêu đề **Chania** |
| **Menu điều hướng** | .col-3 .menu | 3/12 cột = 25% | Danh sách liên kết: *The Flight*, *The City*, *The Island*, *The Food* |
| **Nội dung chính** | .col-6 .main-content | 6/12 cột = 50% | Giới thiệu thành phố Chania, đảo Crete và giải thích cơ chế RWD |
| **Thông tin phụ** | .col-3 .right .aside | 3/12 cột = 25% | Hộp nền xanh #33b5e5: *What?*, *Where?*, *How?* |
| **Chân trang** | .footer | width: 100% | Màu xanh #0099cc, hướng dẫn co dãn cửa sổ và bản quyền học viên |

### Màn hình Thiết bị Di động (Mobile / Màn hình nhỏ <= 768px)
- Tất cả các cột [class*=col-] tự động co giãn về **width: 100%**.
- Thứ tự hiển thị cuộn dọc mượt mà từ trên xuống dưới: Header &rarr; Menu dọc &rarr; Nội dung chính &rarr; Khối Aside &rarr; Footer.

---

## 🛠️ 3. Cấu Trúc Thư Mục
`plaintext
GitProject/
├── index.html # Mã nguồn HTML5 chuẩn cấu trúc 12-column grid
├── style.css # Hệ thống CSS 12-column grid system & Media Query
└── README.md # Hướng dẫn chi tiết dự án và kiến trúc RWD
`

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Bố Cục
1. Mở file index.html trực tiếp trên bất kỳ trình duyệt web nào (Chrome, Edge, Firefox).
2. Thay đổi kích thước cửa sổ trình duyệt (kéo to / thu nhỏ chiều ngang) hoặc nhấn phím F12 và chuyển sang chế độ **Responsive Design Mode** / Device Toolbar (Ctrl + Shift + M) để kiểm tra giao diện trên các kích thước:
 - **Desktop / Laptop** (> 768px): Bố cục 3 cột thẳng hàng ngang cân đối.
 - **Tablet / Mobile** (<= 768px): Bố cục tự động chuyển sang 1 cột xếp dọc dễ thao tác.
3. Link mã nguồn trên GitHub: [Responsive Web Design Layout (RWD)](https://github.com/VuDucDat2006/GitProject/tree/responsive-web-design-layout)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006) 
**Khóa học:** CodeGym Web Development
