import 'reflect-metadata';
import express, { Express, Router } from 'express';
import {Container} from 'typedi';
// import NoteRouter from './api/note.route';
import {registerControllers} from './util/router';
import NoteService from './service/note.service';
import NoteRouter from './api/note.route';

class App {
  private app: Express;
  private router: Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.setMiddleware();
    this.setRoutes();
    // this.setErrorHandler();
    this.startApp();
  }

  setMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  
  setRoutes() {
    // this.app.use('/', this.router);
    // Container.get(NoteRouter).SetRouter(this.router)
    // wrapAsyncRoutes(this.router);
    const router=Router();
    registerControllers(router,[NoteRouter]);
    this.app.use(router);
    
  }

  // setErrorHandler() {
  //   this.app.use(errorHandler);
  // }

  startApp() {
    const port=3000;
    this.app.listen(port, () => {
      console.log(`Project running on ${port}`);
    });
  }
}

new App();
