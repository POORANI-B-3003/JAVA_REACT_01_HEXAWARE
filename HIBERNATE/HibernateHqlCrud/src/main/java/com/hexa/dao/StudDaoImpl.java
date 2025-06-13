package com.hexa.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.hexa.Connection.StudentConn;
import com.hexa.model.Student;

public class StudDaoImpl implements StudDao {

    SessionFactory factory;

    public StudDaoImpl() {
        factory = StudentConn.getSessionFactory();
    }

    @Override
    public void saveData(Student s) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.save(s);
        tx.commit();
        session.close();
    }

    @Override
    public void removeByRoll(int rno) {
        Session session = factory.openSession();
        Transaction txt = session.beginTransaction();
        Student s = session.find(Student.class, rno);
        if (s == null) {
            System.out.println("Not Found");
        } else {
            session.delete(s);
        }
        txt.commit();
        session.close();
    }

    @Override
    public void showData() {
        Session session = factory.openSession();
        Query<Student> query = session.createQuery("from Student");
        
        // 1st 10 rows
        
        query .setFirstResult(1);
        query.setMaxResults(20);
        
        //----
        
        List<Student> students = query.list();
        for (Student s : students) {
            System.out.println(s.toString());
        }
        session.close();
    }

    @Override
    public void updatebyroll(int roll, String name, double mark) {
        Session session = factory.openSession();
        Transaction txt = session.beginTransaction();
        Student s = session.find(Student.class, roll);
        if (s == null) {
            System.out.println("Student Not Found");
        } else {
            s.setName(name);
            s.setMarks(mark);
            session.update(s);
            System.out.println("Student updated Successfully");
        }
        txt.commit();
        session.close();
    }

	@Override
	public void searchByname(String name) {
		
		Session session = factory.openSession();
		Query<Student> Q = session.createQuery("from Student where name =: name",Student.class);
		
		Q.setParameter("name",name);
		List<Student> userList = Q.list();
		
		for(Student u : userList)
		{
			System.out.println(u.toString());
		}
		
	}
	
	@Override
	public void searchBynameanMarks(String name,double marks) {
		
		Session session = factory.openSession();
		Query<Student> Q = session.createQuery("from Student where name =: name and marks=: marks",Student.class);
		
		Q.setParameter("name",name);
		Q.setParameter("marks",marks);
		List<Student> userList = Q.list();
		
		for(Student u : userList)
		{
			System.out.println(u.toString());
		}
		
	}
	
	@Override
	public void searchHigherMark(double marks) {
		
		Session session = factory.openSession();
		Query<Student> Q = session.createQuery("from Student where  marks >: marks",Student.class);
		
		Q.setParameter("marks",marks);
		List<Student> userList = Q.list();
		
		/*for(Student u : userList)
		{
			System.out.println(u.toString());
		}*/
		
		if (userList.isEmpty()) {
	        System.out.println("No students found with marks greater than " + marks);
	    } else {
	    	userList.stream()
	             .forEach(student -> System.out.println(student.toString()));
	    }
		
	}
	
	@Override
    public void removeByRollNoHQL(int rollno) {
        Session session = factory.openSession();
        Transaction txt = session.beginTransaction();
        
        Query<Student> Q = session.createQuery("delete from Student where rollno = :rollno");

        
        Q.setParameter("rollno",rollno);
        int r = Q.executeUpdate();
        if(r>0)
        {
        	System.out.println("Removed");
        }
        else
        {
        	System.out.println("Not removed");
        }
        
        txt.commit();
        session.close();
        
	}
	
	@Override
	public void updateNameByRoll(int roll, String name) {
	    Session session = factory.openSession();
	    Transaction tx = session.beginTransaction();

	    Query q = session.createQuery("update Student set name = :name where rollno = :roll");
	    q.setParameter("name", name);
	    q.setParameter("roll", roll);

	    int s = q.executeUpdate();

	    if (s > 0) {
	        System.out.println("Student name updated successfully for roll number " + roll);
	    } else {
	        System.out.println("No student found with roll number " + roll);
	    }

	    tx.commit();
	    session.close();
	}
	
		

}
