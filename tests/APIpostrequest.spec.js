import { test, expect } from '@playwright/test'

//step1: create a test using request context
test('Api post request', async ({ request }) => {

    //step2: send a post request(create the data) ,give the url of the post api and give the request body to be added

    const apipostresponse = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "farooq",
            "job": "leader"
        }
    })

    // step3: verify the response for post is 201
    expect(apipostresponse.status()).toBe(201)
    //step4: verify the resonse is having particular text
    //step4.1:create a variable and get the text from the response
    //step4.2: verify the text having certain text
    const postresponsetext = await apipostresponse.text()
    expect(postresponsetext).toContain('farooq')

    //write the response in console
    console.log(await apipostresponse.json())
})