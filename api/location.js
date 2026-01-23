export default function handler(req, res) {
  res.status(200).json({
    city: req.headers["x-vercel-ip-city"] || "Unknown",
    region: req.headers["x-vercel-ip-region"] || "",
    country: req.headers["x-vercel-ip-country"] || "Unknown"
  });
}
