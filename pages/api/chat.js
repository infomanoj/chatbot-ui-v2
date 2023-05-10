
const API_URL = "http://54.197.195.44:5000/chatgpt"
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Inside handler");
    try {
      const response = await fetch(
        API_URL,
        {
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST'
        }

      );
      var body = await response.json();
      console.log("Inside body");
      if (response.status >= 400) {
        return res.status(400).json(body);
      }
      if (response.status == 200) {
        return res.status(200).json(body);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'There was an unknown error'
      });
    }
    //res.status(200).json({ short_url: "https://sqzy.me/fadsfsadf" })
    //res.status(200).json({ error: "URL format is invalid" })
  }
}
