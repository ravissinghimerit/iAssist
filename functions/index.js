const functions = require("firebase-functions");
// import functions from "firebase-functions";

// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(config);


const ask = (prompt) => {
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 2000,
        best_of: 1
    }).then(response => {
        console.log(response.data.choices[0].text);
        return response.data.choices[0].text
    }).catch(err => {
        console.log(err);
        throw new Error(err);
    })
}



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ask = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    const { prompt } = JSON.parse(request.body);

    // return response.send(prompt)
    let resultText;
    try {
        resultText = await ask(prompt)
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
    return response.send(resultText);
});
