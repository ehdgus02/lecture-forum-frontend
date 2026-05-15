import * as axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
    baseURL: BASE_URL, // 통신을 진행할 상대의 기본 주소
    timeout: 5000,      // 통신 요청을 했을 때 실패되었다고 판단하는 타임아웃 시간 (ms 밀리세컨드 단위. 5초)
    withCredentials: true,  // CORS 요청을 허용할지 여부
});

export default api;

// axios : 라이브러리 O  (Typescript 지원, 별도 보조 라이브러리 X)
// - 도착된 결과의 상태 코드를 읽기 때문에 2xx번 응답 제외 모두 에러
// - 에러 처리를 할 때 catch문에서 통합하여 에러 처리 가능
// - 자동 JSON 변환을 지원하기 때문에 별도로 파싱 필요 없음
// - intercept 라는 기능을 제공하여, Express의 미들웨어처럼
//   전송 전에 신분증 내용을 집어넣는 등의 기능을 한 방에 처리 가능