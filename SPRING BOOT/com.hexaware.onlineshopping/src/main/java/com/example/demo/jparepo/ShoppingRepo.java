package com.example.demo.jparepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.*;

@Repository
public interface ShoppingRepo extends JpaRepository<Item, String>{

}
