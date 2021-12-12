package com.sambuccid.meterreadingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.sambuccid.meterreadingapp.service.MeterService;

@RestController
public class MeterController {
	@Autowired
	private MeterService meterService;
}
