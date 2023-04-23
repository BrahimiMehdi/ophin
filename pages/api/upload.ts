import { NextApiRequest, NextApiResponse } from "next";
type SheetResponse = "Success" | "Data upload failed";
export default async function asynchandler(req: NextApiRequest, res: NextApiResponse<SheetResponse>) {
  if (req.method === "POST") {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETAPI_URL + "?action=" + req.body.action, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      return res.status(response.ok ? 200 : 400).send(response.ok ? "Success" : "Data upload failed");
    } catch (error) {
      console.error(error);
      return res.status(400).send("Data upload failed");
    }
  }
  return res.status(400).send("Data upload failed");
}
