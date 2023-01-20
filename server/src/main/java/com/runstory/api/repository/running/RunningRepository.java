package com.runstory.api.repository.running;

import com.runstory.domain.running.Running;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RunningRepository extends JpaRepository<Running, Long> {
    Running findAllById(Long id);
}
