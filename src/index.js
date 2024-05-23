const express = require("express");
const connect = require("./config/database");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server_config");
const apiRoutes = require("./routes");
// const {
//   TweetRepository,
//   UserRepository,
//   LikeRepository,
// } = require("./repository");
// const LikeService = require("./service/LikeService");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`server is running on port : ${PORT}`);
  await connect();
  console.log("database Connected");

  // const tweetRepo = new TweetRepository();
  // const userRepo = new UserRepository();
  // const likeService = new LikeService();
  // const likeRepo = new LikeRepository();

  // const tweet = await tweetRepo.create({
  //   content: "this is my #tweet",
  // });
  // console.log(tweet);
  // const tweets = await tweetRepo.getAll(0, 10);

  // const createUser = await userRepo.create({
  //   email: "aman@gmail.com",
  //   password: 123456,
  //   name: "Aman",
  // });
  // console.log(createUser);
  // const User = await userRepo.getAll();

  // await likeService.toggleLike(tweets[0].id, "Tweet", User[0].id);
});
