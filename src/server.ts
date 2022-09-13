import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import dotenv from "dotenv";
dotenv.config();
export class Server {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.returnJson();
    this.router();
    this.dbConnection();
  }

  private returnJson() {
    this.server.use(express.json());
  }
  private router() {
    this.server.use(router);
  }

  private dbConnection() {
    const password = process.env.DB_PASSWORD;
    mongoose
      .connect(
        `mongodb+srv://joaomarcos:${password}@cluster0.rmszhdo.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("Database connected");
      })
      .catch(() => {
        console.log("Error connecting");
      });
  }
}
