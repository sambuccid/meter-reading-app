package com.sambuccid.meterreadingapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sambuccid.meterreadingapp.entity.Address;
import com.sambuccid.meterreadingapp.entity.Meter;
import com.sambuccid.meterreadingapp.service.AddressService;
import com.sambuccid.meterreadingapp.service.MeterService;

@RestController
@RequestMapping("address")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	@GetMapping("/find")
	public List<Address> findAddress(@RequestBody Address addressProps) {
		return addressService.findAddress(addressProps);
	}
}
