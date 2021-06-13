export interface ISpecialist {
    id:string;
    slideNumber: number;
    name: string;
    photo: string;
    meetings: {
        date: {
            dayOfMonth: string;
            month: string;
        };
        time: string;
    }
    visitTime: [
        {
            id: string;
            time: string;
        }
    ]
    visitDate: [
        {
            id: number;
            dayOfWeek: string;
            dayOfMonth: string;
            month: string;
        }
    ]
}