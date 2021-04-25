const controller = {};

controller.index = (req, res) => {
    res.render('index', {
        tarjetas: null
    });

};

controller.tarjeta = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tarjetas', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                tarjetas: rows
            });
        });
    });
};

controller.snif = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT idPacket, TypeOfProtocol, SourceMAC, DestinationMAC, ActualBytes, ExpectedBytes, SourceIP, DestinationIP, Frame FROM packet', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                packet: rows
            });
        });
    });

   
};
module.exports = controller;