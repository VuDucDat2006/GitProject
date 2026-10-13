/**
 * Xử lý mở/đóng menu trên thiết bị di động (Mobile)
 * Theo đúng hướng dẫn của bài thực hành CodeGym
 */
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Lắng nghe sự kiện click vào biểu tượng ☰ (hamburger menu)
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", function () {
            // Thêm hoặc xóa class "active" để hiển thị hoặc ẩn menu
            navLinks.classList.toggle("active");
        });

        // Tự động đóng menu khi người dùng bấm vào một liên kết trên mobile
        const linkItems = navLinks.querySelectorAll("a");
        linkItems.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove("active");
                }
            });
        });
    }
});
