import { Request, Response } from "express";
import { EmployeeRepo } from "../repositories/employee-repository";

export let getAllEmployees = async (req: Request, res: Response) => {
  let empRepo: EmployeeRepo = new EmployeeRepo();

  empRepo.getAllEmployees().then((result: any) => {
    console.log("Result : " + result);
    res.send(result);
  });

};