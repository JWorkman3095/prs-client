import { User } from "../user/user.class";

export class Request {
    id: number = 0; 
    description: string = "";
    justification: string = "";
    rejectionreason: string = "";
    deliverymode: string = "";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user!: User;

    //requestline: requestlines ;

}