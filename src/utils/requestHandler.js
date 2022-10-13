export const CallApi = async (url, options) => {
  const api = 'http://localhost:8000/api' + url
  try {
    const response = await fetch(api, options)
    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}
