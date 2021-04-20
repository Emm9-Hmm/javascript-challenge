// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

data.forEach((report) => {
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
