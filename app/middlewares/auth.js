const { UnauthorizedError, UnauthenticatedError } = require("../errors");
const { isTokenValid } = require("../utils/jwt");

const authenticateUser = async (req, res, next) => {
  try {
    let token;
    // check header
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      console.log("token");
      console.log(token);
    }

    if (!token) {
      throw new UnauthenticatedError("Authentication invalid");
    }

    const payload = await isTokenValid({ token });
    console.log("payload");
    console.log(payload);

    // Attach the user and his permissions to the req object
    req.user = {
      email: payload.email,
      role: payload.role,
      name: payload.name,
      organizer: payload.organizer,
      id: payload.userId,
    };
    next();
  } catch (err) {
    console.log("error message: ", err.message);
    next(err);
  }
};

module.exports = authenticateUser;
