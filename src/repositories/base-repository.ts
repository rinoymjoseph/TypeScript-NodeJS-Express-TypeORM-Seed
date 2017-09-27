import "reflect-metadata";
import { createConnection, Repository } from "typeorm";
import * as appConfig from "../common/app-config";

export class BaseRepo<T> extends Repository<T> {

   

}