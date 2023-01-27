package com.runstory.api.controller;

import com.runstory.common.model.response.BaseResponseBody;
import com.runstory.service.AuthService;
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

	@Autowired
	AuthService authService;

	@GetMapping("/email")
	@ApiOperation(value = "이메일 인증 코드 전송", notes = "<strong>제공 받은 이메일에</strong> 인증 코드를 전송한다.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공", response = BaseResponseBody.class),
//        @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
        @ApiResponse(code = 404, message = "이메일 전송 실패", response = BaseResponseBody.class),
        @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
	public ResponseEntity<?> emailSend(@ApiParam(value="이메일 정보", required = true) @RequestParam String userEmail) {
//		System.out.println("userEmail : "+userEmail);
		try {
			String confirm = authService.sendSimpleMessage(userEmail);
			return ResponseEntity.ok(BaseResponseBody.of(200, confirm));
		} catch (Exception e) {
			return ResponseEntity.ok(BaseResponseBody.of(500,"BAD REQUEST"));
		}
	}
}
