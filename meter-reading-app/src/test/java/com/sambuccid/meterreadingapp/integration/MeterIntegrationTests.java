package com.sambuccid.meterreadingapp.integration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sambuccid.meterreadingapp.entity.Address;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
public class MeterIntegrationTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void newMeter() throws Exception {
		MvcResult mvcResult = mockMvc.perform(post("/meters")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"gasReading\":123}"))
			.andExpect(status().isOk()).andReturn();
		assertThat(mvcResult.getResponse().getContentAsString().isEmpty()).isFalse();
	}
	
	@Test
	public void allMeters() throws Exception {
		MvcResult mvcResult = mockMvc.perform(post("/meters")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"gasReading\":123}"))//TODO add other fields
			.andExpect(status().isOk()).andReturn();

		mockMvc.perform(get("/meters"))
			.andExpect(status().isOk())
			.andExpect(content().string(containsString("\"gasReading\":123")));
	}

	@Test
	public void getMeter() throws Exception {
		mockMvc.perform(get("/meters/1234567890"))
			.andExpect(status().isOk());
	}
	
	@Test
	public void newMeterGetsSaved() throws Exception {
		MvcResult mvcResult = mockMvc.perform(post("/meters")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"gasReading\":123}"))//TODO add other fields
			.andExpect(status().isOk()).andReturn();
		String newMeterId = mvcResult.getResponse().getContentAsString();
		
		mockMvc.perform(get("/meters/"+newMeterId))
			.andExpect(status().isOk())
			.andExpect(content().string(containsString("\"gasReading\":123")));
	}
	
	//TODO this should be tested in the unit test, because it tests what the service does
	@Test
	public void newMeterWithNewAddress() throws Exception {
		mockMvc.perform(post("/meters")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"gasReading\":123,\"address\":{\"postcode\":\"EC1 1PL\",\"housenum\":\"12\"}}"))
			.andExpect(status().isOk());
		
		MvcResult mvcResult = mockMvc.perform(get("/addresses")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"postcode\":\"EC1 1PL\"}"))
			.andExpect(status().isOk()).andReturn();
		String addressesJson = mvcResult.getResponse().getContentAsString();
		ObjectMapper mapper = new ObjectMapper();
		List<Address> addresses = mapper.readValue(addressesJson, mapper.getTypeFactory().constructCollectionType(List.class, Address.class));
		
		assertThat(addresses.size()>0).isTrue();
		assertThat(addresses.get(0).getPostcode().equals("EC1 1PL")).isTrue();
	}
	
}
