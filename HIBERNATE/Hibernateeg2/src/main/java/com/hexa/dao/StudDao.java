package com.hexa.dao;

import com.hexa.model.Student;

public interface StudDao {
    void saveData(Student s);

	void removeByRoll(int rno);
	
	void showData();
	
	void updatebyroll(int roll, String name, double mark);
	}
