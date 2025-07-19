package com.springcore.assignment.SpringEmployeeProject;

import java.util.HashMap;
import java.util.Map;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public Project project() {
        Project p = new Project();
        p.setpId(202);
        p.setDuration("3 months");
        p.setCost(68000);
        return p;
    }

    @Bean
    public Employee employee() {
        Employee e = new Employee();
        e.setEmpId(2);
        e.setName("Poorani");
        e.setSalary(60000);
        
        Map<String, String> addr = new HashMap<>();
        addr.put("home", "Chennai");
        addr.put("office", "Delhi");
        e.setAddress(addr);

        e.setProject(project());
        return e;
    }
}
