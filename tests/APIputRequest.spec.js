import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('Api put request',async({request}) => {

//step2: send a put request(update the data) ,give the url of the api and store it in a variable

const apiputresponse2 = await request.put("https://reqres.in/api/users/2", {
    data: {
        "name": "Veena",
        "job": "leader"
    }
})

 // step3: verify the response for put is 200
 expect(apiputresponse2.status()).toBe(200)

 //step4: verify the resonse is having particular text
    //step4.1:create a variable and get the text from the response
    //step4.2: verify the text having certain text

    const putresponsetext = await apiputresponse2.text()
    expect(putresponsetext).toContain('Veena')

    //write the response in console
    console.log(await apiputresponse2.json())
})