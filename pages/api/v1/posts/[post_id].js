import Mysql from "../../../../Mysql/Mysql";

// Get single Post
export default async (req, res) => {
  if (req.method === "GET") {
    const { post_id } = req.query;
    const query = "SELECT * FROM post WHERE post_id = ?";
    Mysql.query(query, post_id, (error, results) => {
      if (error) {
        res.status(404).json({
          error: "post is not found",
        });
      }
      res.status(200).json(results);
    });

    // Update Post
  } else if (req.method === "PUT") {
    const { post_id } = req.query;
    const post = {
      image:req.body.image,
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
    };

    const query = "UPDATE post SET ? WHERE post_id = ?";
    Mysql.query(query, [post, post_id], (error, results) => {
      if (error) {
        res.status(404).json({
          error: "post is not update",
        });
      }
      res.status(200).json(results);
    });

    // Delete Post
  } else if (req.method === "DELETE") {
    const { post_id } = req.query;

    const query = "DELETE FROM post WHERE post_id = ?";
    Mysql.query(query, post_id, (error, results) => {
      if (error) {
        res.status(404).json({
          error: "post delete unsecessfull",
        });
      }
      res.status(200).json({
        error: "post delete sucessully",
      });
    });
  }
};
