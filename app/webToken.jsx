import jwt from "jsonwebtoken";

export const webToken = function (request) {
  try {
    const token = request.cookies.get("token")?.value || '';
    const decodedToken = jwt.verify(token,TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};