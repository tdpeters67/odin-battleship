const gridContainer = document.getElementById("container");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    gridContainer.appendChild(cell);
    cell.className = "cell";

    cell.setAttribute("data-row", i + 1);
    cell.setAttribute("data-col", j + 1);

    switch (cell.dataset.col) {
      case "1":
        cell.setAttribute("data-col", "A");
        break;
      case "2":
        cell.setAttribute("data-col", "B");
        break;
      case "3":
        cell.setAttribute("data-col", "C");
        break;
      case "4":
        cell.setAttribute("data-col", "D");
        break;
      case "5":
        cell.setAttribute("data-col", "E");
        break;
      case "6":
        cell.setAttribute("data-col", "F");
        break;
      case "7":
        cell.setAttribute("data-col", "G");
        break;
      case "8":
        cell.setAttribute("data-col", "H");
        break;
      case "9":
        cell.setAttribute("data-col", "I");
        break;
      case "10":
        cell.setAttribute("data-col", "J");
        break;
    }
    cell.setAttribute("data-coord", cell.dataset.col + cell.dataset.row);
  }
}

const portContainer = document.querySelector(".port");
for (let i = 0; i < 4; i++) {
  switch (i) {
    case 1:
      const carrier = document.createElement("div");
      portContainer.appendChild(carrier);

      carrier.className = "carrier";
  }
}
