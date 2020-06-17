import { Request, Response } from "express";
import createUSer from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUSer({
    name: "Rafael",
    email: "rafa@gmail.com",
    password: "kajdkljskl",
    techs: [
      "Node.js", 
      "Rust", 
      "C++", 
      { title: "JavaScript", experience: 75 }
    ],
  });
  return response.json({ message: "Hello World!" });
}
