// rendezvous_script.js

document.addEventListener("DOMContentLoaded", function () {
    const addAppointmentBtn = document.getElementById("addAppointmentBtn");
    const appointmentsTableBody = document.querySelector("#appointmentsTable tbody");
    const patientNameInput = document.getElementById("patientName");
    const dateInput = document.getElementById("appointmentDate");
    const timeInput = document.getElementById("appointmentTime");
    const reasonInput = document.getElementById("reason");
    const searchInput = document.getElementById("searchAppointment");
  
    function createAppointmentRow(name, date, time, reason) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${reason}</td>
        <td><button class="btn cancel">Annuler</button></td>
      `;
      tr.querySelector(".btn.cancel").addEventListener("click", () => {
        tr.remove();
      });
      return tr;
    }
  
    addAppointmentBtn.addEventListener("click", () => {
      const name = patientNameInput.value.trim();
      const date = dateInput.value;
      const time = timeInput.value;
      const reason = reasonInput.value.trim();
  
      if (name && date && time && reason) {
        const newRow = createAppointmentRow(name, date, time, reason);
        appointmentsTableBody.appendChild(newRow);
        patientNameInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
        reasonInput.value = "";
      } else {
        alert("Veuillez remplir tous les champs.");
      }
    });
  
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase();
      const rows = appointmentsTableBody.querySelectorAll("tr");
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const match = Array.from(cells).some(cell =>
          cell.textContent.toLowerCase().includes(searchValue)
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
