import "reflect-metadata";
import { createConnection } from "typeorm";
import * as appConfig from "../common/app-config";
import { EmployeeEntity } from "../entities/employee-entity";

export class EmployeeRepo {

    getAllEmployees() {
        return createConnection(
            appConfig.dbOptions
        ).then(async connection => {
            let emps = await connection.manager.find(EmployeeEntity);
            console.log("All Employees from the db: ", emps);
            connection.close();
            return emps;
        }).catch(error => console.log(error));
    }

    saveEmployee(employee: EmployeeEntity) {
        return createConnection(
            appConfig.dbOptions
        ).then(async connection => {
            let result = await connection.manager.save(employee);
            console.log("Result ", result);
            connection.close();
            return result;
        }).catch(error => console.log(error));

    }

}