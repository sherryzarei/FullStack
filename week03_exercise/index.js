var http = require("http");
// Use Employee Module here
var employee = require('./Employee.js');

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            // Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>Welcome to Lab Exercise 03</h1>");
            res.end();
        }

        else if (req.url === '/employee') {
            // Display all details for employees in JSON format
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(employee));
            res.end();
        }

        else if (req.url === '/employee/names') {
            // Display only all employees {first name + lastname} in Ascending order in JSON Array
            const employeeNames = employee.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(employeeNames));
            res.end();
        }

        else if (req.url === '/employee/totalsalary') {
            // Display Sum of all employees salary in given JSON format 
            const totalSalary = employee.reduce((accumulator, currEmp) => accumulator + currEmp.Salary, 0);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ "total_salary": totalSalary }));
            res.end();
        } else {
            // Handle unknown routes with 404
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
