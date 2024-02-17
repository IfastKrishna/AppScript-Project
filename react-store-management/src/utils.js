export const request = (apiFunctionName, options = {}) => {
  options = JSON.stringify(options);
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((res) => {
        let parsedResponse;
        try {
          parsedResponse = JSON.parse(res);
        } catch (err) {
          parsedResponse = res;
        }
        resolve(parsedResponse);
      })
      .withFailureHandler((err) => {
        reject(err);
      })
      [apiFunctionName](options);
  });
};
