export default async function (req, res) {

  const response = await fetch("http://209.20.157.25:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: req.body.question,
      history: req.body.history,
      temperature: 0.3,
    }),
  });

    const data = await response.json();

    res.status(200).json({ result: data })
}