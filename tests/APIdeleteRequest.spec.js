import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('Api deleterequest',async({request}) => {

//step2: send a get request(get the data from API) ,give the url of the api and store it in a variable

const apideleteresponse = await request.delete("https://reqres.in/api/users/2")

// step3: verify the response is 204
expect(apideleteresponse.status()).toBe(204)
})