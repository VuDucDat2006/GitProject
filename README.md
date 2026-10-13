# [Bài tập] Phân Tích và Xây Dựng Cấu Trúc Website Template

- **Website thực tế được phân tích**: **MDN Web Docs** ([https://developer.mozilla.org](https://developer.mozilla.org))
- **Người thực hiện**: **Vũ Đức Đạt (VuDucDat2006)**
- **Khóa học**: Lập trình Web Front-End — CodeGym

---

## 🎯 Phần 1: Báo Cáo Phân Tích Cấu Trúc Trang Web Thực Tế (MDN Web Docs)

Trang web **MDN Web Docs** là cổng thông tin tài liệu chuẩn mực toàn cầu dành cho các nhà phát triển web. Qua khảo sát, cấu trúc của website được phân chia thành 4 thành phần chức năng chủ đạo:

### 1. Header (Đầu trang)
- **Vị trí**: Nằm ở phần trên cùng của toàn bộ trang web, trải dài 100% chiều ngang màn hình.
- **Nội dung hiển thị**:
  - Logo thương hiệu đặc trưng (`MDN` / `MDN Web Docs`).
  - Khẩu hiệu định vị: *"Resources for developers, by developers"*.
  - Thanh tìm kiếm tài liệu (`Search input`) và nút Đăng nhập / Chuyển đổi ngôn ngữ.
- **Vai trò UX**: Giúp người dùng ngay lập tức nhận diện thương hiệu, định hướng nội dung của trang và hỗ trợ tìm kiếm tài liệu nhanh mà không cần cuộn trang.

### 2. Navigation Menu (Thanh điều hướng)
- **Vị trí**: Nằm ngay bên dưới khối Header và được cấu hình bám dính cố định (`position: sticky; top: 0;`) khi người dùng cuộn chuột đọc tài liệu dài.
- **Nội dung hiển thị**: Gồm 6 liên kết điều hướng danh mục cấp 1:
  1. *Trang chủ (Home)*
  2. *HTML & CSS*
  3. *JavaScript*
  4. *Tài liệu Hướng dẫn (Guides & Tutorials)*
  5. *Cộng đồng (Community)*
  6. *Liên hệ (Contact)*
- **Vai trò UX**: Cung cấp lối tắt điều hướng thông suốt giữa các chủ đề lập trình cốt lõi, có hiệu ứng đổi màu chữ và gạch chân (`border-bottom`) khi rê chuột để phản hồi trực quan.

### 3. Content Section (Khu vực nội dung chính)
- **Vị trí**: Chiếm phần lớn diện tích trung tâm của trang web, nằm giữa Navigation Menu và Footer.
- **Bố cục kiến trúc (2-Column Responsive Layout)**:
  - **Cột chính (Main Content - 70% độ rộng)**:
    - Tiêu đề bài viết (`h1`, `h2`), huy hiệu chuyên mục, thông tin ngày cập nhật.
    - Đoạn văn bản phân tích chi tiết.
    - Sơ đồ kiến trúc cấu trúc web và ảnh chụp màn hình minh họa (`figure` & `figcaption`).
    - Lưới thẻ (Cards) phân tích tóm tắt 4 thành phần.
  - **Cột thanh bên (Sidebar - 30% độ rộng)**:
    - Mục lục truy cập nhanh theo từng đầu mục bài viết (Table of Contents).
    - Hộp lời khuyên cho nhà phát triển (Pro Tip).
    - Danh sách các công nghệ áp dụng.
- **Vai trò UX**: Phân cấp nội dung mạch lạc, người đọc dễ dàng vừa theo dõi nội dung chính vừa chuyển nhanh đến các phần phụ quan tâm qua mục lục bên cạnh.

### 4. Footer (Chân trang)
- **Vị trí**: Nằm ở đáy cùng của trang web, sử dụng tông màu tối (`#0f172a`) tương phản nhẹ với nền nội dung.
- **Nội dung hiển thị**:
  - Cột 1: Giới thiệu dự án và bản quyền pháp lý: `© 2026 MDN Web Docs Analysis. All rights reserved.`
  - Cột 2: Danh sách liên kết điều hướng nhanh (Quick Links).
  - Cột 3: Chính sách bảo mật, Điều khoản dịch vụ và Giấy phép.
  - Hàng chân trang: Tên tác giả thực hiện và bản quyền.
- **Vai trò UX**: Đóng khung trang web, tạo điểm kết thúc rõ ràng cho người đọc, cung cấp thông tin pháp lý bắt buộc và mở rộng kết nối với cộng đồng.

---

## 🛠️ Phần 2: Xây Dựng Lại Bố Cục Bằng HTML & CSS

Dựa trên kết quả phân tích ở Phần 1, chúng ta đã tiến hành xây dựng lại trang web với cấu trúc tương đồng:

### Các file mã nguồn
1. `index.html`: Cấu trúc HTML5 ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).
2. `style.css`: Bố cục CSS Grid 2 cột cho phần Content, Flexbox cho Header/Navbar/Footer, hiệu ứng hover và tính tương thích Responsive trên thiết bị di động.
3. `images/structure_diagram.png`: Sơ đồ kiến trúc 4 khối website.
4. `images/original_website_screenshot.png`: Ảnh chụp màn hình trang web gốc MDN Web Docs.

---

## 📊 Bảng Đối Chiếu Yêu Cầu Đề Bài

| Tiêu chí đề bài | Tình trạng | Chi tiết thực hiện |
| :--- | :---: | :--- |
| **Phân tích trang web thực tế** | Hoàn thành | Đã phân tích chi tiết trang MDN Web Docs theo 4 phần: Header, Nav, Content, Footer |
| **Header chứa tiêu đề trang** | Hoàn thành | `<header>` chứa Logo `MDN` và tiêu đề `MDN Web Docs - Cấu Trúc Website Template` |
| **Navigation có ít nhất 4 mục** | Hoàn thành | `<nav>` có 6 mục: *Trang chủ*, *HTML & CSS*, *JavaScript*, *Tài liệu*, *Cộng đồng*, *Liên hệ* |
| **Content gồm văn bản và hình ảnh**| Hoàn thành | `<main>` gồm bài viết phân tích, thẻ Card, sơ đồ cấu trúc và ảnh chụp màn hình |
| **Footer chứa bản quyền** | Hoàn thành | `<footer>` gồm thông tin bản quyền © 2026, điều khoản dịch vụ và thông tin sinh viên |
| **CSS bố trí gọn gàng** | Hoàn thành | Bố cục CSS Grid 2 cột, Flexbox căn chỉnh, Sticky navbar, Responsive mobile |
| **Đính kèm ảnh chụp màn hình gốc** | Hoàn thành | Đã xuất ảnh `images/original_website_screenshot.png` đính kèm trực tiếp trong trang |
