package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Customer;
import com.example.demo.service.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService  service;
	
	@PostMapping("/saveData")
	public Customer saveData1( @RequestBody Customer c)
	{
		
		Customer c1= service.dsaveD(c);
		return c1;
		
	}
	
	@GetMapping("/getUsers")
    public List<Customer> getData()
    {
		
		List l=service.getData1();
		
		return l;
		
		
    }
	
	@DeleteMapping("/deletedataAc/{ac}")	 
	public Customer deleteByAct(@PathVariable int ac) {
	    return service.deleteCustomer(ac);
	}

	



}


//package com.example.demo.Controller;
//
//import org.springframework.web.bind.annotation.RestController;
// 
//import com.example.demo.Entity.Cutomer;
//import com.example.demo.Service.CustomerService;
// 
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
// 
// 
//@RestController
//public class CustomerController {
//	
//	@Autowired
//	CustomerService  service;
//	
//	@PostMapping("/saveData")
//	public Cutomer saveData1( @RequestBody Cutomer c)
//	{
//		
//		Cutomer c1= service.dsaveD(c);
//		return c1;
//		
//	}
//	
//	
//	
//	
//	
// 
//}
 