# [Bài tập] Thiết kế Trang Đăng Ký với Bootstrap Forms

Dự án bài tập thực hành áp dụng toàn diện hệ thống **Bootstrap Forms**, **Buttons**, **Grid Controls** và **Text Utilities** của framework Bootstrap 5.3 để xây dựng một trang web đăng ký tài khoản người dùng chuyên nghiệp, chuẩn thẩm mỹ UI/UX và tương thích Responsive mượt mà trên cả máy tính (Desktop) và thiết bị di động (Mobile).

---

## 🎯 Mục Tiêu Bài Tập
- Luyện tập sử dụng **Bootstrap Forms** để tạo khung nhập liệu người dùng chuẩn xác.
- Áp dụng các điều khiển biểu mẫu: `form-control`, `form-select`, `form-check`, `form-check-input`, `form-check-label`.
- Sử dụng **Bootstrap Buttons** (`btn btn-primary btn-lg`, `btn-outline-secondary`) để làm nổi bật lời kêu gọi hành động gửi dữ liệu.
- Định dạng **Bootstrap Text** (`text-muted`, `text-center`, `form-text`, `fw-semibold`, v.v.) để gia tăng tính trực quan và hướng dẫn người dùng.
- Tích hợp đầy đủ 8 trường nhập liệu theo yêu cầu và cơ chế kiểm tra tính hợp lệ dữ liệu (Client-side Form Validation).

---

## 📋 Danh Sách 8 Trường Nhập Liệu Bắt Buộc

| STT | Trường thông tin | Loại phần tử HTML & Class Bootstrap | Mô tả chi tiết |
| :---: | :--- | :--- | :--- |
| **1** | **Họ và tên** | `<input type="text" class="form-control">` | Ô nhập văn bản tên người dùng kèm nhãn `form-label` |
| **2** | **Email** | `<input type="email" class="form-control">` | Ô nhập email chuẩn, có dòng ghi chú bảo mật `form-text text-muted` |
| **3** | **Mật khẩu** | `<input type="password" class="form-control">` | Ô nhập mật khẩu bảo mật (tối thiểu 8 ký tự) |
| **4** | **Xác nhận mật khẩu** | `<input type="password" class="form-control">` | Ô nhập lại mật khẩu kiểm tra trùng khớp |
| **5** | **Giới tính** | `<input type="radio" class="form-check-input">` | Lựa chọn 1 trong 3 giới tính: *Nam*, *Nữ*, *Khác* (`form-check`) |
| **6** | **Sở thích** | `<input type="checkbox" class="form-check-input">` | Hộp chọn nhiều sở thích: *Lập trình*, *Đọc sách*, *Âm nhạc*, *Thể thao* |
| **7** | **Quốc gia** | `<select class="form-select">` | Menu thả xuống lựa chọn quốc gia (*Việt Nam*, *Hoa Kỳ*, *Nhật Bản*, v.v.) |
| **8** | **Nút Submit** | `<button type="submit" class="btn btn-primary btn-lg">` | Nút bấm gửi form kích thước lớn, màu xanh nổi bật |

---

## 🏛️ Bảng Phân Tích Kỹ Thuật Bootstrap Form Controls

| Class Bootstrap | Vị trí sử dụng | Tác dụng kỹ thuật |
| :--- | :--- | :--- |
| `.form-control` | Thẻ `<input>` | Định dạng chiều rộng 100%, bo tròn góc, viền xám nhạt và hiệu ứng phát sáng xanh khi kích hoạt (Focus) |
| `.form-select` | Thẻ `<select>` | Tạo hộp lựa chọn Dropdown có biểu tượng mũi tên chỉ xuống chuẩn hóa đa trình duyệt |
| `.form-label` | Thẻ `<label>` | Khoảng cách margin lề dưới chuẩn giữa nhãn và trường nhập |
| `.form-check` | Thẻ `<div>` bọc | Khung chứa nhóm Radio hoặc Checkbox |
| `.form-check-input` | Thẻ `<input>` | Tùy biến nút chọn tròn hoặc vuông sắc nét, đổi màu xanh khi Checked |
| `.form-check-label` | Thẻ `<label>` | Nhãn đi kèm nút chọn, cho phép nhấp chuột vào chữ để kích hoạt |
| `.form-text .text-muted` | Thẻ `<div>` / `<small>` | Dòng văn bản ghi chú hướng dẫn phụ mờ bên dưới ô nhập |
| `.btn .btn-primary` | Thẻ `<button>` | Nút bấm giao diện phẳng hiện đại, chuyển màu và đổ bóng khi hover |
| `.needs-validation` | Thẻ `<form>` | Kích hoạt bộ giao diện phản hồi trạng thái hợp lệ / không hợp lệ của Bootstrap |

---

## 📁 Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Mã nguồn Form đăng ký đầy đủ 8 trường & kịch bản xác thực
├── style.css        # Tùy biến thẩm mỹ: Google Font Plus Jakarta Sans, Soft Shadow, Gradient Card Header
└── README.md        # Tài liệu thuyết minh dự án và hướng dẫn kiểm tra
```

---

## 🔍 Hướng Dẫn Kiểm Tra & Chạy Thử
1. **Mở trực tiếp trên Trình duyệt**: Mở file `index.html` bằng trình duyệt web bất kỳ.
2. **Kiểm tra trên Desktop**:
   - Card đăng ký được căn giữa trang sang trọng (`justify-content-center`, `col-lg-8`).
   - Mật khẩu và Xác nhận mật khẩu dàn thành 2 cột ngang đều nhau (`row g-3`).
   - Kiểm tra các trường: Radio giới tính (chọn 1), Checkbox sở thích (chọn nhiều), Dropdown quốc gia.
3. **Kiểm tra chức năng Xác thực dữ liệu (Validation)**:
   - Thử bấm **Đăng Ký Tài Khoản** khi chưa điền dữ liệu $\rightarrow$ Trình duyệt hiển thị cảnh báo đỏ viền các trường thiếu thông tin.
   - Thử nhập 2 mật khẩu khác nhau $\rightarrow$ Hệ thống cảnh báo *Mật khẩu không khớp*.
   - Nhập đầy đủ thông tin hợp lệ $\rightarrow$ Hệ thống hiển thị hộp thông báo xanh **🎉 Đăng ký thành công!**.
4. **Kiểm tra trên Mobile**:
   - Bấm `F12` $\rightarrow$ `Ctrl + Shift + M` để chuyển sang chế độ điện thoại.
   - Form tự động co giãn 100% màn hình, các trường mật khẩu tự xếp dọc dễ thao tác ngón tay.

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development  
**Nhánh GitHub:** [bootstrap-registration-form](https://github.com/VuDucDat2006/GitProject/tree/bootstrap-registration-form)
