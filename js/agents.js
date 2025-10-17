   // script-agents.js
document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("addAgentBtn");
    const addAgentModal = new bootstrap.Modal(document.getElementById("addAgentModal"));
    const addAgentForm = document.getElementById("addAgentForm");
    const agentsTableBody = document.querySelector("#agentsTable tbody");

    // Buka modal saat tombol diklik
    addBtn.addEventListener("click", () => {
        addAgentForm.reset(); // reset form setiap buka modal
        addAgentModal.show();
    });

    // Submit form modal
    addAgentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("agentName").value;
        const role = document.getElementById("agentRole").value;
        const email = document.getElementById("agentEmail").value;
        const status = document.getElementById("agentStatus").value;

        // Buat row baru
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${role}</td>
            <td>${email}</td>
            <td><span class="badge ${
                status === "Online" ? "bg-success" :
                status === "Offline" ? "bg-danger" :
                "bg-warning text-dark"
            }">${status}</span></td>
            <td>
                <button class="btn btn-sm btn-warning editBtn"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-sm btn-danger deleteBtn"><i class="bi bi-trash"></i></button>
            </td>
        `;
        agentsTableBody.appendChild(row);

        // Reset & tutup modal
        addAgentForm.reset();
        addAgentModal.hide();
    });

    // Delegasi event untuk Edit & Delete
    agentsTableBody.addEventListener("click", (e) => {
        if (e.target.closest(".deleteBtn")) {
            const row = e.target.closest("tr");
            if (confirm("Yakin ingin menghapus agent ini?")) {
                row.remove();
            }
        }

        if (e.target.closest(".editBtn")) {
            const row = e.target.closest("tr");
            const cells = row.children;

            // Isi form modal dengan data agent
            document.getElementById("agentName").value = cells[0].innerText;
            document.getElementById("agentRole").value = cells[1].innerText;
            document.getElementById("agentEmail").value = cells[2].innerText;
            document.getElementById("agentStatus").value = cells[3].innerText;

            addAgentModal.show();

            // Hapus row lama saat submit baru nanti
            addAgentForm.onsubmit = function(ev) {
                ev.preventDefault();
                cells[0].innerText = document.getElementById("agentName").value;
                cells[1].innerText = document.getElementById("agentRole").value;
                cells[2].innerText = document.getElementById("agentEmail").value;
                const statusValue = document.getElementById("agentStatus").value;
                cells[3].innerHTML = `<span class="badge ${
                    statusValue === "Online" ? "bg-success" :
                    statusValue === "Offline" ? "bg-danger" :
                    "bg-warning text-dark"
                }">${statusValue}</span>`;
                addAgentModal.hide();
                addAgentForm.reset();
                addAgentForm.onsubmit = null; // reset onsubmit default
            };
        }
    });
});
