package com.runstory.repository;

import com.runstory.domain.user.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // 아래와 같이, Query Method 인터페이스(반환값, 메소드명, 인자) 정의를 하면 자동으로 Query Method 구현됨.
    User findByUserId(String userId);
    User findByUserNickname(String userNickname);
    User findByUserName(String UserName);
    void deleteUserByUserId(String userId);
//    Optional<User> findByUserId(String userId);
    User findByUserSeq(Long userId);
}