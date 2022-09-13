import { Request, Response } from "express";
import CarModel from "../Model/CarModel";

class CarController {
  public async index(req: Request, res: Response): Promise<Response> {
    let cars = await CarModel.find();
    return res.json(cars);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let car = await CarModel.findById(id);
    return res.json(car);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    let car = await CarModel.create(req.body);
    return res.json(car);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { brand, model, version, year, mileage, exchangeType, salePrice } =
      req.body;
    let car = await CarModel.findByIdAndUpdate(id, {
      brand: brand,
      model: model,
      version: version,
      year: year,
      mileage: mileage,
      exchangeType: exchangeType,
      salePrice: salePrice,
    });
    return res.json(car);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let car = await CarModel.findByIdAndDelete(id);
    return res.json(car);
  }
}

export const carController = new CarController();
