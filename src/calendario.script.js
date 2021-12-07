const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const diasDoMes = document.querySelector(".dias");

  const ultimoDia = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const antesUltimoDia = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const ultimoDiaOperacao = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const proximosDias = 7 - ultimoDiaOperacao - 1;

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.querySelector(".date h1").innerHTML = meses[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toLocaleDateString('pt-br', { dateStyle: 'full' });

  let dias = "";

  for (let x = firstDayIndex; x > 0; x--) {
    dias += `<div class="prev-date">${antesUltimoDia - x + 1}</div>`;
  }

  for (let i = 1; i <= ultimoDia; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      dias += `<div class="hoje">${i}</div>`;
    } else {
      dias += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= proximosDias; j++) {
    dias += `<div class="next-date">${j}</div>`;
  }

  diasDoMes.innerHTML = dias

};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
