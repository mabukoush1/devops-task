package com.example.webapp.controllers;


import com.example.webapp.data.User;
import com.example.webapp.data.UserDao;
import com.example.webapp.ip.IPHandler;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class HomeController {

    private UserDao hostDao;
    private IPHandler ipHandler;

    @GetMapping({"","/"})
    public String showIp(HttpServletRequest request, ModelMap modelMap){

        String ip = ipHandler.getIp(request);
        User host = getHost(request, ip);

        modelMap.addAttribute("agent",host.getUserAgent());
        modelMap.addAttribute("id",host.getCount());
        modelMap.addAttribute("ip",host.getIp());

        return "ip";
    }


    @GetMapping("/data")
    public String showTable(ModelMap modelMap){

        modelMap.addAttribute("list",hostDao.findAll());

        return "data";
    }


    private User getHost(HttpServletRequest request, String ip) {
        User host = hostDao.findByIP(ip);

        if (host==null){
            host = User.builder().ip(ip).count(1).userAgent(request.getHeader("User-Agent")).build();
        } else {
            host.setCount(host.getCount()+1);
        }
        hostDao.save(host);
        return host;
    }


}
