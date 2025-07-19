package com.hexaware.HibernateEg3;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        
    	SessionFactory sessionFactory= new Configuration().
    			   configure("hiber.config.xml").
    			   addAnnotatedClass(Student.class).
    			   addAnnotatedClass(Address.class).
    			   buildSessionFactory();
    	
    	
    	Session session = sessionFactory.openSession();  
    	Transaction tx = session.beginTransaction();
    	
    	Address a1 = new Address();
    	a1.setAddressid(1);
    	a1.setCity("Chennai");
    	
    	Student s1 = new Student();
    	s1.setRollno(101);
    	s1.setName("Poorani");
    	s1.setMarks(100);
    	s1.setAddress(a1);
    	
    	session.save(s1);
        tx.commit();
        
    	
    	
    	
    	
    	
    	
    	
    	
    	System.out.println( "Hello World!" );
    }
}
