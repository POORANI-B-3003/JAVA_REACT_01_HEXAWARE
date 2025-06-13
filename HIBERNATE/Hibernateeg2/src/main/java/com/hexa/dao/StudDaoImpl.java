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
    
    //NamedQuery
    
public void searchName(String name) {
		
		Session session=factory.openSession();
		
		Query<Student>Q=session.createNamedQuery("Student.DetailsByName",Student.class);
		Q.setParameter("name", name);
		 List<Student> usersList=  Q.list();
		
		 for(Student  u : usersList )
		 {
			 System.out.println(u.toString());
		 }

}
}
