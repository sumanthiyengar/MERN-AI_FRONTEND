import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

//=======Generate Content=====
export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    `${apiUrl}/api/v1/openai/generate-content`,
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
