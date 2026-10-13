# [Thực hành] CSS | flex-wrap property

Dự án thực hành chuyên sâu về thuộc tính `flex-wrap` trong **CSS Flexbox** nhằm chỉ định các Flex Items được đặt trên một dòng hay bọc thành nhiều dòng khi không đủ không gian trong Flex Container.

---

## 📌 1. Cú Pháp & Bảng So Sánh Các Giá Trị
```css
flex-wrap: nowrap | wrap | wrap-reverse | initial;
```

| Giá trị | Khả năng xuống dòng | Hướng Cross Axis | Hành vi khi thiếu chỗ |
| :--- | :--- | :--- | :--- |
| **`nowrap`** (mặc định) | ❌ Không cho phép | Bình thường | Các item co nhỏ lại trên 1 dòng duy nhất theo `flex-shrink` |
| **`wrap`** | ✅ Cho phép | Từ trên xuống (&darr;) | Bọc thành các dòng mới theo hướng thông thường |
| **`wrap-reverse`** | ✅ Cho phép | Từ dưới lên (&uarr;) | Bọc thành các dòng mới với hướng trục phụ bị đảo ngược |
| **`initial`** | ❌ Không cho phép | Bình thường | Khôi phục về giá trị mặc định của CSS (`nowrap`) |

---

## 🏛️ 2. Các Ví Dụ Thực Hành Trong Dự Án

### 🔹 1. Ví dụ tương tác tổng hợp (Interactive Demo)
- Container có kích thước `600px x 300px`, viền đen `2px solid black`.
- Chứa 6 phần tử kích thước `180px x 80px`.
- Tích hợp 4 nút bấm chuyển đổi trạng thái trực tiếp:
  - `flex-wrap: wrap;`
  - `flex-wrap: nowrap;`
  - `flex-wrap: wrap-reverse;`
  - `flex-wrap: initial;`

### 🔹 2. Ví dụ 1: `flex-wrap: wrap;` (Màu xanh dương lightblue)
- Container `width: 500px; gap: 10px;`.
- Mỗi Item `width: 150px;`.
- **Kết quả**: 6 phần tử tự động bọc thành 2 hàng, mỗi hàng 3 cột.

### 🔹 3. Ví dụ 2: `flex-wrap: nowrap;` (Màu xanh lá lightgreen)
- Container `width: 400px; gap: 10px;`.
- Mỗi Item `width: 150px;`.
- **Kết quả**: Cả 4 phần tử bị ép nằm trên cùng 1 dòng, không xuống dòng.

### 🔹 4. Ví dụ 3: `flex-wrap: wrap-reverse;` (Màu đỏ san hô lightcoral)
- Container `width: 500px; height: 250px; gap: 10px;`.
- **Kết quả**: Hàng Item 1, 2, 3 nằm dưới; hàng Item 4, 5, 6 nằm trên.

### 🔹 5. Ví dụ 4: `flex-wrap: initial;` (Màu vàng nhạt)
- Đưa thuộc tính về giá trị mặc định `nowrap`.

---

## 🛠️ 3. Cấu Trúc Thư Mục
```plaintext
GitProject/
├── index.html       # Giao diện HTML hiển thị trực quan các ví dụ và bảng điều khiển
├── style.css        # Hệ thống CSS định dạng Flexbox và flex-wrap
└── README.md        # Tài liệu hướng dẫn và phân tích kỹ thuật
```

---

## 🚀 4. Hướng Dẫn Chạy & Kiểm Tra Kết Quả
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web nào.
2. Thử nghiệm trực quan:
   - Bấm lần lượt 4 nút ở khung trên cùng để quan sát các item thay đổi vị trí.
   - Quan sát 4 khối ví dụ cố định bên dưới để đối chiếu kết quả.
3. Chụp ảnh màn hình kết quả để nộp bài theo yêu cầu.
4. Xem mã nguồn trên GitHub: [CSS Flex Wrap](https://github.com/VuDucDat2006/GitProject/tree/css-flex-wrap)

---

**Tác giả thực hiện:** Vũ Đức Đạt (VuDucDat2006)  
**Khóa học:** CodeGym Web Development
