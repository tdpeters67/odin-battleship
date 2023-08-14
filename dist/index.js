const container = document.getElementById("container");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.className = "cell";

    cell.setAttribute("data-row", i + 1);
    cell.setAttribute("data-col", j + 1);

    switch (cell.dataset.col) {
      case "1":
        cell.setAttribute("data-colletter", "A");
        break;
      case "2":
        cell.setAttribute("data-colletter", "B");
        break;
      case "3":
        cell.setAttribute("data-colletter", "C");
        break;
      case "4":
        cell.setAttribute("data-colletter", "D");
        break;
      case "5":
        cell.setAttribute("data-colletter", "E");
        break;
      case "6":
        cell.setAttribute("data-colletter", "F");
        break;
      case "7":
        cell.setAttribute("data-colletter", "G");
        break;
      case "8":
        cell.setAttribute("data-colletter", "H");
        break;
      case "9":
        cell.setAttribute("data-colletter", "I");
        break;
      case "10":
        cell.setAttribute("data-colletter", "J");
        break;
    }
    cell.setAttribute("data-coord", cell.dataset.colletter + cell.dataset.row);
  }
}

function nextChar(char) {
  return String.fromCharCode(char.charCodeAt(char) + 1);
}
