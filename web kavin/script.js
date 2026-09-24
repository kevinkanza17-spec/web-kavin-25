// ===============================
// MENU NAVBAR MOBILE
// ===============================

const ikonMenu = document.getElementById("ikon-menu");
const navigasi = document.getElementById("navigasi");

ikonMenu.addEventListener("click", function () {
    navigasi.classList.toggle("aktif");
});


// ===============================
// NAVBAR AKTIF
// ===============================

const navLinks = document.querySelectorAll(".navigasi a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("aktif");
        });

        link.classList.add("aktif");

        navigasi.classList.remove("aktif");
    });
});


// ===============================
// FORM KONTAK
// ===============================

const formKontak = document.getElementById("form-kontak");
const pesanForm = document.getElementById("pesan-form");

if (formKontak) {
    formKontak.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (nama === "" || email === "" || pesan === "") {

            pesanForm.textContent = "Silakan isi semua kolom terlebih dahulu.";

        } else {

            pesanForm.textContent = "Pesan berhasil dikirim!";

            formKontak.reset();
        }
    });
}

