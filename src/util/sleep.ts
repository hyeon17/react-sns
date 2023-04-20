export const sleep = (ms: number = 1000) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
