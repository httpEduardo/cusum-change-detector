"use strict";
const results = document.getElementById("results");
const analyzeButton = document.getElementById("analyzeButton");
const seedButton = document.getElementById("seedButton");
function renderChanges(changes) {
    results.innerHTML = "";
    if (!changes.length) {
        results.innerHTML = "<li>No changes detected.</li>";
        return;
    }
    changes.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `#${item.index} ${item.direction} -> ${item.value}`;
        results.appendChild(li);
    });
}
analyzeButton.addEventListener("click", () => {
    const threshold = parseFloat(document.getElementById("thresholdInput").value);
    const drift = parseFloat(document.getElementById("driftInput").value);
    fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threshold, drift }),
    })
        .then((res) => res.json())
        .then((data) => renderChanges(data.changes || []));
});
seedButton.addEventListener("click", () => {
    fetch("/api/seed", { method: "POST" })
        .then((res) => res.json())
        .then(() => renderChanges([]));
});
