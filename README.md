# GitProject

Dự án thực hành các thao tác cơ bản với Git, GitHub và CSS Box Model (CodeGym).

## Nhánh: `css-box-model-3`
Bài tập: **[Thực hành] Sử dụng Box Model 3**

### Nội dung thực hành:
- Khám phá các thuộc tính định dạng kích thước và bố cục:
  1. `box-sizing: border-box`: Đảm bảo `padding` và `border` được tính vào bên trong `width`/`height` đã khai báo, giúp phần tử `.d2` (có `padding: 30px`) giữ nguyên kích thước 150px × 80px tương đương `.d1`.
  2. `box-shadow`: Sử dụng giá trị spread radius `0 0 0 4px ...` để tạo đường viền màu giả lập mà không chiếm diện tích layout.
  3. `display: flex`: Căn chỉnh các phần tử con theo trục ngang trong khối cha `#demo`.
  4. `border-radius: 36%` và `border-radius: 6%`: Bo cong các góc.

### Cấu trúc file:
- `index.html`: Giao diện trực quan kèm phân tích chi tiết cơ chế hoạt động của `border-box`.
- `box_model_simple.html`: Mã nguồn mẫu nguyên bản theo đề bài.

Tác giả: Vũ Đức Đạt (VuDucDat2006)
