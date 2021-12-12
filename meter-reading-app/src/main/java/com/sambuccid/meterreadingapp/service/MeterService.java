package com.sambuccid.meterreadingapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sambuccid.meterreadingapp.entity.Meter;
import com.sambuccid.meterreadingapp.repository.MeterRepository;

@Service
public class MeterService {
	
	@Autowired
	private MeterRepository meterRepo;

	public Long newMeter(Meter meter) {
		//TODO validation in new class
		meter = meterRepo.save(meter);
		
		return meter.getId();
	}
	
	
}
