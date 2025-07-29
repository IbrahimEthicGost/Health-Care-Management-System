// script.js
// ChartJS requis (CDN)
document.addEventListener("DOMContentLoaded", () => {
    const patientsCtx = document.createElement('canvas');
    const stockCtx = document.createElement('canvas');
  
    document.getElementById("patientsChart").innerHTML = "";
    document.getElementById("patientsChart").appendChild(patientsCtx);
  
    document.getElementById("stockChart").innerHTML = "";
    document.getElementById("stockChart").appendChild(stockCtx);
  
    new Chart(patientsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Nouveaux patients',
          data: [20, 30, 25, 40, 45, 38],
          borderColor: '#03B5AA',
          backgroundColor: 'rgba(3,181,170,0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Évolution des patients' }
        }
      }
    });
  
    new Chart(stockCtx, {
      type: 'bar',
      data: {
        labels: ['Paracétamol', 'Ibuprofène', 'Amoxicilline', 'Insuline'],
        datasets: [{
          label: 'Quantité',
          data: [120, 80, 60, 30],
          backgroundColor: '#FF8552'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Stock de médicaments' }
        }
      }
    });
  });
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  }

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  });


  