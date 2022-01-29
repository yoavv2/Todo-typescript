//import Fastify from 'fastify';
// import mongoose from 'mongoose';

// const fastify = Fastify({
//   logger: true,
// });

// const connect = () => {
//   if (mongoose.connection.readyState === 1) {
//     console.log(' connected');
//   } else {
//     mongoose
//       .connect('mongodb://localhost:27017/Todo')
//       .then(listen)
//       .catch((err) => console.error(err));
//   }
// };

// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' });
// });

// // Run the server!

// function listen() {
//   fastify.listen(4000, function (err, address) {
//     if (err) {
//       fastify.log.error(err);
//       process.exit(1);
//     }
//     // Server is now listening on ${address}
//   });
// }
