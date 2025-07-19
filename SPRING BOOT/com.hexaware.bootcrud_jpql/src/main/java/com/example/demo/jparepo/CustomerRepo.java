package com.example.demo.jparepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer>{
	
	@Query("select c from Cutomer c")
	  List<Customer> findAllCustomer();

	@Query("select c from Customer wherec.acno=:actno")
	public Customer findByActJPQL(@Param("actno")int actno);
	
	@Query("SELECT c FROM Customer c WHERE c.name = :name")
    public Customer findbyname(@Param("name") String name);

    @Transactional
    @Modifying
    @Query("UPDATE Customer c SET c.balance = c.balance + :amt WHERE c.actno = :actno")
    public int deposit1(@Param("actno") int actno, @Param("amt") double amt);

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