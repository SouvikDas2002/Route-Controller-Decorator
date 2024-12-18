import { Request, Response } from "express";
import { Controller} from "../controller/decorator";
import { Service } from "typedi";
// import Controller, { Post } from '../controller/decorator';

@Service()
export default class NoteService {
  //   constructor(private readonly noteDA: NoteDatabaseAccessLayer) {}
  
  CreateNote = async (req: Request, res: Response) => {
    res.status(200).send({
      message: "This is create Note route",
    });
  };
}
