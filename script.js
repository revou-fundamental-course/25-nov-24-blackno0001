let gender = ""; 
let height = 192; // Default height // Nih tinggi awal default, biar ga kosong aja
let weight = 0; // Berat masih kosong, nunggu input user, ga ngasal ngisi
let age = 0; // Umur juga diinisialin kosong dulu, biar fleksibel

document.getElementById('rang').addEventListener('input', (e) => {
    height = e.target.value; // Ambil nilai tinggi dari input slider user
    document.getElementById('contador').innerText = `${height}cm`; // Update tinggi ke tampilan biar interaktif
});

function secmale() {
    document.getElementById('male').style.backgroundColor = "#D64545"; // Highlight tombol male
    document.getElementById('female').style.backgroundColor = "#2C2C2C"; // Reset tombol female
    gender = "male"; // Gender jadi cowok
}

function secfemale() {
    document.getElementById('female').style.backgroundColor = "#D64545"; // Highlight tombol female
    document.getElementById('male').style.backgroundColor = "#2C2C2C"; // Reset tombol male
    gender = "female"; // Gender jadi cewek
}

function calcular() {
    weight = document.getElementById('peso').value; // Ngambil input berat badan dari user
    age = document.getElementById('edad').value; // Ngambil input umur dari user

    if (weight && age && gender && height) { // Cek semua data ada atau belum
        let bmi = weight / ((height / 100) ** 2); // Rumus sakti ngitung BMI
        bmi = bmi.toFixed(1); // Hasil BMI dibuletin sampe 1 angka di belakang koma
        document.getElementById('bmitotal').innerText = bmi; // Tampilkan hasil BMI

        let status = ""; // Variabel buat nyimpen status BMI
        let color = ""; // Variabel buat warna border/status
        let advice = ""; // Variabel buat saran sesuai BMI

        if (bmi < 18.5) { // Kalau BMI di bawah 18.5
            status = "Kekurangan Berat Badan"; // Status kurus
            color = "#D64545"; // Warna merah, kode darurat wkwk
            advice = "Kekurangan berat badan, disarankan untuk meningkatkan asupan kalori dan konsultasi dengan ahli gizi."; // Saran buat nambah berat
        } else if (bmi >= 18.5 && bmi <= 24.9) { // BMI normal
            status = "Normal"; // Status sehat nih
            color = "#4CAF50"; // Warna hijau, aman
            advice = "Berat badan normal, pertahankan pola makan yang sehat dan gaya hidup aktif."; // Saran biar tetep sehat
        } else if (bmi >= 25.0 && bmi <= 29.9) { // BMI di atas normal
            status = "Kelebihan Berat Badan"; // Overweight mulai bahaya nih
            color = "#FF9800"; // Oranye, warning
            advice = "Kelebihan berat badan, disarankan untuk mulai berolahraga secara teratur dan perhatikan pola makan."; // Saran buat turunin berat
        } else { // BMI lebih dari 30
            status = "Obesitas"; // Alarm besar, obesitas coy
            color = "#F44336"; // Merah gelap, bahaya bro
            advice = "Obesitas, sangat disarankan untuk berkonsultasi dengan dokter untuk rencana penurunan berat badan yang sehat."; // Saran serius nih
        }

        document.getElementById('sobrepeso').innerText = status; // Update status BMI ke user
        document.getElementById('circulo').style.borderColor = color; // Warna lingkaran sesuai status
        document.getElementById('sobrepeso').style.color = color; // Warna teks status sesuai

        // Update advice based on BMI status
        let adviceElement = document.createElement('p'); // Bikin paragraf baru buat saran
        adviceElement.textContent = advice; // Masukin teks saran
        adviceElement.style.color = color; // Warna saran sesuai status
        adviceElement.style.fontSize = "14px"; // Bikin teks lebih kecil
        adviceElement.style.fontWeight = "normal"; // Ga terlalu tebal
        document.getElementById('sobrepeso').appendChild(adviceElement); // Tampilkan ke user
    } else { // Kalau data ada yang kurang
        alert("Silakan masukkan semua data!"); // Notifikasi ke user
    }
}
