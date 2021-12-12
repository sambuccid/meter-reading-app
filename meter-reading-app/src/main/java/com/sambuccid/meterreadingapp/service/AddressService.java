package com.sambuccid.meterreadingapp.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sambuccid.meterreadingapp.entity.Address;
import com.sambuccid.meterreadingapp.repository.AddressRepository;

@Service
public class AddressService {
	
	@Autowired
	private AddressRepository addressRepo;

	public List<Address> findAddress(Address addressProps) {
		//TODO this method should find all the properties not null in address and calls a custom(non CRUD) method in the Repository that will query the DB filtering the right addresses
		List<Address> addesses =  StreamSupport.stream(addressRepo.findAll().spliterator(), false).collect(Collectors.toList());
		return addesses;
	}
	
	
}
