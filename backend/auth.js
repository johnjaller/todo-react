const passport = require("passport");
const passportJWT = require("passport-jwt");
require("dotenv").config();
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
// users = JSON.parse(users);
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = () => {
  const strategy = new passportJWT.Strategy(
    {
      secretOrKey: process.env.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      console.log(payload.id);
      if (typeof payload.id === "number") {
        const user = await knex("account").select().where({ id: payload.id });
        await user;
        console.log(user);
        if (user) {
          return done(null, { id: user[0].id });
        } else {
          return done(new Error("User not found"), null);
        }
      } else {
        console.log(user);
      }
    }
  );
  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      console.log("auth");
      return passport.authenticate("jwt", { session: false });
    },
  };
};
