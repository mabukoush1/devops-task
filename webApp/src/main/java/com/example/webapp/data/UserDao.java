package com.example.webapp.data;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserDao {


    public static final String HASH_KEY = "User";

    private RedisTemplate template;

    public User save(User host){
        template.opsForHash().put(HASH_KEY,host.getIp(),host);
        return host;
    }

    public List<User> findAll(){
        return template.opsForHash().values(HASH_KEY);
    }

    public User findByIP(String ip){
        return (User) template.opsForHash().get(HASH_KEY,ip);
    }

    public void remove (String ip) {
        template.opsForHash().delete(HASH_KEY,ip);
    }


}
