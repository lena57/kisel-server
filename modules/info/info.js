let names = [];
export const info = (req, res) => {
  names.push(req.body.name)
  res.status(200).json(names);
};
