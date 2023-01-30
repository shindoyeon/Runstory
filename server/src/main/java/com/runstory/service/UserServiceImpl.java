package com.runstory.service;

import com.runstory.api.request.UserRegisterPostReq;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
public class UserServiceImpl implements UserService {

//	@Autowired
//	UserRepositorySupport userRepositorySupport;

//	@Autowired PasswordEncoder passwordEncoder;

	@Autowired
	UserRepository userRepository;
	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
		user.setUserId(userRegisterInfo.getUserId());
		user.setUserPwd(userRegisterInfo.getUserPwd());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
//		user.setUserPwd(passwordEncoder.encode(userRegisterInfo.getUserPwd()));
		user.setUserName(userRegisterInfo.getUserName());
		user.setUserNickname(userRegisterInfo.getUserNickname());
		user.setEmailAuth(userRegisterInfo.isEmailAuth());
		user.setPhoneNum(userRegisterInfo.getPhoneNum());
		user.setGender(userRegisterInfo.getGender());
		user.setAddress(userRegisterInfo.getAddress());
		user.setAge(userRegisterInfo.getAge());
		user.setRoleType(userRegisterInfo.getRoleType());
		user.setRegType(userRegisterInfo.getRegType());

		return userRepository.save(user);
	}

//	@Override
//	public User getUserByUserId(String userId) {
//		// 디비에 유저 정보 조회 (userId 를 통한 조회).
//		User user = userRepositorySupport.findUserByUserId(userId).get();
//		return user;
//	}
}
