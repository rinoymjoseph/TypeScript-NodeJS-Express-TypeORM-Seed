import "reflect-metadata";
import { createConnection } from "typeorm";
import * as appConfig from "../common/app-config";
import { EmployeeEntity } from "../entities/employee-entity";

export class EmployeeRepo {

    getAllEmployees() {
       return createConnection(
            appConfig.dbOptions
        ).then(async connection => {
            // Here you can start to work with your entities
            let emps = await connection.manager.find(EmployeeEntity);
            console.log("All Employees from the db: ", emps);
            return emps;
        }).catch(error => console.log(error));
    }

}