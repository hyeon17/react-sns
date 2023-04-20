- mock service worker

  백엔드가 준비되지 않은 상태에서도 mock 응답데이터를 활용해서 프론트엔드 개발을 하실수 있도록 해당 라이브러리를 사용하였습니다. <br />
  단, 해당 worker가 실행이 되야되는 조건이 없을 경우 무조건 동작해서 mock 응답데이터를 전달해주기 때문에 환경변수에 관련설정을 해주세요.

```ts
// .env.development (dev)
VITE_MOCKING_ENABLE = "enable";
VITE_SERVER_URL = "http://localhost:3000";

// .env.production (build)
VITE_MOCKING_ENABLE = "not enable";
VITE_SERVER_URL = "배포된 백엔드 주소"; // 백엔드 배포된 경우 추가

/*----------------------------*/
// 또는
// .env
VITE_MOCKING_ENABLE = "mocking원할경우 enable, 아닐경우 not enable";
VITE_SERVER_URL =
  "백엔드 배포안된 경우 http://localhost:3000, 백엔드 배포된 경우 배포된 백엔드 주소";
```

- paths alias 적용

```ts
// @/* => ./src/* 와 매핑됩니다
// 예시
import { setCookie } from "@/util";
```

- svg 파일을 컴포넌트로 사용하기

```ts
// 예시
import { ReactComponent as Logo } from "@/assets/react.svg";
```

- cookie 유틸함수

```ts
import { getCookie, setCookie, removeCookie } from "@util";

// get
getCookie("쿠키 key");

// set
set("쿠키 key", "쿠키 값", {
  /*옵션*/
});

// remove
remove("쿠키 key", {
  /*옵션*/
});
```

- token 유틸 함수

```ts
import { getBearerToken, createBearerToken } from "@util";

getBearToken("Bearer token"); // 'token'

createBearerToken("token"); // 'Bearer token'
```
