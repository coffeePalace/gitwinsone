export default async function handler(req, res) {
  const data = {
    city: req.headers["x-vercel-ip-city"] || "Unknown",
    region: req.headers["x-vercel-ip-region"] || "",
    country: req.headers["x-vercel-ip-country"] || "Unknown",
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(process.env.AWS_TRACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error("Failed to send to AWS:", err);
  }

  // Still return data to browser
  res.status(200).json(data);
}
