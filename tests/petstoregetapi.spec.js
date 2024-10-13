import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('Api petrequest',async({request}) => {

//step2: send a get request(get the data from API) ,give the url of the api and store it in a variable

const apiresponse1 = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")

// step3: verify the response is 200
expect(apiresponse1.status()).toBe(200)

//step4: verify the resonse is having particular text
//step4.1:create a variable and get the text from the response
//step4.2: verify the text having certain text
const responsetext= await apiresponse1.text()
expect(responsetext).toContain('Chihuahua')

//write the response in console
console.log(await apiresponse1.json())

})