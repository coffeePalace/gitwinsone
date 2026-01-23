export default async function handler(req, res) {
  const data = {
    city: req.headers["x-vercel-ip-city"] || "Unknown",
    country: req.headers["x-vercel-ip-country"] || "Unknown",

    // ✅ ADD THESE TWO
    platform: "vercel",
    platform_page: "homepage",

    timestamp_utc: new Date().toISOString()
  };

  try {
    await fetch(process.env.AWS_TRACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error("AWS send failed:", err);
  }

  res.status(200).json(data);
}
