import { Router } from 'express';
import NoteService from '../service/note.service';
import {Controller } from '../controller/decorator';
import { Service } from 'typedi';

@Controller()
export default class NoteRouter {
  constructor(private readonly noteService: NoteService) {}

  SetRouter(router: Router,baseRoute:string) {
    router.post('/note', this.noteService.CreateNote);
  }
}