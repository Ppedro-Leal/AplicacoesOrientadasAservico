const WHITELIST = [
  { method: "POST", path: "/session/login" },
  { method: "POST", path: "/session/refresh" },
  { method: "POST", path: "/users" },
];

const PROTECTED_METHODS = ["POST", "PUT", "DELETE"];

const protectRoutes = (req, res, next) => {
  const method = req.method;
  const path = req.originalUrl.split("?")[0];

  if (method === "GET" && path === "/session") {
    if (!req.context.me) {
      return res.status(401).send({
        error: "Não autorizado.",
      });
    }

    return next();
  }

  // TODOS os outros GET são públicos
  if (method === "GET") {
    return next();
  }

  const isProtectedMethod = PROTECTED_METHODS.includes(method);

  if (!isProtectedMethod) {
    return next();
  }

  const isWhitelisted = WHITELIST.some(
    (entry) => entry.method === method && entry.path === path,
  );

  if (isWhitelisted) {
    return next();
  }

  if (!req.context.me) {
    return res.status(401).send({
      error: "Não autorizado.",
    });
  }

  next();
};

export default protectRoutes;