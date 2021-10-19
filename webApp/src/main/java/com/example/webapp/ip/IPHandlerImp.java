package com.example.webapp.ip;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.net.*;
import java.util.Enumeration;

@Service
public class IPHandlerImp implements IPHandler {

    private final String IPV4 = "127.0.0.1";
    private final String IPV6 = "0:0:0:0:0:0:0:1";

    @Override
    public String getIp(HttpServletRequest request)  {
//
//        String i = null;
//        try {
//             i = Inet4Address.getLocalHost().getHostAddress();
//        } catch (UnknownHostException e) {
//            e.printStackTrace();
//        }
//        return i ;


        String ip = null;
        try {
            Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
            while (interfaces.hasMoreElements()) {
                NetworkInterface iface = interfaces.nextElement();
                // filters out 127.0.0.1 and inactive interfaces
                if (iface.isLoopback() || !iface.isUp())
                    continue;

                Enumeration<InetAddress> addresses = iface.getInetAddresses();
                while(addresses.hasMoreElements()) {
                    InetAddress addr = addresses.nextElement();

                    // EDIT
                    if (addr instanceof Inet6Address) continue;

                    ip = addr.getHostAddress();
                    System.out.println(iface.getDisplayName() + " " + ip);
                }
            }
        } catch (SocketException e) {
            throw new RuntimeException(e);
        }
        return ip;

    }

}
