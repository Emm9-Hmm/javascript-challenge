// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
let new_tbody = document.createElement('tbody');

function printTable(print){
  tbody.html("");
    print.forEach((report) => {
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

};

printTable(data);

let button = d3.select("#filter-btn");
button.on("click", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    //console.log("Yo get here");
    // Select the input element and get the raw HTML node
    
    let inputElement = d3.select("#datetime");
    //console.log(inputElement.property("value"));

    
    // Get the value property of the input element
    let inputValue = inputElement.property("value");
    
    function equalTo(date){
        return date["datetime"] === inputValue;
    }
    let newData = data.filter(equalTo);
    printTable(newData);
    console.log("Here you are");
    /*console.log(inputValue);
    console.log(people);
  
    var filteredData = people.filter(person => person.bloodType === inputValue);
  
    console.log(filteredData);
  
    // BONUS: Calculate summary statistics for the age field of the filtered data
  
    // First, create an array with just the age values
    var ages = filteredData.map(person => person.age);
  
    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    var mean = math.mean(ages);
    var median = math.median(ages);
    var mode = math.mode(ages);
    var variance = math.variance(ages);
    var standardDeviation = math.std(ages);
  
    // Then, select the unordered list element by class name
    var list = d3.select(".summary");
  
    // remove any children from the list to
    list.html("");
  
    // append stats to the list
    list.append("li").text(`Mean: ${mean}`);
    list.append("li").text(`Median: ${median}`);
    list.append("li").text(`Mode: ${mode}`);
    list.append("li").text(`Variance: ${variance}`);
    list.append("li").text(`Standard Deviation: ${standardDeviation}`);*/
  };
  
