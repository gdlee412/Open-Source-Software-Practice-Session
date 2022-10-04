const https = require('https');
const url = 'https://www.skku.edu/skku/campus/skk_comm/notice01.do';
const parser = require("node-html-parser");


https.get(
    url, {
    headers:{
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    
    },
},
(res) => {
        let data = "";
        res.on("data", (d) => {
            data += d;
        });
        res.on("end", () => {
            const root = parser.parse(data);
            const list = root.querySelectorAll(".board-list-content-title > a");
            list.forEach((item) => {
                console.log(item.innerText.trim());
            });
        })
    }
)