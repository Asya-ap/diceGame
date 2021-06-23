const controller = {};

//funcion que es parte de un objeto, aqui tendremos todos los datos de los usuarios
controller.list = (req, res) => {
    req.getConnection((err, conn) => { //pide conexion a mysql
        conn.query('SELECT*FROM customer', (err, customers) => {
            if(err){
                res.json(err);
            }

            res.render('customer', {
                data: customers
            }); //pintar en el navegador
        });
    }); 
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => { //el ? hace referencia al data
        conn.query('INSERT INTO customer set ?', [data], (err, customers) => {
            console.log(customers);
            res.redirect('/');
        }); 
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            res.render('customer_edir', {
                data: customer[0]
            });
        });
    });
}

//lo guarda lo editado
constroller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
}

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
      conn.query('DELETET FROM customer WHERE id = ?' , [id], (err, rows) => {
          res.redirect('/');
      });
  });
};

module.exports = controller;

