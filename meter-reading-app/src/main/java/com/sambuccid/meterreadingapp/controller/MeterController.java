package com.sambuccid.meterreadingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sambuccid.meterreadingapp.entity.Meter;
import com.sambuccid.meterreadingapp.service.MeterService;

@RestController
@RequestMapping("meter")
public class MeterController {
	@Autowired
	private MeterService meterService;
	
	@PostMapping("/new")
	public String getMeter(@RequestBody Meter meter) {
		//return meterService.newMeter(meter).toString();
		return "";
	}
}
