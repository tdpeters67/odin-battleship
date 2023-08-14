const container = document.getElementById("container");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.className = "cell";
    cell.setAttribute("data-row", i + 1);
    cell.setAttribute("data-col", j + 1);
    if ((cell.dataset.col = 1)) {
      cell.setAttribute("data-point", "A" + cell.dataset.row);
    }
  }
}
