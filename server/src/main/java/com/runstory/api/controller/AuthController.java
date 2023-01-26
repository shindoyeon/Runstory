package com.runstory.api.controller;

import com.runstory.common.model.response.BaseResponseBody;
import com.runstory.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 인증 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "인증 API", tags = {"Auth."})
@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	UserService userService;
	
//	@Autowired
//	PasswordEncoder passwordEncoder;

	@GetMapping("/email")
	@ApiOperation(value = "이메일 인증 코드 전송", notes = "<strong>제공 받은 이메일에</strong> 인증 코드를 전송한다.")
    @ApiResponses({
//        @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
        @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
        @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
        @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
	public ResponseEntity<?> login(@ApiParam(value="이메일 정보", required = true) @RequestParam String userEmail) {
		System.out.println("userEmail : "+userEmail);
//		String userId = loginInfo.getId();
//		String password = loginInfo.getPassword();
//
//		User user = userService.getUserByUserId(userId);
//		// 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
//		if(passwordEncoder.matches(password, user.getPassword())) {
//			// 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
//			return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(userId)));

		return ResponseEntity.ok(200);
//		}
//		// 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
//		return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Invalid Password", null));
	}
	
//	@PostMapping("/login")
//	@ApiOperation(value = "로그인", notes = "<strong>아이디와 패스워드</strong>를 통해 로그인 한다.")
//    @ApiResponses({
//        @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
//        @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
//        @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
//        @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
//    })
//	public ResponseEntity<UserLoginPostRes> login(@RequestBody @ApiParam(value="로그인 정보", required = true) UserLoginPostReq loginInfo) {
//		String userId = loginInfo.getId();
//		String password = loginInfo.getPassword();
//
//		User user = userService.getUserByUserId(userId);
//		// 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
//		if(passwordEncoder.matches(password, user.getPassword())) {
//			// 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
//			return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(userId)));
//		}
//		// 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
//		return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Invalid Password", null));
//	}
}
