package com.runstory.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;
import java.time.LocalDateTime;

@Entity
@Data
@DynamicInsert
public class User {
    @Id
    @Column(length = 50)
    @Comment("아이디")
    private String userId;
    @Comment("비밀번호")
    @Column(length = 50, nullable = false)
    private String userPwd;
    @Comment("이름")
    @Column(length = 30, nullable = false)
    private  String userName;
    @Comment("별명")
    @Column(length = 30, nullable = false)
    private String userNickname;
    @Comment("이메일인증여부(TRUE: 이메일인증성공, FALSE: 이메일인증실패)")
    @Column(columnDefinition = "boolean default false", nullable = false)
    private boolean emailAuth;

    @Comment("전화번호")
    @Column(length = 50, nullable = false)
    private String phoneNum;
    @Comment("성별(1: 남자, 2:여자)")
    @Column(nullable = false)
    private int gender;
    @Comment("주소")
    @Column(length = 200, nullable = false)
    private String address;
    @Comment("나이")
    @Column(nullable = false)
    private int age;
    @Comment("소셜아이디")
    @Column(length = 50, nullable = false)
    private String socialId;

    @Column(length = 100, nullable = false)
    private String accessToken;
    @Column(length = 100, nullable = false)
    private String refreshToken;
    @Comment("역할(0: 일반사용자, 1: 관리자)")
    @Column(columnDefinition = "int default 0", nullable = false)
    private int role;
    @Comment("레벨")
    @Column(columnDefinition = "int default 1", nullable = false)
    private int level;
    @Comment("발걸음수(레벨이 상승하면 경험치 0으로 리셋됨)")
    @Column(columnDefinition = "int default 0", nullable = false)
    private int experience;
    @Comment("프로필이미지경로")
    @Column(length = 500, nullable = false)
    private String profileImgFilePath;
    @Comment("프로필이미지파일명")
    @Column(length = 500, nullable = false)
    private String profileImgFileName;
    @Comment("회원가입유형(0: 일반회원가입, 1: 카카오)")
    @Column(nullable = false)
    private int regType;
    @Comment("회원가입일자")
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    private LocalDateTime regdate;
    @Comment("회원정보수정일자")
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    private LocalDateTime updatedate;
}
