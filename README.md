# [Thực hành] Tạo bố cục cơ bản (Basic Website Layout)

Dự án thực hành sử dụng thẻ \<div>\ kết hợp CSS để xây dựng bố cục trang web 3 cột kinh điển bao gồm các phân vùng: \#main\, \#head\, \#head-link\, \#left\, \#content\, \#right\ và \#footer\.

## 📌 Phân Vùng Chức Năng Bố Cục
1. **\#main\**: Khối bao bọc toàn bộ nội dung, cố định độ rộng (\980px\) và căn giữa màn hình (\margin: 0 auto;\).
2. **\#head\**: Phân vùng đầu trang (\height: 110px;\, Logo & Banner).
3. **\#head-link\**: Phân vùng chứa thanh menu liên kết đầu trang (\Home\, \Students\, \Courses\, \News\, \About\, \Contact\).
4. **\#left\**: Phân vùng bên trái (\width: 200px;\, \min-height: 520px;\, \loat: left;\) chứa menu danh mục.
5. **\#content\**: Phân vùng nội dung chính (\width: 530px;\, \min-height: 520px;\, \loat: left;\) chứa Hot news, Photo slide, các bản tin chi tiết.
6. **\#right\**: Phân vùng bên phải (\width: 210px;\, \min-height: 520px;\, \loat: left;\) chứa Lịch học, Biểu đồ thống kê và thông tin học viên.
7. **\#footer\**: Phân vùng cuối trang với thuộc tính \clear: both;\ để xóa float và đẩy xuống dưới ôm trọn 3 cột.

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Cấu trúc HTML5 phân vùng với các ID chuẩn
├── style.css        # Hệ thống định dạng CSS bố cục
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Quan sát trang web hiển thị chuẩn xác đầy đủ 6 phân vùng: đầu trang, thanh liên kết, 3 cột nội dung ở giữa và chân trang.
- Xem trực tiếp trên GitHub: [Basic Website Layout](https://github.com/VuDucDat2006/GitProject/tree/basic-website-layout)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
