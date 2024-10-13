import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('Api petpostrequest',async({request}) => {

    const apipostresponse1 = await request.post("https://petstore.swagger.io/v2/pet", {
        data: {
            
            
                "id": 1,
                "category": {
                  "id": 1,
                  "name": "cat"
                },
                "name": "doggie",
                "photoUrls": [
                  "dog"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "doggie"
                  }
                ],
                "status": "available"
              
              
          }
    })

    // step3: verify the response for post is 200
    expect(apipostresponse1.status()).toBe(200)
    //step4: verify the resonse is having particular text
    //step4.1:create a variable and get the text from the response
    //step4.2: verify the text having certain text
    const postresponsetext = await apipostresponse1.text()
    expect(postresponsetext).toContain('doggie')

    //write the response in console
    console.log(await apipostresponse1.json())

})