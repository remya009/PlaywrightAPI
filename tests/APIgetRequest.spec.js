import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('Api request',async({request}) => {

//step2: send a get request(get the data from API) ,give the url of the api and store it in a variable

const apiresponse = await request.get("https://reqres.in/api/users/2")

// step3: verify the response is 200
expect(apiresponse.status()).toBe(200)

//step4: verify the resonse is having particular text
//step4.1:create a variable and get the text from the response
//step4.2: verify the text having certain text
const responsetext= await apiresponse.text()
expect(responsetext).toContain('Janet')

//write the response in console
console.log(await apiresponse.json())

})