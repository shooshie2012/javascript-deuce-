var tbody = d3.select("tbody");

var ufo = data;
var submit = d3.select("#filter-btn");
submit.on("click", function() {

d3.event.preventDefault();
    
var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(ufo);

var filteredData = ufo.filter(sightings => sightings.datetime === inputValue);

console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
});
});
