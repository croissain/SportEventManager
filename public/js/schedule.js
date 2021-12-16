// set format of dates in the data source
scheduler.config.xml_date = "%Y-%m-%d %H:%i";
scheduler.init('scheduler_here', new Date(2018, 0, 20), "month");
scheduler.config.drag_move = false;

scheduler.load("http://localhost:3000/data", "json");

var dp = new dataProcessor("http://localhost:3000/data");
dp.init(scheduler);
// use RESTful API on the backend
dp.setTransactionMode("REST");