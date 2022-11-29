import { CONTACT_FORM_TABLE_NAME } from "../../config";
import { client } from "../../data-form";

export default async function handler(req, res) {
    console.log(req)
    console.log(res)
  // Don't allow methods we don't support
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Unsupported request method' })
    return
  }

  // explicitly getting the fields we support for safety and consistency
  const { name, email, comment } = req.body;

  // write our data to the database
  try {
    await client.from(CONTACT_FORM_TABLE_NAME).insert({ name, email, comment });
    res.status(200).json({message: "Success: the data has been entered into the table"})
  } catch (error) {
    res.status(400).json({ message: "Error: the data has not been entered into the table" })
  }
}