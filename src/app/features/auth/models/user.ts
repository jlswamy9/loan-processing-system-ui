export interface User{
    id?:number,
    name?:string,
    role?:string,
    roleName?:string,
    branch?:Branch,
    department?:Department
}

export interface Branch{
  branchId?:number,
  branchName?:string
}

export interface Department{
  departmentId?:number,
  departmentName?:string
}