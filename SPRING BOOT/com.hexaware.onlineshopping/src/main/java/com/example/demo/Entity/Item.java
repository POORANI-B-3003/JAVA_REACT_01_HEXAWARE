package com.example.demo.Entity;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {
    
	    public Item(String code, String name, BigDecimal price, int quantity) {
		super();
		this.code = code;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
	    
	    public Item() {}

		@Id
		String code;
	    
		String name;
		
		BigDecimal price;
		
		int quantity;

		public String getCode() {
			return code;
		}

		public void setCode(String code) {
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public BigDecimal getPrice() {
			return price;
		}

		public void setPrice(BigDecimal price) {
			this.price = price;
		}

		public int getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		@Override
		public String toString() {
			return "Item [code=" + code + ", name=" + name + ", price=" + price + ", quantity=" + quantity + "]";
		}
		
		
        
}
