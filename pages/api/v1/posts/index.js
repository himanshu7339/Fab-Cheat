import Mysql from "../../../../Mysql/Mysql";

// Get All Post
export default async (req, res) => {
  Mysql.query("SELECT * FROM post", (error, results) => {
    if (error) {
      res.status(400).json({
        message: "post is not found",
      });
    }
    res.status(200).json(results);
  });
};
