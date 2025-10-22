var vg_1 = "malaysia.vg.json"; // map of malaysia
vegaEmbed("#malaysia_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var temp_pol =  "temp_pol.vg.json";  // temperature vs pollutant value 
vegaEmbed("#temp_pol", temp_pol ).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var humid_pol =  "humid_pol.vg.json";  // humid vs pollutant value 
vegaEmbed("#humid_pol", humid_pol ).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var wind_pol =  "wind.vg.json";  // wind speed vs pollutant value
vegaEmbed("#wind_pol", wind_pol ).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



var pie_pol =  "pie.vg.json";  // pollutant ratio pie chart
vegaEmbed("#pie_pol", pie_pol ).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);




var dew_pol=  "dew_pol.vg.json";  // pollutant ratio among sabah, sarawak, and terengganu
vegaEmbed("#dew_pol", dew_pol ).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);





