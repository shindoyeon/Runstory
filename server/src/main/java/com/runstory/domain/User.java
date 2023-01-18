package com.runstory.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
public class User {
    @Id
    @Column(name="USER_ID")
    private String userId;
    @Column(name="USER_PWD")
    private String userPwd;
    @Column(name="USER_NAME")
    private  String userName;
    @Column(name="USER_NICKNAME")
    private String userNickname;
    @Column(name="EMAIL_AUTH")
    private boolean emailAuth;

    @Column(name="PHOONE_NUM")
    private String phoneNum;

    @Column(name="GENDER")
    private int gender;
    @Column(name="ADDRESS")
    private String address;
    @Column(name="AGE")
    private int age;
    @Column(name="SOCIAL_ID")
    private String socialId;
    @Column(name="ACCESS-TOKEN")
    private String accessToken;
    @Column(name="REFRESH-TOKEN")
    private String refreshToken;
    @Column(name="ROLE")
    private int role;
    @Column(name="LEVEL")
    private int level;
    @Column(name="EXPERIENCE")
    private int experience;
    @Column(name="PROFILE_IMG_FILE_PATH")
    private String profileImgFilePath;
    private String profileImgFileName;
    private int regType;
    private String updateDate;
}
