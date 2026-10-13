# [Thực hành] Tạo Website Template Có Giao Diện Đẹp Mắt (Creative Web Design)

Dự án mẫu website hiện đại (**Creative Web Design Template**) được phát triển nhằm mục tiêu rèn luyện và nâng cao kỹ năng thiết kế giao diện web với **HTML5** và **CSS3**, ứng dụng các kỹ thuật tiên tiến: hình nền với hiệu ứng mờ (Backdrop Blur), thanh điều hướng ghim cố định (Sticky/Fixed Navbar), bố cục thẻ dịch vụ bằng **CSS Grid**, và chân trang phân cấp chuyên nghiệp với dấu chấm tròn (`•`).

---

## 🎯 Mục Tiêu Bài Học
- **Nâng cấp giao diện**: Áp dụng hình nền chất lượng cao, hiệu ứng làm mờ (`filter: blur(8px)`), lớp phủ tối (`overlay`) và hiệu ứng chuyển động mượt mà (`transition`, `hover`).
- **Thực hành CSS Flexbox & CSS Grid**:
  - **Flexbox**: Căn chỉnh danh sách menu và bố cục 2 cột của Footer.
  - **CSS Grid**: Tạo bố cục Card Layout 3 cột cân đối (`grid-template-columns: repeat(3, 1fr); gap: 20px;`).
- **Cải thiện UX/UI**: Thiết kế hiện đại, tinh tế, sử dụng dấu chấm (`•`) để phân cấp và nhấn mạnh thông tin dịch vụ, bản quyền và mạng xã hội.

---

## 🚀 Các Thành Phần Giao Diện Chính

1. **Header với nền ảnh và hiệu ứng mờ (Blur Effect)**:
   - Sử dụng pseudo-element `::before` với thuộc tính `filter: blur(8px)` để tạo lớp nền mờ nghệ thuật.
   - Sử dụng pseudo-element `::after` với lớp phủ tối `rgba(0, 0, 0, 0.55)` giúp phần chữ tiêu đề `Creative Web Design` và mô tả nổi bật rõ nét.
   - Nút kêu gọi hành động (Call To Action - `.btn`) màu xanh ngọc bích `#1abc9c` với hiệu ứng đổ bóng và hover ấn tượng.

2. **Thanh điều hướng cố định (Fixed Navbar)**:
   - Sử dụng `position: fixed; top: 0; width: 100%;` kết hợp hiệu ứng kính mờ `backdrop-filter: blur(10px)`.
   - Các liên kết menu (*Trang chủ*, *Dịch vụ*, *Blog*, *Liên hệ*) chuyển màu cam sang trọng (`#f39c12`) khi rê chuột.

3. **Content Section - Dịch vụ của chúng tôi (CSS Grid Card Layout)**:
   - Bố cục 3 thẻ dịch vụ bằng `display: grid; grid-template-columns: repeat(3, 1fr);`:
     - **Thiết kế Website** (`service1.jpg`): Trình bày giao diện chuẩn UI/UX, thân thiện với người dùng.
     - **SEO & Marketing** (`service2.jpg`): Đưa website lên top công cụ tìm kiếm.
     - **Hỗ trợ 24/7** (`service3.jpg`): Đội ngũ túc trực giải quyết vấn đề kỹ thuật tức thì.
   - Hiệu ứng tương tác: Thẻ card phóng nhẹ và nâng bóng khi hover (`transform: translateY(-8px) scale(1.02);`).

4. **Footer chuyên nghiệp 2 cột (Flexbox Layout)**:
   - Sử dụng `display: flex; justify-content: space-between;` trên nền tối sang trọng `#2c3e50`.
   - Cột trái: Thông tin bản quyền có dấu chấm `• &copy; 2025 Creative Web. All rights reserved.` và thông tin tác giả.
   - Cột phải: Thông tin theo dõi mạng xã hội `• Theo dõi chúng tôi: • Facebook | Twitter | LinkedIn`.

---

## 📋 Bảng Phân Tích Kỹ Thuật CSS

| Kỹ thuật CSS | Cú pháp áp dụng | Tác dụng giao diện |
| :--- | :--- | :--- |
| **Fixed Navigation** | `.navbar { position: fixed; top: 0; z-index: 1000; }` | Giữ menu luôn nổi trên đầu khi cuộn trang |
| **Background Blur** | `.header::before { filter: blur(8px); }` | Tạo chiều sâu và độ mờ cho hình nền |
| **Dark Overlay** | `.header::after { background: rgba(0,0,0,0.5); }` | Tăng độ tương phản chữ trên nền ảnh |
| **CSS Grid Cards** | `.card-container { display: grid; grid-template-columns: repeat(3, 1fr); }` | Bố trí 3 thẻ dịch vụ đều tăm tắp |
| **Flexbox Footer** | `.footer { display: flex; justify-content: space-between; }` | Dàn đều 2 cụm nội dung sang hai bên lề |
| **Card Hover Effect**| `.card:hover { transform: scale(1.05); }` | Tăng tương tác trực quan cho người dùng |

---

## 📂 Cấu Trúc Thư Mục Chuẩn

```
website-template-advanced/
├── index.html              # Trang chủ HTML chính
├── css/
│   └── style.css           # Tệp CSS định dạng toàn bộ giao diện
└── images/
    ├── banner.jpg          # Hình nền Header
    ├── service1.jpg        # Hình ảnh Dịch vụ 1 (Thiết kế Web)
    ├── service2.jpg        # Hình ảnh Dịch vụ 2 (SEO & Marketing)
    └── service3.jpg        # Hình ảnh Dịch vụ 3 (Hỗ trợ 24/7)
```

---

## 💻 Cách Khởi Chạy & Kiểm Tra
1. Mở trực tiếp tệp `index.html` trong trình duyệt web (Google Chrome, Microsoft Edge, Firefox).
2. Cuộn chuột để thấy thanh menu bám cố định trên đầu trang.
3. Rê chuột lên các liên kết và các thẻ Card dịch vụ để trải nghiệm hiệu ứng hover.
4. Mở cửa sổ F12 để kiểm tra giao diện Responsive tự động co giãn từ Desktop (3 cột) sang Tablet (2 cột) và Mobile (1 cột).

---
*Tác giả: Vũ Đức Đạt (VuDucDat2006)*  
*Khoá học: Front-End Web Development - CodeGym*
