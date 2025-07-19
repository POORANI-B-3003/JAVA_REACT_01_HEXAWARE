package com.springcore.assignment.SpringEmployeeProject;



public class Project {
     int pId;
     String duration;
     double cost;

    Project()
    {
    	
    }

	public Project(int pId, String duration, double cost) {
		super();
		this.pId = pId;
		this.duration = duration;
		this.cost = cost;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "Project [pId=" + pId + ", duration=" + duration + ", cost=" + cost + "]";
	}
    
    
}
