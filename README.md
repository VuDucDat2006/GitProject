# [Bài tập] Phát triển trang web xem hoạt hình trực tuyến (KidCartoon HD)

Dự án website xem phim hoạt hình trực tuyến chuyên biệt dành cho trẻ em với tiêu chuẩn nội dung an toàn, không quảng cáo, thuyết minh tiếng Việt, chất lượng HD/FullHD sử dụng HTML5, thẻ \<video>\, nhúng YouTube \<iframe>\ và thiết kế Responsive bằng CSS.

## 📌 Nội Dung & Cấu Trúc Bố Cục Đề Bài

### 1. Mức cơ bản
- **Header**: Logo thương hiệu \KidCartoon HD\ nằm bên trái.
- **Head-link**: Thanh điều hướng các liên kết trang (\Trang chủ\, \Hoạt hình Việt\, \Quốc tế\, \Cổ tích\, \Liên hệ\).
- **Content**:
  - **Left Content**: Danh sách các tập phim hoạt hình có sẵn với thumbnail, thời lượng, số lượt xem, chất lượng (720p/1080p).
  - **Right Content**: Khu vực phát video chính, mặc định hiển thị video đầu tiên khi tải trang.
- **Footer**: Hiển thị thông tin bản quyền, điều khoản bảo vệ trẻ em và tác giả.

### 2. Mức trung bình
- **Loại bỏ gạch chân trong liên kết**: Áp dụng \	ext-decoration: none;\ trên toàn bộ thẻ \<a>\.
- **Hiệu ứng khi rê chuột vào liên kết**: Tự động bôi đậm (\ont-weight: bold;\) và đổi màu chữ (\color: #ff4757;\).
- **Header cố định**: Áp dụng \position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;\ giữ nguyên vị trí ở đầu trang khi người dùng cuộn xem nội dung.

### 3. Mức nâng cao
- **Đa phương tiện HTML5 & YouTube**: Kết hợp cả thẻ \<video controls>\ chuẩn MP4 và nhúng \<iframe>\ YouTube.
- **Tương tác động bằng JavaScript**: Nhấp vào bất kỳ phim nào trong danh sách bên trái sẽ tự động chuyển video đang phát, cập nhật tiêu đề, mô tả và số lượt xem.
- **Tìm kiếm & Sắp xếp**: Hỗ trợ tìm kiếm theo tên phim và sắp xếp theo lượt xem / mới cập nhật.
- **Responsive Design**: Tự động co giãn theo tỷ lệ 16:9 (\spect-ratio: 16 / 9;\) và chuyển từ bố cục 2 cột (PC) sang 1 cột xếp chồng (Tablet / Điện thoại).

## 🛠 Cấu Trúc Thư Mục
\\\plaintext
GitProject/
├── index.html       # Toàn bộ cấu trúc HTML5 và logic tương tác
├── style.css        # Hệ thống định dạng giao diện và Responsive
└── README.md        # Hướng dẫn chi tiết dự án
\\\

## 🚀 Cách Xem Và Kiểm Tra Dự Án
- Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt web nào.
- Nhấp chọn từng tập phim ở danh sách bên trái để thưởng thức video phát bên phải.
- Thử tìm kiếm phim hoặc thu nhỏ cửa sổ trình duyệt để trải nghiệm tính năng Responsive.
- Xem trực tiếp trên GitHub: [Cartoon Video Streaming](https://github.com/VuDucDat2006/GitProject/tree/cartoon-video-streaming)

Tác giả: Vũ Đức Đạt (VuDucDat2006)
