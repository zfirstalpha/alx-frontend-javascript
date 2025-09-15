// Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "robel",
  lastName: "fikadu",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "isac",
  lastName: "alemayehu",
  age: 24,
  location: "goro",
};

// Put them in a list
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Attach table to the document body
document.body.appendChild(table);
