package com.hexaware.assetmanagement.controller;

import com.hexaware.assetmanagement.dto.AuditRequestDTO;
import com.hexaware.assetmanagement.serviceimpl.AuditRequestService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/audit")
//public class AuditRequestController {
//
//    @Autowired
//    private AuditRequestService service;
//
//    // GET /api/audit/logs - view all audit logs
//    @PreAuthorize("hasRole('ADMIN')")
//    @GetMapping("/logs")
//    public ResponseEntity<List<AuditRequestDTO>> getAllAuditLogs() {
//        List<AuditRequestDTO> logs = service.getAllLogs();
//        if (logs.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(logs, HttpStatus.OK);
//    }
//
//    // GET /api/audit/logs/{id} - view log by ID
//    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
//    @GetMapping("/logs/{id}")
//    public ResponseEntity<AuditRequestDTO> getLogById(@PathVariable int id) {
//        AuditRequestDTO dto = service.getLogById(id);
//        if (dto != null) {
//            return new ResponseEntity<>(dto, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // GET /api/audit/user/{uid} - logs for a specific user
//    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
//    @GetMapping("/user/{uid}")
//    public ResponseEntity<List<AuditRequestDTO>> getLogsByEmployee(@PathVariable int uid) {
//        List<AuditRequestDTO> logs = service.getLogsByEmployee(uid);
//        if (logs.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(logs, HttpStatus.OK);
//    }
//
//    // GET /api/audit/date/{date} - logs by date
//    @PreAuthorize("hasRole('ADMIN')")
//    @GetMapping("/date/{date}")
//    public ResponseEntity<List<AuditRequestDTO>> getLogsByDate(
//            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
//        List<AuditRequestDTO> logs = service.getLogsByDate(date);
//        if (logs.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(logs, HttpStatus.OK);
//    }
//    
//    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
//    @PostMapping("/addAudit")
//    public ResponseEntity<AuditRequestDTO> createAudit(@RequestBody AuditRequestDTO dto) {
//        AuditRequestDTO saved = service.addAudit(dto);
//        return new ResponseEntity<>(saved, HttpStatus.CREATED);
//    }
//
//}


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/audit")
public class AuditRequestController {

    @Autowired
    private AuditRequestService service;

    //  ADMIN: View all audit logs
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/logs")
    public ResponseEntity<List<AuditRequestDTO>> getAllAuditLogs() {
        List<AuditRequestDTO> logs = service.getAllLogs();
        return logs.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(logs);
    }

    //  Admin or Employee: Get log by ID
    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
    @GetMapping("/logs/{id}")
    public ResponseEntity<AuditRequestDTO> getLogById(@PathVariable int id) {
        return ResponseEntity.ok(service.getLogById(id));
    }

    //  Admin or Employee: Get logs by Employee ID
    @PreAuthorize("hasAnyRole('ADMIN','EMPLOYEE')")
    @GetMapping("/user/{uid}")
    public ResponseEntity<List<AuditRequestDTO>> getLogsByEmployee(@PathVariable int uid) {
        List<AuditRequestDTO> logs = service.getLogsByEmployee(uid);
        return logs.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(logs);
    }

    //  ADMIN: Get logs by Date
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/date/{date}")
    public ResponseEntity<List<AuditRequestDTO>> getLogsByDate(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List<AuditRequestDTO> logs = service.getLogsByDate(date);
        return logs.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(logs);
    }

    //  ADMIN: Create new audit request
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/request")
    public ResponseEntity<AuditRequestDTO> createAuditRequest(@RequestBody @Valid AuditRequestDTO dto) {
        AuditRequestDTO saved = service.createRequestFromAdmin(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // ✅ EMPLOYEE: Respond to audit request
    @PreAuthorize("hasRole('EMPLOYEE')")
    @PutMapping("/respond/{id}")
    public ResponseEntity<AuditRequestDTO> respondToAudit(
            @PathVariable int id,
            @RequestBody @Valid AuditRequestDTO dto) {
        AuditRequestDTO updated = service.respondToAuditRequest(id, dto);
        return ResponseEntity.ok(updated);
    }
}
