package com.springcore.assignment.SpringEmployeeProject;

import java.util.Map;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class Employee implements InitializingBean, DisposableBean {
    private int empId;
    private String name;
    private double salary;
    private Map<String, String> address;
    private Project project;

    public int getEmpId() { return empId; }
    public void setEmpId(int empId) { this.empId = empId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }

    public Map<String, String> getAddress() { return address; }
    public void setAddress(Map<String, String> address) { this.address = address; }

    public Project getProject() { return project; }
    public void setProject(Project project) { this.project = project; }

    @Override
    public String toString() {
        return "Employee [empId=" + empId + ", name=" + name + ", salary=" + salary + 
               ", address=" + address + ", project=" + project + "]";
    }

    @PostConstruct
    public void init() {
        System.out.println("Employee initialized....");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("Employee cleaned....");
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println("Employee initialized....");
    }

    @Override
    public void destroy() {
        System.out.println("Employee destroyed...");
    }
}