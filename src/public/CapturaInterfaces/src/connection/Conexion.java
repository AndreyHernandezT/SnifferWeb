package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

public class Conexion {
    //Nombre de la base de datos
    private final String base = "";
    //Usuario de la base de datos
    private final String user = "conectar";
    private final String contraseña = "respuesta";
    //Donde nos vamos a conectar
    //Falta poner nombre
    private final String url = "jdbc:mysql://localhost:3306/sniff";
    private Connection con = null;
    
    //Clase para la conexión a Mysql
    public Connection getConexion(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url,user,contraseña);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
            JOptionPane.showMessageDialog(null,"Error en el drive");
        } catch (SQLException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
            JOptionPane.showMessageDialog(null,"Error en el drive aquiii");
        }
        return con;
    } 
}
