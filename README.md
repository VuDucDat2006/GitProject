# [Thực hành] Tạo menu dọc (Vertical Dropdown Menu)

Dự án thực hành thiết kế trình đơn điều hướng dạng dọc nhiều cấp (Vertical Multi-level Dropdown Menu / Flyout Menu) bằng HTML và CSS thuần.

## 📌 Nội Dung & Yêu Cầu Kỹ Thuật
1. **Cấu trúc HTML**:
   - Sử dụng phần tử \<div id="menu">\ chứa các danh sách không có thứ tự (\ul\, \li\) lồng nhau.
   - Thẻ liên kết \<a>\ bên trong mỗi \<li>\ để điều hướng.
2. **Kỹ thuật định vị Dropdown với CSS**:
   - \#menu ul li\: Thiết lập \position: relative;\ làm mốc toạ độ tham chiếu cho menu con.
   - \#menu ul li ul\: Thiết lập \position: absolute; top: 0; left: 140px;\ để neo menu con ngay cạnh phải của mục cha tương ứng.
   - Ẩn menu con mặc định bằng \isibility: hidden;\ và \opacity: 0;\.
   - Hiển thị menu con khi di chuột bằng bộ chọn pseudo-class: \#menu ul li:hover > ul { visibility: visible; opacity: 1; }\.
3. **Định dạng hiển thị**:
   - \list-style: none;\: Xóa bỏ dấu chấm tròn đầu dòng.
   - \line-height: 35px;\: Canh giữa văn bản theo chiều cao dòng.
   - \cursor: pointer;\: Hiển thị con trỏ dạng bàn tay khi tương tác.
   - Hiệu ứng chuyển màu mượt mà (\	ransition: background-color 0.25s\) khi hover.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Toàn bộ mã nguồn HTML5 và CSS định dạng menu dọc
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Di chuột qua mục **Khóa học** hoặc **Dịch vụ** để quan sát menu con trượt ra mượt mà bên phải.
- Xem trực tiếp trên GitHub: [Vertical Dropdown Menu](https://github.com/VuDucDat2006/GitProject/tree/vertical-dropdown-menu)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
