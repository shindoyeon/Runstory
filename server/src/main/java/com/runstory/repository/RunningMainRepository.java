package com.runstory.repository;

import com.runstory.domain.running.Running;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface RunningMainRepository extends JpaRepository<Running, Long> {
    // 위치 기반 데이터 가져오기 (5개)
    ArrayList<Running> findAll();
    // 오늘까지인 데이터 가져오기 (5개)

    // 해쉬태그 종합 알고리즘에 따른 데이터 가져오기 (5개)

    // 해쉬태그 1 데이터 가져오기 (5개)

    // 해쉬태그 2 데이터 가져오기 (5개)
}
