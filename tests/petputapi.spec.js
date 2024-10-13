import {test,expect} from '@playwright/test'

//step1: create a test using request context
test('pet put request',async({request}) => {

//step2: send a put request(update the data) ,give the url of the api and store it in a variable

const apiputresponse = await request.put("https://petstore.swagger.io/v2/pet", {
    data: {
        "id": 1,
        "category": {
          "id": 1,
          "name": "string"
        },
        "name": "basafish",
        "photoUrls": [
          "catfish"
        ],
        "tags": [
          {
            "id": 1,
            "name": "basafish"
          }
        ],
        "status": "available"
      }
})

 // step3: verify the response for put is 200
 expect(apiputresponse.status()).toBe(200)

 //step4: verify the resonse is having particular text
    //step4.1:create a variable and get the text from the response
    //step4.2: verify the text having certain text

    const putresponsetext = await apiputresponse.text()
    expect(putresponsetext).toContain('basafish')

    //write the response in console
    console.log(await apiputresponse.json())
})