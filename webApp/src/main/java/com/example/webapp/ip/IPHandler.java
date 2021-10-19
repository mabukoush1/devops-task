package com.example.webapp.ip;

import javax.servlet.http.HttpServletRequest;
import java.net.UnknownHostException;

public interface IPHandler {


    String getIp(HttpServletRequest request) ;

}
