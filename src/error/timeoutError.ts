export const TIMEOUTERROR_MESSAGE =
  "응답을 처리하는 시간이 오래걸립니다. 잠시후 다시 시도해주세요";

export class TimeoutError extends Error {
  constructor() {
    super(TIMEOUTERROR_MESSAGE);
  }
}
