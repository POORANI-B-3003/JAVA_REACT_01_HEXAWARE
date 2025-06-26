package com.example.demo.jparepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer>{

}




//package com.example.demo.JpaRespo;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.example.demo.Entity.Cutomer;
//
//
//
////crud    jpa   
//@Repository
//public interface CustomerRepo  extends  JpaRepository<Cutomer, Integer> {
//
//}