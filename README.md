# GitProject

Dự án thực hành các thao tác cơ bản với Git, GitHub và CSS Box Model (CodeGym).

## Nhánh: `box-model-layout-cards`
Bài tập: **[Bài tập] Sử dụng Box Model 1 - Xây dựng bố cục với Mô hình hộp CSS**

### Mục tiêu:
- Nắm vững sự khác biệt giữa `box-sizing: content-box` và `box-sizing: border-box`.
- Tạo 3 phần tử `div` có class `.card` với các thuộc tính:
  - `width: 280px; height: 150px;`
  - `padding: 20px;`
  - `border: 5px solid #3498db;`
  - `margin: 20px;`
- Thiết lập riêng cho từng thẻ:
  - **Thẻ 1 (`.card:nth-child(1)`)**: `box-sizing: content-box; background-color: #2ecc71;` (Tổng kích thước hiển thị: 330px × 200px).
  - **Thẻ 2 (`.card:nth-child(2)`)**: `box-sizing: border-box; background-color: #f1c40f;` (Tổng kích thước hiển thị: 280px × 150px).
  - **Thẻ 3 (`.card:nth-child(3)`)**: `box-sizing: border-box; background-color: #e74c3c;` (Tổng kích thước hiển thị: 280px × 150px).

### Cấu trúc file:
- `index.html`: Cấu trúc tài liệu HTML gồm 3 thẻ card và bảng so sánh kích thước computed.
- `style.css`: Quy tắc CSS theo đúng đặc tả của bài tập.

Tác giả: Vũ Đức Đạt (VuDucDat2006)
