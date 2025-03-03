import { GoogleGenerativeAI } from "@google/generative-ai";
import data from "@/chat/data.json";

const genAI = new GoogleGenerativeAI("AIzaSyDeL4VNEsyYacR1YX7zi8W-LxBKYdcFzMk");
let chat = null;
function initializeModel() {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `"You are an AI store helper for an electronics gadget store Metamart. Your primary role is to suggest gadgets from the available gadgets list provided to you. Make sure to suggest a gadget most of the time, but you can choose not to suggest anything if appropriate. Your response should include an 'id' of the suggested gadget and a 'reply' with a text message. If you decide not to suggest any gadget, set 'id' to null and provide a suitable response in 'reply'.
    Format of reply -> {"id":111,"reply":"sdfsfsdf" }. It should be directly parseable by JSON. Don't put json word in response.
    Here is the data of available gadgets ${JSON.stringify(data)}.
    Also while suggesting any product pick exactly one of the gadget from the data and give exactly id of that data.`,
    generationConfig: {
      maxOutputTokens: 350,
    },
  });
  // console.log(model)
  console.log("data", data);

  const chat = model.startChat();
  return chat;
}

export async function resolveQuery(query) {
  // For text-only input, use the gemini-pro model
  let chatbotOn = true;
  if (!chat) {
    chat = initializeModel();
  }

  const result = await chat.sendMessage(query);
  const response = await result.response;
  const text = response.text();
  const cleanString = text.replace(/```json|```/g, "").trim();
  console.log(cleanString)
  console.log(text);
  return JSON.parse(cleanString);
}
