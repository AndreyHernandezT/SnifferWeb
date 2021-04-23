const controller = {};

controller.index = (req, res) => {
    res.render('index');
};

controller.tarjeta = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT idSniff, NetworkAdapter FROM sniff'), (err, rows) => {
            if (err) {
                res.json(err);
            }
            console.log(rows);
            res.render('index', {
                data: rows
            })
        }
    })
};

controller.snif = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT idPacket, TypoOfProtocol, SourceMAC, DestinationMAC, ActualBytes, ExpectedBytes, SourceIP, DestinationIP, Frame FROM packet'), (err, rows) => {
            if (err) {
                res.json(err);
            }
            console.log(rows);
            res.redirect('/')
        }
    })
};
module.exports = controller;