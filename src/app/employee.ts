export class Employee {
    empid:number | null;
    empname:string | null;
    salary:number | null;

    constructor(a:any,b:any,c:any){
        this.empid = a;
        this.empname = b;
        this.salary = c;
    }
}
