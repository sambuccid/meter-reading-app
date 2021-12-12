package com.sambuccid.meterreadingapp.integration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest
@AutoConfigureMockMvc
public class MeterIntegrationTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void newMeter() throws Exception {
		MvcResult mvcResult = mockMvc.perform(post("/meter/new")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"gasReading\":123}"))//TODO add other fields
			.andExpect(status().isOk()).andReturn();
		String newMeterId = mvcResult.getResponse().getContentAsString();
		
		mockMvc.perform(get("/meter")
				.param("id", newMeterId))
			.andExpect(status().isOk())
			.andExpect(content().string(containsString("\"gasReading\":123")));
	}
}
