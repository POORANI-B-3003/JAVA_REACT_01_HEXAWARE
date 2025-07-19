package com.springcore.assignment.SpringEmployeeProject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Employee emp = context.getBean(Employee.class);
        System.out.println(emp);
        
        ApplicationContext con = new ClassPathXmlApplicationContext("beans.xml");
        Student student = con.getBean("studentBean", Student.class);
        student.display();

        context.close();
    	
    	
    }
}
