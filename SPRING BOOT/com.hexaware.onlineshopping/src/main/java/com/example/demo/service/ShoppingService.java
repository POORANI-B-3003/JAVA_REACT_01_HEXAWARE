package com.example.demo.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.*;
import com.example.demo.jparepo.ShoppingRepo;

@Service
public class ShoppingService {
    
	@Autowired
	ShoppingRepo repo;
	
//	Adding new items
	
    public Item addItem(Item i)
    {
    	Item  i1= repo.save(i);
	    return i1;
    	
    }
    
//	Retrieving item by code
    public Item getItemByCode(String code)
    {
    	return repo.findById(code).orElse(null);
    }
    
//	Updating item price
    public Item updatePrice(String code,BigDecimal price)
    {
    	Item i=repo.findById(code).orElse(null);
    	if(i!=null)
    	{
    		 i.setPrice(price);
    		return repo.save(i);
    	}
    	return null;
    }
    
    //generating bill
	public String generateBill(String code, int quantity) {
		
		Item i=repo.findById(code).orElse(null);
		if(i!=null)
		{
			int availableQuantity=i.getQuantity();
			if(availableQuantity<quantity)
			{
				return "Quantity is high";
			}
			else
			{
				BigDecimal grandtotal= i.getPrice().multiply(BigDecimal.valueOf(quantity));
				return "code: "+code+"\nquantity: "+quantity+"\ngrandtotal: "+grandtotal;
			}
		}
		return "Item not found";
	}

	
	}
    



