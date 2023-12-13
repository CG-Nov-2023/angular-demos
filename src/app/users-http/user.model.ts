import { Roles } from "./roles.model";

export interface User{
    userId: number,
    userName: string,
    userPassword: string,
    allRolesPojo: Roles[]
}