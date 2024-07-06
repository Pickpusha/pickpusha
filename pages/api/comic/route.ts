import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email query parameter is required" });
  }

  const apiUrl = "https://fwd.innopolis.university/api/hw2";
  const params = new URLSearchParams({ email: email as string });
  const response = await fetch(`${apiUrl}?${params}`);
  const comicId = await response.text();

  const comicResponse = await fetch(
    `https://fwd.innopolis.university/api/comic?id=${comicId}`,
  );
  const comicData = await comicResponse.json();

  res.status(200).json(comicData);
};

export default handler;
