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
    cell.classList.add(cell.dataset.coord, "droppable");
    delete cell.dataset.col;
    delete cell.dataset.row;
  }
}

const portContainer = document.querySelector(".port");

for (let i = 0; i < 5; i++) {
  switch (i) {
    case 0:
      const carrier = document.createElement("div");
      const carrierName = document.createElement("span");
      carrierName.className = "shipText";
      carrierName.innerHTML = "Carrier";
      carrier.appendChild(carrierName);
      portContainer.appendChild(carrier);
      carrier.classList.add("carrier", "draggable");
      carrier.setAttribute("draggable", true);
      break;
    case 1:
      const battleship = document.createElement("div");
      const battleshipName = document.createElement("span");
      battleshipName.className = "shipText";
      battleshipName.innerHTML = "Battleship";
      battleship.appendChild(battleshipName);
      portContainer.appendChild(battleship);
      battleship.classList.add("battleship", "draggable");
      battleship.setAttribute("draggable", true);
      break;
    case 2:
      const destroyer = document.createElement("div");
      const destroyerName = document.createElement("span");
      destroyerName.className = "shipText";
      destroyerName.innerHTML = "Destroyer";
      destroyer.appendChild(destroyerName);
      portContainer.appendChild(destroyer);
      destroyer.classList.add("destroyer", "draggable");
      destroyer.setAttribute("draggable", true);
      break;
    case 3:
      const submarine = document.createElement("div");
      const submarineName = document.createElement("span");
      submarineName.className = "shipText";
      submarineName.innerHTML = "Submarine";
      submarine.appendChild(submarineName);
      portContainer.appendChild(submarine);
      submarine.classList.add("submarine", "draggable");
      submarine.setAttribute("draggable", true);
      break;
    case 4:
      const patrol = document.createElement("div");
      const patrolName = document.createElement("span");
      patrolName.className = "shipText";
      patrolName.innerHTML = "Patrol";
      patrol.appendChild(patrolName);
      portContainer.appendChild(patrol);
      patrol.classList.add("patrol", "draggable");
      patrol.setAttribute("draggable", true);
      break;
  }
}
const draggables = document.querySelectorAll(".draggable");
const droppableContainers = document.querySelectorAll(".droppable");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

droppableContainers.forEach((droppableContainer) => {
  droppableContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    droppableContainer.appendChild(draggable);
  });
});
