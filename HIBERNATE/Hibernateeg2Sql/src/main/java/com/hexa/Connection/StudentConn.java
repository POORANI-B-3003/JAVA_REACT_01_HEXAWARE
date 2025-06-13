package com.hexa.Connection;
 
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
 
import com.hexa.model.Student;
 
public class StudentConn {
 
	
	  private static SessionFactory sessionfactory;   //single object for whole class 
	  StudentConn()
		{
			sessionfactory= new Configuration().configure("hiber.config.xml").addAnnotatedClass(Student.class).buildSessionFactory();
		}

		public static SessionFactory getSessionFactory() {
			
			StudentConn studentConn= new StudentConn();
			return sessionfactory;
		}

}