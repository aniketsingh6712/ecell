function SubmitEvent(){
const XLSX = require('xlsx');

// Sample data
const data = [
  ['Name', 'Age', 'City'],
  ['John Doe', 25, 'New York'],
  ['Jane Smith', 30, 'San Francisco'],
];

// Create a workbook
const workbook = XLSX.utils.book_new();
const sheetName = 'Sheet1';

// Convert the data array to a worksheet
const worksheet = XLSX.utils.aoa_to_sheet(data);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
// Write the workbook to an Excel file
XLSX.writeFile(workbook, 'output.xlsx');
}
console.log('Excel file created successfully');
