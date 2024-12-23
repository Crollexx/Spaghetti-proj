const baseUrl = 'https://app.mermakov.info/api/v1'

export const sendRequest = (method: string, url: string, body: {} | null = null) =>  {
  const headers = {
    'Content-Type': 'application/json'
  }
  
  return fetch(baseUrl + url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    
    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      // e?.data = error
      // throw e
    })
  }).catch((reason) => {
    console.log(`re`,reason)
    return null
  })
}