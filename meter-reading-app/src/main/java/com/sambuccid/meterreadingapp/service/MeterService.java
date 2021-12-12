package com.sambuccid.meterreadingapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sambuccid.meterreadingapp.entity.Address;
import com.sambuccid.meterreadingapp.entity.Meter;
import com.sambuccid.meterreadingapp.repository.AddressRepository;
import com.sambuccid.meterreadingapp.repository.MeterRepository;

@Service
public class MeterService {
	
	@Autowired
	private MeterRepository meterRepo;
	
	@Autowired
	private AddressRepository addressRepo;

	public Long newMeter(Meter meter) {
		//TODO validation in new class
		if(meter.getAddress() != null && meter.getAddress().getId() == null) {
			Address savedAddress = addressRepo.save(meter.getAddress());
			meter.setAddress(savedAddress);
		} else if(meter.getAddress() != null &&  meter.getAddress().getId()!= null) {
			Address address = addressRepo.findById(meter.getAddress().getId()).orElse(null);
			meter.setAddress(address);
		}
		meter = meterRepo.save(meter);
		
		return meter.getId();
	}

	public Meter getMeter(Long id) {
		return meterRepo.findById(id)
				.orElse(null);
	}
	
	
}
