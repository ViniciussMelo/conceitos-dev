import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function create(request: Request, response: Response) {
  const user = createUser({
    name: 'vinicius',
    email: 'vinicius@email.com',
    password: '123',
    techs: [
      'C#',
      'React',
      'Node',
      { title: 'Javascript', experience: 100 }
    ]
  });

  return response.json({ message: 'Success', entity: user });
}