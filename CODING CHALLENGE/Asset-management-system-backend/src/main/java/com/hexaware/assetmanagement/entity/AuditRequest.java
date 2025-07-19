//package com.hexaware.assetmanagement.entity;
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "audit_request")
//public class AuditRequest {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//
//    @NotBlank(message = "Action is required")
//    private String action; // e.g., Verified, Rejected
//
//    @NotBlank(message = "PerformedBy is required")
//    private String performedBy;
//
//    @NotBlank(message = "Audit description is required")
//    private String auditDescrption;
//
//    private LocalDateTime auditDate;
//
//    @ManyToOne
//    @JoinColumn(name = "employee_id")
//    private Employee employee;
//
//    @ManyToOne
//    @JoinColumn(name = "asset_id")
//    private Asset asset;
//
//    // No-arg constructor
//    public AuditRequest() {}
//
//    // All-arg constructor
//    public AuditRequest(int id, String action, String performedBy, String auditDescrption,
//                        LocalDateTime auditDate, Employee employee, Asset asset) {
//        this.id = id;
//        this.action = action;
//        this.performedBy = performedBy;
//        this.auditDescrption = auditDescrption;
//        this.auditDate = auditDate;
//        this.employee = employee;
//        this.asset = asset;
//    }
//
//    // Getters & Setters
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getAction() {
//        return action;
//    }
//
//    public void setAction(String action) {
//        this.action = action;
//    }
//
//    public String getPerformedBy() {
//        return performedBy;
//    }
//
//    public void setPerformedBy(String performedBy) {
//        this.performedBy = performedBy;
//    }
//
//    public String getAuditDescrption() {
//        return auditDescrption;
//    }
//
//    public void setAuditDescrption(String auditDescrption) {
//        this.auditDescrption = auditDescrption;
//    }
//
//    public LocalDateTime getAuditDate() {
//        return auditDate;
//    }
//
//    public void setAuditDate(LocalDateTime auditDate) {
//        this.auditDate = auditDate;
//    }
//
//    public Employee getEmployee() {
//        return employee;
//    }
//
//    public void setEmployee(Employee employee) {
//        this.employee = employee;
//    }
//
//    public Asset getAsset() {
//        return asset;
//    }
//
//    public void setAsset(Asset asset) {
//        this.asset = asset;
//    }
//
//    // toString
//
//    @Override
//    public String toString() {
//        return "AuditRequest{" +
//                "id=" + id +
//                ", action='" + action + '\'' +
//                ", performedBy='" + performedBy + '\'' +
//                ", auditDescrption='" + auditDescrption + '\'' +
//                ", auditDate=" + auditDate +
//                ", employeeId=" + (employee != null ? employee.getId() : null) +
//                ", assetId=" + (asset != null ? asset.getId() : null) +
//                '}';
//    }
//}



package com.hexaware.assetmanagement.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "audit_request")
public class AuditRequest {

    public AuditRequest(int id, @NotBlank(message = "Status is required") String status,
			@NotBlank(message = "PerformedBy is required") String performedBy, String adminNote,
			String employeeResponse, String action,
			@NotBlank(message = "Audit description is required") String auditDescrption, LocalDateTime auditDate,
			Employee employee, Asset asset) {
		super();
		this.id = id;
		this.status = status;
		this.performedBy = performedBy;
		this.adminNote = adminNote;
		this.employeeResponse = employeeResponse;
		this.action = action;
		this.auditDescrption = auditDescrption;
		this.auditDate = auditDate;
		this.employee = employee;
		this.asset = asset;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Status is required")
    @Column(nullable = false)
    private String status;

    @NotBlank(message = "PerformedBy is required")
    @Column(nullable = false)
    private String performedBy;

    private String adminNote;
    private String employeeResponse;

    private String action;

    @NotBlank(message = "Audit description is required")
    @Column(nullable = false)
    private String auditDescrption;

    @Column(nullable = false)
    private LocalDateTime auditDate;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "asset_id")
    private Asset asset;

    @PrePersist
    public void prePersist() {
        if (auditDate == null) {
            auditDate = LocalDateTime.now();
        }
    }

	public int getId() {
		return id;
	}
    
	public AuditRequest() {};
	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPerformedBy() {
		return performedBy;
	}

	public void setPerformedBy(String performedBy) {
		this.performedBy = performedBy;
	}

	public String getAdminNote() {
		return adminNote;
	}

	public void setAdminNote(String adminNote) {
		this.adminNote = adminNote;
	}

	public String getEmployeeResponse() {
		return employeeResponse;
	}

	public void setEmployeeResponse(String employeeResponse) {
		this.employeeResponse = employeeResponse;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getAuditDescrption() {
		return auditDescrption;
	}

	public void setAuditDescrption(String auditDescrption) {
		this.auditDescrption = auditDescrption;
	}

	public LocalDateTime getAuditDate() {
		return auditDate;
	}

	public void setAuditDate(LocalDateTime auditDate) {
		this.auditDate = auditDate;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Asset getAsset() {
		return asset;
	}

	public void setAsset(Asset asset) {
		this.asset = asset;
	}

    // Getters & Setters omitted for brevity
}
