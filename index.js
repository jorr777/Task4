require("dotenv").config();

const fs = require('fs');

const { Configuration, OpenAIApi } = require("openai");
const apiKey = process.env.OPENAI_API_KEY
const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);


const Question = async() =>{
  const input = fs.readFileSync('./input.txt', 'utf8');
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content:input }],
  });
  console.log(completion.data.choices[0].message.content);
}



Question()