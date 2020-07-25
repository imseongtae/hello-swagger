import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import userRouter from './api/user';

const app = express();


const swaggerDefinition = {
  info: {
      title: 'School Server API',
      version: '1.0.0',
      description: 'API description',
  },
  host: 'localhost:3000',
  basePath: '/',
  securityDefinitions: {
      bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
      },
  },
};
const options = {
  swaggerDefinition,
  apis: ['./schemas/*.js'],
};
const swaggerSpec = swaggerJsDoc(options)


app.use(morgan('dev'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


app.use('/users', userRouter);


app.listen(3000, () => {
  console.log('Server is running at 3000');
})

