// statistiques_script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mise à jour dynamique des statistiques
    const totalConsultations = document.getElementById("totalConsultations");
    const consultationsJour = document.getElementById("consultationsJour");
    const consultationsSemaine = document.getElementById("consultationsSemaine");
  
    const tableRows = document.querySelectorAll("#tableConsultations tbody tr");
    const today = new Date().toISOString().slice(0, 10);
    const semaine = [];
  
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      semaine.push(d.toISOString().slice(0, 10));
    }
  
    let countToday = 0;
    let countWeek = 0;
  
    tableRows.forEach(row => {
      const date = row.children[2].textContent.trim();
      if (date === today) countToday++;
      if (semaine.includes(date)) countWeek++;
    });
  
    totalConsultations.textContent = tableRows.length;
    consultationsJour.textContent = countToday;
    consultationsSemaine.textContent = countWeek;
  
    // Filtre en temps réel
    const searchInput = document.getElementById("searchConsultation");
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();
      tableRows.forEach(row => {
        const match = Array.from(row.children).some(td =>
          td.textContent.toLowerCase().includes(value)
        );
        row.style.display = match ? "" : "none";
      });
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
