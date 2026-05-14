import jwt from "jsonwebtoken";
import models from "../models";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next();
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).send({
      error: "Token mal formatado.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await models.User.findByPk(decoded.id, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      return res.status(401).send({
        error: "Usuário não encontrado.",
      });
    }

    req.context.me = user;

    return next();
  } catch (err) {
    return res.status(401).send({
      error: "Token inválido ou expirado.",
    });
  }
};

export const authenticate = (req, res, next) => {
  if (!req.context.me) {
    return res.status(401).send({
      error: "Não autorizado.",
    });
  }

  next();
};

export default authMiddleware;