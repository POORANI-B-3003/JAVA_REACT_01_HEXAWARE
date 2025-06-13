package com.hexa.model;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;

@Entity

@NamedQueries({
	
	@NamedQuery(name="Student.findAll",query ="select * from Student" ),
	@NamedQuery(name="Student.removeByRoll",query="delete from student where rollno=:rollno"),
	@NamedQuery(name="Student.DetailsByName",query ="from Student where name=:name" )
})
public class Student {
	@Id
	int rollno;
	String name;
	double marks;
	
	public Student()
	{
		
	}

	public Student(int rollno, String name, double marks) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.marks = marks;
	}

	public int getRollno() {
		return rollno;
	}

	public void setRollno(int rollno) {
		this.rollno = rollno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getMarks() {
		return marks;
	}

	public void setMarks(double marks) {
		this.marks = marks;
	}

	@Override
	public String toString() {
		return "Student [rollno=" + rollno + ", name=" + name + ", marks=" + marks + "]";
	}

	
}
