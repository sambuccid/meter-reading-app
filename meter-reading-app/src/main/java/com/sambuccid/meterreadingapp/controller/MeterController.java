package com.sambuccid.meterreadingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.sambuccid.meterreadingapp.entity.Meter;
import com.sambuccid.meterreadingapp.service.MeterService;

@RestController
@RequestMapping("meters")
public class MeterController {
	@Autowired
	private MeterService meterService;
	
	@PostMapping()
	public String newMeter(@RequestBody Meter meter) {
		return meterService.newMeter(meter).toString();
	}
	
	@GetMapping("")
	public List<Meter> getAll() {
		return meterService.findAll();
	}

	@GetMapping("/{id}")
	public Meter getMeter(@PathVariable("id") Long id) {
		return meterService.getMeter(id);
	}
}
