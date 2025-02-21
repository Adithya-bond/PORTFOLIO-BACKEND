const jsonServer =require('json-server')
const server = jsonServer.create();
const router = jsonServer.router("./data.json"); // Ensure db.json exists in the same directory
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});