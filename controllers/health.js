export const welcome = (req, res) => {
  return res.status(200).json({ message: "Welcome to Clevendario"})
}