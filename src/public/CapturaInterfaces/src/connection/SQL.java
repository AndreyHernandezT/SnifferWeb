/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

/**
 *
 * @author admin
 */
public class SQL {

    Conexion conectarDB = new Conexion();
    Connection conector = conectarDB.getConexion();

    public SQL() {
    }

    public void IngresarTarjeta(String Desc) throws SQLException {
        try {
            String sql = "INSERT INTO tarjetas (nombre) VALUES (?)";
            PreparedStatement ps = null;
            ps = conector.prepareStatement(sql);
            ps.setString(1, Desc);
            ps.executeUpdate();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void TruncarTabla() throws SQLException {
        try {
            String sql = "TRUNCATE TABLE tarjetas;";
            PreparedStatement ps = null;
            ps = conector.prepareStatement(sql);
            ps.executeUpdate();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

}
