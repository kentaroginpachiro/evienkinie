document.addEventListener("DOMContentLoaded", function () {
    // Scroll ke Contact Address saat tombol utama ditekan
    document.querySelector(".logo").addEventListener("click", function () {
        const contentCard = document.querySelector(".wallet-addres");
        if (contentCard) {
            contentCard.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Tombol sosial media (X/Twitter)
    document.querySelector(".social-btn").addEventListener("click", function () {
        window.open("https://x.com/eviekiniee?s=21", "_blank");  // Ganti dengan link yang benar
    });

    // Tombol chart (Dexscreener)
    document.querySelector(".chart-btn").addEventListener("click", function () {
        window.open("https://dexscreener.com", "_blank");
    });

    // Tombol Copy Address
    document.getElementById("copyButton").addEventListener("click", function () {
        const walletText = document.querySelector(".wallet-addres p").textContent;
        navigator.clipboard.writeText(walletText).then(() => {
            // Tampilkan notifikasi copy berhasil
            let toast = document.createElement("div");
            toast.textContent = "Address copied to clipboard! You can paste it on dexscreener.com";
            toast.style.position = "fixed";
            toast.style.bottom = "20px";
            toast.style.left = "50%";
            toast.style.transform = "translateX(-50%)";
            toast.style.backgroundColor = "#333";
            toast.style.color = "#fff";
            toast.style.padding = "10px 20px";
            toast.style.borderRadius = "5px";
            toast.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
            toast.style.zIndex = "1000";
            document.body.appendChild(toast);

            // Hapus notifikasi setelah 2 detik
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 2000);
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    });

    // Mencegah zoom menggunakan ctrl + scroll
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) {
            event.preventDefault();
        }
    });

    // Mencegah pinch zoom di perangkat mobile
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Mencegah scaling saat touchmove
    document.addEventListener('touchmove', function(e) {
        if (e.scale && e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Mencegah zoom saat double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd < 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Inisialisasi AOS (animasi scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });
});
