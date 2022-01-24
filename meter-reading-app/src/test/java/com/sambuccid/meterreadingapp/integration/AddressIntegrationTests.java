package com.sambuccid.meterreadingapp.integration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sambuccid.meterreadingapp.entity.Address;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.json.JSONArray;

import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
public class AddressIntegrationTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void findAddressEndpoint() throws Exception {
		MvcResult mvcResult = mockMvc.perform(get("/addresses")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"postcode\":\"EC1 1PL\"}"))
			.andExpect(status().isOk()).andReturn();
		String addressesJson = mvcResult.getResponse().getContentAsString();
		if(addressesJson.isEmpty())
			return;
		ObjectMapper mapper = new ObjectMapper();
		mapper.readValue(addressesJson, mapper.getTypeFactory().constructCollectionType(List.class, Address.class));
	}
	
}
