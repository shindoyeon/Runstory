package com.runstory.repository;

import com.runstory.domain.running.Running;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsertCrewRepository extends JpaRepository<Running, Long> {

}
