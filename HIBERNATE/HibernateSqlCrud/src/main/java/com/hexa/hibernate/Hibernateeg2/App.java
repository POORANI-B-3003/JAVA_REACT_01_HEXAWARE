package com.hexa.hibernate.Hibernateeg2;

import com.hexa.service.StudentService;

/**
 * Hello world!
 *
 */
public class App
{
    public static void main( String[] args )
    {
    	
    	StudentService service= new StudentService();
    	//service.saveStudent();
    	
    	//service.removeByRoll(107);
    	
    	//service.showAll();
    	
    	
    	service.updateStudent();      // You can add and call this if you've implemented it

    	    	
    	System.out.println( "Completed!" );
    }
}
