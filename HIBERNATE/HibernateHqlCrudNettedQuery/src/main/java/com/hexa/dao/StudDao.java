package com.hexa.dao;

import com.hexa.model.Student;

public interface StudDao 
{
    void saveData(Student s);

	void removeByRoll(int rno);
	
	void showData();
	
	void updatebyroll(int roll, String name, double mark);

	void searchByname(String name);

	void searchBynameanMarks(String name, double marks);

	void searchHigherMark(double mark);

	void removeByRollNoHQL(int rollno);

	void updateNameByRoll(int roll, String name);

	void showDataByNamedQuery();

	void removeByRollByNameQuery(int rno);

	void searchName();
	
	
	
}
