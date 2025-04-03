function generateQR() {
    let qrText = document.getElementById("qrText").value;
    if (qrText.trim() === "") {
        alert("Please enter text or a URL");
        return;
    }
    let qrImage = document.getElementById("qrImage");
    let downloadLink = document.getElementById('downloadLink');

    let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;

    qrImage.src = qrUrl;
    qrImage.style.display = "block";

    downloadLink.href = qrUrl;
    downloadLink.download = "QRCode.png";
    downloadLink.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("dark-mode");
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}