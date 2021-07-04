console.log('HELLO');
const fromDate = document.querySelector(".from-date");
const fromTime = document.querySelector(".from-time");
const toDate = document.querySelector(".to-date");
const toTime = document.querySelector(".to-time");
const goButton = document.querySelector("button");
const days = document.querySelector(".days span");
const hours = document.querySelector(".hours span");
const minutes = document.querySelector(".minutes span");
const seconds = document.querySelector(".seconds span");

let daysTextContent = days.textContent;



goButton.addEventListener("click",function () {
    if (fromDate.value == "" || fromTime.value == "" || toDate.value == "" || toTime.value == "") {
        alert("Inputan Anda Kosong");
        return false;
    } else {
        const fromDateTime = `${fromDate.value} ${fromTime.value}`;
        const toDateTime = `${toDate.value} ${toTime.value}`;
        let now = new Date(fromDateTime);
        let tomorrow = new Date(toDateTime);
        let selisih = ( tomorrow.getTime() / 1000 ) - ( now.getTime() / 1000 );

        if (selisih < 0) {
            alert("WAKTU TIDAK VALID");
            return false;
        } else {
            const time = setInterval(function () {
                selisih--;

// Mengubah Detik Ke Hari Dengan Dibagi 886400
                let hari = selisih * 0.000012;
                let hariFinal = Math.floor(hari);

// Mengubah Dari Hari ke Jam Dengan Dkali 24
                let jam = hari * 24;
                let jamFinal = Math.floor(jam);

// Mengubah Dari Jam ke Menit Dengan Dikali 60
                let menit = ( jam - jamFinal ) * 60;
                let menitFinal = Math.floor(menit);

// Mengubah Dari Menit Ke Detik Dengan Dikali 60
                let detik = ( menit - menitFinal ) * 60;
                let detikFinal = Math.floor(detik);

                days.innerHTML = hariFinal.toString();
                hours.innerHTML = jamFinal.toString();
                minutes.innerHTML = menitFinal.toString();
                seconds.innerHTML = detikFinal.toString();

                if (hariFinal === 0 && jamFinal === 0 && menitFinal === 0 && detikFinal === 0 ) {
                    alert("WAKTU HABIS");
                    clearInterval(time);
                }

            },1000);
        }

    }
});

