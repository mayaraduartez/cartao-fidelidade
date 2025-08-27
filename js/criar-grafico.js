let grafico; // referência do gráfico Chart.js

function atualizarDashboard() {
  let periodo = document.getElementById("periodo").value;
  let vendas = 0;

  // Simulação de vendas conforme período
  if (periodo === "hoje") {
    vendas = 35;
  } else if (periodo === "semana") {
    vendas = 220;
  } else if (periodo === "mes") {
    vendas = 890;
  }

  document.getElementById("vendas").innerText = vendas;

  // Cálculo previsão grátis (1 grátis a cada 10 vendas)
  let gratis = Math.floor(vendas / 10);
  document.getElementById("gratis").innerText = gratis;

  atualizarGrafico(periodo, vendas, gratis);
}

function atualizarGrafico(periodo, vendas, gratis) {
  const ctx = document.getElementById("graficoVendas").getContext("2d");

  // Se já existir gráfico, destrói antes de recriar
  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Vendas", "Refeições Grátis"],
      datasets: [
        {
          label: `Dados (${periodo})`,
          data: [vendas, gratis],
          backgroundColor: ["#4CAF50", "#2196F3"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// Carregar dados iniciais
atualizarDashboard();
