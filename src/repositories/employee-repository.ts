import { EmployeeEntity } from "../entities/employee-entity";
import { getManager } from "typeorm";

export class EmployeeRepo {

    getAllEmployees() {
        // get Employee repository and find all employees
        return getManager().getRepository(EmployeeEntity).find();
    }

    saveEmployee(employee: EmployeeEntity) { 
          return getManager().getRepository(EmployeeEntity).save(employee);
    }

}