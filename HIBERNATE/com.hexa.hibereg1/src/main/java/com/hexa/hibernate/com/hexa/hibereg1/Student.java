package com.hexa.hibernate.com.hexa.hibereg1;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student")  // to change the name of the table
public class Student {
	@Id //making as primary key
	
	int rollno;
	
	@Column   //to change column name
	String name;
	
	@Column
	double marks;
	
	public Student () {
		
	}

	public Student(int rollno, String nameString, double marks) {
		super();
		this.rollno = rollno;
		this.name = nameString;
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
		return "Student [rollno=" + rollno + ", nameString=" + name + ", marks=" + marks + "]";
	}

	
	
	

}
