function tampilkanJam() {
  const now = new Date();
  const waktu = now.toLocaleTimeString("id-ID");
  document.getElementById("jam").innerText = waktu;
}
setInterval(tampilkanJam, 1000);
