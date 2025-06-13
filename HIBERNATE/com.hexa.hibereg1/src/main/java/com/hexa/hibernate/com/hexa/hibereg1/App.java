package com.hexa.hibernate.com.hexa.hibereg1;


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
	
	SessionFactory  sessionFactory;  // interface
	
	Session  session;
	public App() {
		
sessionFactory= new Configuration().configure("hiber.config.xml").addAnnotatedClass(Student.class).buildSessionFactory();
    	
    	session=sessionFactory.openSession();
	}
	
	
	void insert()
	{
		
    	Transaction txTransaction= session.beginTransaction();
    	
    	Student s= new Student();
    	s.setRollno(106);
    	s.setName("Harini");
    	s.setMarks(15000.0);
    	
    	session.save(s);
    	txTransaction.commit();
	}
	
	void search(int rollno)
	{
		session = sessionFactory.openSession();
		Student rs = session.get(Student.class,rollno);
		if(rs!=null)
		{
			System.out.println(rs.toString());
			
		}
		else
		{
			System.out.println("Not Found!");
		}
	}
	
	/*void searchByName(String name)
	{
		session = sessionFactory.openSession();
		Student sr = session.find(Student.class, name);
		if(sr!=null)
		{
			System.out.println(sr.toString());
			
		}
		else
		{
			System.out.println("Not Found!");
		}
		
	}*/
	
	void removeByRollNo(int rno)
	{
	
		session=sessionFactory.openSession();
    	Transaction txTransaction= session.beginTransaction();
    	
    	Student r=session.find(Student.class, rno);
    	
    	if(r==null)
    	{
    		System.out.println("Not Found");
    	}
    	else {
    		
		
    	session.delete(r);
    		}
    		
    	txTransaction.commit();
 
	}
 
	void updateNameFee(int rollno,String name,double marks)
	{
		session=sessionFactory.openSession();
    	Transaction txTransaction= session.beginTransaction();
    	
    	Student s = new Student();
    	s.setRollno(rollno);
    	s.setName(name);
    	s.setMarks(marks);
    	
    	session.saveOrUpdate(s);
    	
    	txTransaction.commit();
	}
	
	void updateRollNo(int rno,String name,double marks)
	{
		session=sessionFactory.openSession();
    	Transaction txTransaction= session.beginTransaction();
    	
    	Student r=session.find(Student.class, rno);
    	if(r==null)
    	{
    		System.out.println("Not Found");
    	}
    	else 
    	{
        	r.setRollno(rno);
        	r.setName(name);
        	r.setMarks(marks);
        	
    		session.update(r);
    		
    	}
    		
    	txTransaction.commit();

	}
	
    public static void main( String[] args )
    {    	
        App obj= new App();
    
    	//obj.insert();
        //obj.search(105);
    	//obj.searchByName("Kailash");
    	//obj.removeByRollNo(104);
        //obj.updateNameFee(105, "Sara", 19360);
    	obj.updateRollNo(107,"Vijay",10500);
        
    	
        System.out.println( "Hello World!" );
    }
}
 
 