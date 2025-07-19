package com.springcore.assignment.SpringEmployeeProject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Student {

    @Autowired
    @Qualifier("home")
    private Address address;

    public void display() {
        System.out.println("Injected Address: " + address);
    }
}
