const fs = require('fs');
const http = require('http');
const os = require('os');


const osType = os.type();

// console.log(osType);

const htmlContent = `<!DOCTYPE html> 
<html>
    <h3>
        Hello, your OS is: ${osType}
    </h3>
</html>
` ;

fs.writeFile('./index.html', htmlContent, (err) => {
    const server = http.createServer((req, res) => {
        fs.readFile('index.html', (err, content) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(content);

            if (err) {
                console.log("Error! ", err);
            }
        })
    });

    server.listen(3000, () => {
        console.log("Listening on port: 3000");

    })

    
});