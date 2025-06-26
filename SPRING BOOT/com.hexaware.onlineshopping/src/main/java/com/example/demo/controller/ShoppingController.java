package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Item;
import com.example.demo.service.ShoppingService;

@RestController
public class ShoppingController {

	@Autowired
	ShoppingService service;
	
	//add item-controller  --> done
	@PostMapping("/api/items")
	public Item saveData1( @RequestBody Item i)
	{
		
		Item i1= service.addItem(i);
		return i1;
		
	}
	
	// get item by code --> done
	@GetMapping("/api/items/{code}")
	public Item getItemByCode(@PathVariable String code) {
		
		return service.getItemByCode(code);
	}
	
    //	Updating item price -> price=1099.00 -->done
	@PutMapping("/api/items/{code}/{price}")
	public Item UpdatePrice(@PathVariable String code , @PathVariable BigDecimal price) {
		
		return service.updatePrice(code, price);	
	}
	
	//generating bill -->done
	@GetMapping("/api/bill/{code}/{quantity}")
	public String generateBill(@PathVariable String code, @PathVariable int quantity) {
	    return service.generateBill(code, quantity);
	}



}
