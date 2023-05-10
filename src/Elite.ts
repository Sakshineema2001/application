export class Elite {
    id !: number;
    name !: string;
    contactNo !: string;
    description !: string;
    paymentMode !: string;
    state !: string;
    date !: Date;
    approval !: boolean;
    course !:  {
            id: number;
            courseName : string;
        }
}

export class Course {
    id !: number;
    courseName !: string;
  }