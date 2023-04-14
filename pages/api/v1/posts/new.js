import Mysql from "../../../../Mysql/Mysql";

// create Post
export default async (req, res) => {
  const post = {
    image:req.body.image,
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  };
  const query = "INSERT INTO post SET ?";
  await Mysql.query(query, post, (error, results) => {
    if (error) {
      res.status(400).json({
        error: "Post is not created",
      });
    }
    res.status(200).json(results);
  });
};
