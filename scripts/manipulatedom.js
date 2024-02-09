window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  let editButton = createTDNode(createEditButton());
  trNode.appendChild(editButton);
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add('tdNode');
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditButton() {
    let button = document.createElement("button");
    button.innerHTML = "Edit";
    button.addEventListener("click", function() {
        editRow(this.parentNode.parentNode); // Pass the row to the edit function
    });
    return button;
}

function editRow(row) {
    let cells = row.getElementsByTagName("td");

    let currentText = cells[0].textContent;
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter cell (x,y)";

    cells[0].innerHTML = "";
    cells[0].appendChild(inputField);
}

function saveRow(row) {
    let cells = row.getElementsByTagName("td");
    let editedText = cells[0].getElementsByTagName("input")[0].value;
    cells[0].innerHTML = "";
    cells[0].appendChild(createTxtNode(editedText));
    cells[0].removeChild(cells[0].getElementsByTagName("button")[0]);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
