package com.sambuccid.meterreadingapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sambuccid.meterreadingapp.entity.Meter;

@Repository
public interface MeterRepository extends CrudRepository<Meter, Long>{

}
