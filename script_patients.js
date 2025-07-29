// patients_script.js

document.addEventListener('DOMContentLoaded', () => {
    const patientTableBody = document.querySelector('#patientsTable tbody');
    const searchInput = document.getElementById('searchPatient');
    const addBtn = document.getElementById('toggleAddForm');
    const addForm = document.getElementById('addPatientForm');
    const addFormElement = document.querySelector('#addPatientForm form');
  
    let patients = [
      { name: 'Ali Bensalah', age: 32, dossier: 'D123', allergies: 'Pollen' },
      { name: 'Khadija Merzouki', age: 27, dossier: 'D456', allergies: 'Aucune' },
      { name: 'Sofiane Larbi', age: 40, dossier: 'D789', allergies: 'Pénicilline' },
    ];
  
    function renderPatients(list) {
      patientTableBody.innerHTML = '';
      list.forEach((patient, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${patient.name}</td>
          <td>${patient.age}</td>
          <td>${patient.dossier}</td>
          <td>${patient.allergies}</td>
          <td>
            <button class="btn edit" onclick="editPatient(${index})">Modifier</button>
            <button class="btn delete" onclick="deletePatient(${index})">Supprimer</button>
          </td>
        `;
        patientTableBody.appendChild(row);
      });
    }
  
    window.editPatient = function(index) {
      alert(`Modifier les infos de ${patients[index].name}`);
      // Ajoute ici une logique pour un vrai formulaire de modification
    }
  
    window.deletePatient = function(index) {
      if (confirm(`Supprimer ${patients[index].name} ?`)) {
        patients.splice(index, 1);
        renderPatients(patients);
      }
    }
  
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.toLowerCase();
      const filtered = patients.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.dossier.toLowerCase().includes(term)
      );
      renderPatients(filtered);
    });
  
    addBtn.addEventListener('click', () => {
      addForm.style.display = addForm.style.display === 'flex' ? 'none' : 'flex';
    });
  
    addFormElement.addEventListener('submit', e => {
      e.preventDefault();
      const name = addFormElement.name.value;
      const age = addFormElement.age.value;
      const dossier = addFormElement.dossier.value;
      const allergies = addFormElement.allergies.value;
  
      if (name && age && dossier) {
        patients.push({ name, age, dossier, allergies });
        renderPatients(patients);
        addFormElement.reset();
        addForm.style.display = 'none';
      } else {
        alert('Veuillez remplir tous les champs obligatoires');
      }
    });
  
    renderPatients(patients);
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
