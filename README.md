# GitProject

Dự án thực hành các thao tác cơ bản với Git và GitHub (CodeGym).

## Nhánh: `google-search-form`
Bài tập: **[Thực hành] Tạo một form tìm kiếm Google**.

### Các thuộc tính Form quan trọng:
1. `action="https://www.google.com.vn/search"`: URL của máy chủ Google tiếp nhận xử lý yêu cầu tìm kiếm.
2. `method="GET"`: Phương thức gửi dữ liệu qua URL (truy vấn hiển thị dạng `?q=từ-khóa`).
3. `name="q"`: Tên tham số bắt buộc để Google Search nhận diện nội dung từ khóa cần tra cứu.

### Trả lời câu hỏi mở rộng:
- **Nếu muốn sử dụng trang tìm kiếm của Bing thì làm thế nào?**
  - Đổi URL trong thuộc tính action sang của Bing: `action="https://www.bing.com/search"`
  - Giữ nguyên `method="GET"` và `name="q"`.
- **So sánh GET vs POST:**
  - `GET`: Gửi dữ liệu gắn trên thanh địa chỉ URL. Thích hợp cho tìm kiếm, lọc dữ liệu (idempotent, có thể bookmark).
  - `POST`: Gửi dữ liệu ẩn trong thân (body) của HTTP request, an toàn hơn và không giới hạn độ dài. Dùng cho đăng nhập, gửi mật khẩu, thanh toán.

### Cấu Trúc Thư Mục
```plaintext
GitProject/
├── README.md
├── index.html                   # Giao diện Form tìm kiếm Google & Bing trực quan
├── search.html                  # Bản sao trang tìm kiếm
├── google_search_simple.html    # Bản code tối giản theo đúng bài giảng
└── source/
    ├── index.html
    └── news.html
```

Tác giả: Vũ Đức Đạt (VuDucDat2006)
