import User from "../model/user";

const JWT = require("passport-jwt");

const jwtStrategy = JWT.Strategy;
const extractJwt = JWT.ExtractJwt;

const options = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

export const passportAuth = async (passport) => {
  passport.use(
    new jwtStrategy(options, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );

  try {
  } catch (error) {
    console.log(error);
    throw error;
  }
};
