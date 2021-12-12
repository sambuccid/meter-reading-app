package com.sambuccid.meterreadingapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Meter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Integer gasReading;

	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getGasReading() {
		return gasReading;
	}

	public void setGasReading(Integer gasReading) {
		this.gasReading = gasReading;
	}
	
	
}
