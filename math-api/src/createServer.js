const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: async (request) => {
        try {
          const { a, b } = request.params;
          const value = mathBasic.add(+a, +b);
          return { value };
        } catch (error) {
          console.log(error);
          return error;
        }
      },
    },
  ]);

  return server;
};

module.exports = createServer;
