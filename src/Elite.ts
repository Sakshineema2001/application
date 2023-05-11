export class Elite {
    id !: number;
    name !: string;
    contactNo !: string;
    description !: string;
    paymentMode !: string;
    date !: Date;
    approval !: boolean;
    state !: {
        id : number;
        state : string;
    }
    city !: {
        id : number;
        city : string;
    }
    course !:  {
            id: number;
            courseName : string;
        }
}

export class Course {
    id !: number;
    courseName !: string;
  }

export class State {
    id !: number;
    state !: string;
 }
 
export class City {
    id !: number;
    city !: string;
  }
