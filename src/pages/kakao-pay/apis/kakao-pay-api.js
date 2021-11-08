import {TAG_KAKAO_PAY, TAG_INQUIRY_MARKET_PRICE, TAG_PHONE} from '../../../constants'

const kakaoPayIdPathSchema = {
	in: 'path',
	name: 'kakao_pay_id',
	type: 'string',
	description: '카카오페이 유저 아이디',
	required: true
}
const codeSchema = {
	type: 'string',
	example: 'APP_0000',
	enum: ['APP_0000',
		'APP_0400',
		'APP_0401',
		'APP_0500'
	],
	description:
		'결과코드:\n* APP_0000 - 성공' +
		'\n* APP_0400 - 파라미터 이상' +
		'\n* APP_0401 - 인증 실패' +
		'\n* APP_0500 - 서버오류'
}
const msgSchema = {
	type: 'string',
	example: 'OK',
	description: 'OK or 에러메시지'
}
const defaultResponseSchema = {
	type: 'object',
	required: ['code', 'msg'],
	properties: {
		code: codeSchema,
		msg: msgSchema
	}
}
const kakaoPayApi = {
	
	"/partners/kakao-pay/phone/manufacturer": {
		get: {
			tags: [TAG_INQUIRY_MARKET_PRICE],
			summary: "제조사 목록 조회",
			operationId: "fetchManufacturers",
			parameters: [],
			responses: {
				APP_0000: {
					description: "조회 성공",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg", "dataset"],
								properties: {
									code: {
										type: "string",
										example: "APP_0000",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "OK",
									},
									dataset: {
										type: "array",
										items: {
											$ref: "#/components/schemas/Manufacturer",
										},
									},
								},
							},
						},
					},
				},
				APP_0404: {
					description: "조회결과 없음",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg"],
								properties: {
									code: {
										type: "string",
										example: "APP_0404",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "Not Found.",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"/partners/kakao-pay/phone/series": {
		get: {
			tags: [TAG_INQUIRY_MARKET_PRICE],
			summary: "시리즈 목록 조회",
			operationId: "fetchSeries",
			parameters: [
				{
					in: "query",
					name: "mnco_id",
					schema: {
						type: "string",
						example: "1207",
					},
					required: true,
				},
			],
			responses: {
				APP_0000: {
					description: "조회 성공",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg", "dataset"],
								properties: {
									code: {
										type: "string",
										example: "APP_0000",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "OK",
									},
									dataset: {
										type: "array",
										items: {
											$ref: "#/components/schemas/Series",
										},
									},
								},
							},
						},
					},
				},
				APP_0400: {
					description: "잘못된 요청",
				},
				APP_0404: {
					description: "조회결과 없음",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg"],
								properties: {
									code: {
										type: "string",
										example: "APP_0404",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "Not Found.",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"/partners/kakao-pay/phone/model": {
		get: {
			tags: [TAG_INQUIRY_MARKET_PRICE],
			summary: "모델 목록 조회",
			operationId: "fetchModels",
			parameters: [
				{
					in: "query",
					name: "mnco_id",
					schema: {
						type: "string",
						example: "1207",
					},
					required: true,
				},
				{
					in: "query",
					name: "series_nm",
					schema: {
						type: "string",
						example: "갤럭시 S",
					},
					required: true,
				},
			],
			responses: {
				APP_0000: {
					description: "조회 성공",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg", "dataset"],
								properties: {
									code: {
										type: "string",
										example: "APP_0000",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "OK",
									},
									dataset: {
										type: "array",
										items: {
											$ref: "#/components/schemas/Model",
										},
									},
								},
							},
						},
					},
				},
				APP_0400: {
					description: "잘못된 요청",
				},
				APP_0404: {
					description: "조회결과 없음",
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["code", "msg"],
								properties: {
									code: {
										type: "string",
										example: "APP_0404",
										description:
											"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
									},
									msg: {
										type: "string",
										example: "Not Found.",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"/partners/kakao-pay/phone/market-price": {
		get: {
		tags: [TAG_INQUIRY_MARKET_PRICE],
			summary: "시세 조회",
			operationId: "fetchMarketPrice",
			parameters: [
			{
				in: "query",
				name: "model_no",
				schema: {
					type: "string",
					example: "SM-G998-256G",
				},
				required: true,
			},
		],
			responses: {
			APP_0000: {
				description: "조회 성공",
					content: {
					"application/json": {
						schema: {
							type: "object",
								required: ["code", "msg", "dataset"],
								properties: {
								code: {
									type: "string",
										example: "APP_0000",
										description:
									"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
								},
								msg: {
									type: "string",
										example: "OK",
								},
								dataset: {
									$ref: "#/components/schemas/MarketPrice",
								},
							},
						},
					},
				},
			},
			APP_0400: {
				description: "잘못된 요청",
			},
			APP_0404: {
				description: "조회결과 없음",
					content: {
					"application/json": {
						schema: {
							type: "object",
								required: ["code", "msg"],
								properties: {
								code: {
									type: "string",
										example: "APP_0404",
										description:
									"응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
								},
								msg: {
									type: "string",
										example: "Not Found.",
								},
							},
						},
					},
				},
			},
		},
	},
},
	'/partners/kakao-pay/sign-up': {
		post: {
			tags: [TAG_KAKAO_PAY],
			summary: '가입요청',
			description: 'mintit 에 카카오페이 유저 등록을 요청한다.',
			operationId: 'singUpKakaoPayUser',
			requestBody: {
				description: '완료 토큰과 유저 정보를 담은 바디',
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['kakao_pay_id'],
							example: {
								'kakao_pay_id': 'asdf1234',
								'model_no': 'SM-N971N'
							},
							properties: {
								kakao_pay_id: {
									type: 'string',
									description: '카카오페이 고객 아이디'
								},
								model_no: {
									type: 'string',
									description: '페이 서버 저장 모델 코드\n' +
										'안드로이드 : 단말 모델 번호\n' +
										'IOS: Identifier 값\n' +
										'해외 단말기는 OMD로만 전달'
								}
							}
						}
					}
				}
			},
			responses: {
				201: {
					description: '생성 성공',
					content: {
						'application/json': {
							schema: defaultResponseSchema
						}
					}
				}
			}
		}
	},
	'/partners/kakao-pay/users/{kakao_pay_id}': {
		parameters: [kakaoPayIdPathSchema],
		get: {
			tags: [TAG_KAKAO_PAY],
			summary: '본인 정보 조회',
			description: 'mintit 에 등록된 카카오페이 유저의 정보를 조회한다.',
			operationId: 'getUserData',
			responses: {
				200: {
					description: '조회 성공',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								required: ['code', 'msg', 'data'],
								properties: {
									code: codeSchema,
									msg: msgSchema,
									data: {
										type:'object',
										description: '조회 정보',
										required: [],
										properties: {
											user_name: {
												type: 'string',
												description: '유저명'
											},
											user_birth: {
												type: 'string',
												description: '유저생일 yyyyMMdd'
											},
											user_gender: {
												type: 'string',
												description: '0: 여, 1: 남'
											},
											user_phone: {
												type: 'string',
												description: '번호 (- 제외)'
											},
										}
									}
								}
							}
						}
					}
				}
			}
		}
	},
	'/partners/kakao-pay/users/{kakao_pay_id}/device': {
		parameters: [kakaoPayIdPathSchema],
		get: {
			tags: [TAG_KAKAO_PAY],
			summary: '본인 단말기 정보 조회',
			description: 'mintit 에 카카오페이 유저의 등록된 단말 정보를 조회한다.',
			operationId: 'getDeviceData',
			responses: {
				200:{
					description: '조회성공',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								required: ['code', 'msg', 'data'],
								properties: {
									code: codeSchema,
									msg: msgSchema,
									data: {
										type:'object',
										description: '조회 정보',
										required: [],
										properties: {
											model_no: {
												type: 'string',
												description: 'post 시 사용하였던 단말기 정보'
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		put: {
			tags: [TAG_KAKAO_PAY],
			summary: '본인 단말기 정보 수정',
			description: 'mintit 에 카카오페이 유저의 등록된 단말 정보를 수정한다.',
			operationId: 'putDeviceData',
			requestBody: {
				description: '완료 토큰과 유저 정보를 담은 바디',
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['model_no'],
							example: {
								'model_no': 'SM-N971N'
							},
							properties: {
								model_no: {
									type: 'string',
									description: '페이 서버 저장 모델 코드\n' +
										'안드로이드 : 단말 모델 번호\n' +
										'IOS: Identifier 값\n' +
										'해외 단말기는 OMD로만 전달'
								}
							}
						}
					}
				}
			},
			responses: {
				200: {
					description: '수정성공',
					content: {
						'application/json': {
							schema: defaultResponseSchema
						}
					}
				}
			}
		}
	}
}
export default kakaoPayApi
