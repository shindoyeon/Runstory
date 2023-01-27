package com.runstory.repository;

import com.runstory.domain.running.RunningDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsertCrewDetailRepository extends JpaRepository<RunningDetail, Long> {

}
