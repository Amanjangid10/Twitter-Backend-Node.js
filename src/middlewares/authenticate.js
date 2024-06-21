const passport = require("passport");

export const authenticate = async (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) next(err);
    if (!user) {
      return res.status(401).json({
        message: "unauthorised access ",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};
