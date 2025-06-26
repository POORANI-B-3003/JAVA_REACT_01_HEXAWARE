package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;
import com.example.demo.jparepo.CustomerRepo;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepo Respo;
	public  Customer dsaveD(Customer c )
	 {
	    Customer  c1=	Respo.save(c);
	    return c1;
		
	 }
	
	public List<Customer> getData1()
	{
		
		 List l=Respo.findAll();
		
		 return l;
	}
	
	public Customer getSearch(int ac)
	{
		 return Respo.findById(ac).orElse(null);
		
	}
	
	public Customer deleteCustomer(int ac) {
	    Customer cust = Respo.findById(ac).orElse(null);
	    if (cust != null) {
	        Respo.deleteById(ac);
	    }
	    return cust;
	}

}



//package com.example.demo.Service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
// 
//import com.example.demo.Entity.Cutomer;
//import com.example.demo.JpaRespo.CustomerRepo;
// 
//@Service
//public class CustomerService {
//	
//	@Autowired
//	CustomerRepo Respo;
//	public  Cutomer dsaveD(Cutomer c )
//	 {
//	    Cutomer  c1=	Respo.save(c);
//	    return c1;
//		
//	 }
//	
// 
//}
 
 