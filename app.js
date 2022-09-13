let kredi = document.querySelector("#select");

let vade = document.querySelector("#vade");

let tutar = document.querySelector("#tutar");

let hesap = document.querySelector("#hesap");

let sonuclar = document.querySelector("#sonuclar");

let taksit = 0;
let oran = 0;

hesap.addEventListener("click", (e) => {
  e.preventDefault();

  if (kredi.value == "Seciniz") {
    alert("Kredi turu seciniz");
  } else {
    if (vade.value >= 0 && tutar.value > 0) {
      if (kredi.value === "Konut Kredisi") {
        oran = 1.91;
      } else if (kredi.value === "Ihtiyac Kredisi") {
        oran = 1.55;
      } else if (kredi.value === "Arac Kredisi") {
        oran = 1.59;
      } else {
        alert("Kredi turunu seciniz");
      }

      const faiz = oran / 100;
      taksit =
        (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
        ((1 + faiz) ** vade.value - 1);

      sonuclar.innerHTML = `<h1 class="text-warning mt-3">Kredi Bilgileri</h1>

    <table class="table table-bordered border-warning mt-5">
      <tr>
        <th>Kredi Miktari</th>
        <td>${tutar.value}</td>
        <th>Kredi Tipi</th>
        <td>${kredi.value}</td>
      </tr>
      <tr>
        <th>Vade</th>
        <td>${vade.value}</td>
        <th>Faiz Orani</th>
        <td>${oran}</td>
      </tr>
      <tr>
        <th>Toplam Ödenecek Tutar</th>
        <td>${(taksit * vade.value).toFixed(2)}</td>
        <th>Taksit Tutari</th>
        <td>${taksit.toFixed(2)}</td>
      </tr>
    </table>`;
    } else {
      alert("ikaz");
    }
  }
});

console.log(vade.value);
