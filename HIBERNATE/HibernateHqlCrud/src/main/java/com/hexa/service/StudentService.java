package com.hexa.service;

import java.util.Scanner;

import com.hexa.dao.StudDao;
import com.hexa.dao.StudDaoImpl;
import com.hexa.model.Student;

public class StudentService {
	
	Student s;
	
	StudDao dao;
	
	Scanner sc;
	
	public StudentService()
	{
		s = new Student();
		sc = new Scanner(System.in);
		dao = new StudDaoImpl();
	}
	
	
	public void saveStudent()
	{
		Scanner sc = new Scanner(System.in);

	    System.out.println("Enter Roll No: ");
	    int roll = sc.nextInt();
	    sc.nextLine(); // consume newline

	    System.out.println("Enter Name: ");
	    String name = sc.nextLine();

	    System.out.println("Enter Marks: ");
	    double marks = sc.nextDouble();

	    // ✅ create a new object each time
	    Student s = new Student();
	    s.setRollno(roll);
	    s.setName(name);
	    s.setMarks(marks);

	    dao.saveData(s);
	}


	public void removeByRoll(int rno) {
	    System.out.print("Enter Roll Number to Remove: ");
	    rno = sc.nextInt();
	    dao.removeByRoll(rno);
	}
	
	public void showAll()
	{
		dao.showData();
	}
	
	public void updateStudent() {
        System.out.println("Enter Roll No to Update: ");
        int roll = sc.nextInt();
        sc.nextLine(); // consume newline

        System.out.println("Enter New Name: ");
        String name = sc.nextLine();

        System.out.println("Enter New Marks: ");
        double marks = sc.nextDouble();

        dao.updatebyroll(roll, name, marks);
    }
	
	public void searchByName()
	{
		System.out.print("Enter search name: ");
		String name = sc.nextLine();
		dao.searchByname(name);
	}
	
	public void searchByNameandMarks()
	{
		System.out.println("Enter New Name: ");
        String name = sc.nextLine();

        System.out.println("Enter New Marks: ");
        double marks = sc.nextDouble();
        
		dao.searchByname(name);
	}
	
	public void searchByMark() {
	    System.out.print("Enter marks: ");
	    double mark = sc.nextDouble();
	    dao.searchHigherMark(mark);
	}

	public void removeByRollNoHQL()
	{
		System.out.print("Enter Roll Number to Remove: ");
	    int rno = sc.nextInt();
	    dao.removeByRollNoHQL(rno);
	}
	
	public void updateNameByRoll() {
	    System.out.print("Enter Roll Number: ");
	    int roll = sc.nextInt();
	    sc.nextLine();  

	    System.out.print("Enter New Name: ");
	    String name = sc.nextLine();

	    dao.updateNameByRoll(roll, name);
	}


	

}
