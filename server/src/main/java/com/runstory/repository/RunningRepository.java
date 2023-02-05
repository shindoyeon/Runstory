package com.runstory.repository;

import com.runstory.domain.running.Running;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.ArrayList;
import java.util.List;

public interface RunningRepository extends JpaRepository<Running, Long> {
    ArrayList<Running> findByIsFinished(Boolean isfinished);
    Running getById(Long id);
}
