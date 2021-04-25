/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pcap3;

import connection.SQL;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.jnetpcap.*;

public class Pcap3 {

    
    public static void main(String[] args) throws IOException, SQLException {
        List<PcapIf> alldevs = new ArrayList<PcapIf>(); // Will be filled with NICs  
        StringBuilder errbuf = new StringBuilder(); // For any error msgs  
        
        
        int r = Pcap.findAllDevs(alldevs, errbuf);
        if (r == Pcap.NEXT_EX_NOT_OK || alldevs.isEmpty()) {
            System.err.printf("Can't read list of devices, error is %s", errbuf
                    .toString());
            return;
        }

        SQL form = new SQL();
        form.TruncarTabla();
        String Respuesta;
    
        //System.out.println("Dispositivos encontrados:");
        
        // Iterar todas las tarjetas de red encontradas
        int i = 0;
        for (PcapIf device : alldevs) {
            //System.out.println(device.getName());
            System.out.println(device.getDescription());
            String Desc = device.getDescription();
            form.IngresarTarjeta(Desc);
            //System.out.println(Respuesta);
            
        }
        
    }
    
}