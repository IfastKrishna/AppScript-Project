export const request = (apiFunctionName, options = {}) => {
  options = JSON.stringify(options)
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((res) => {
        resolve(JSON.parse(res))
      })
      .withFailureHandler((err) => {
        reject(err)
      })
      [apiFunctionName](options)
  })
}
