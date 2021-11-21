let express = require('express');
let app = express();
app.use(express.static(__dirname)); // 用当前目录作为静态目录，启动一个静态资源服务器, 相当于 http-server
app.listen(3000);
