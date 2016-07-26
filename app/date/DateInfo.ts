export class DateInfo {

    public date:Date;

    constructor(date:Date) {
        this.date = date;
    }

    get weekNumber() :number {
        // Copy date so don't modify original
        let toCopyDate:any = this.date;
        let date:any = new Date(toCopyDate);
        date.setHours(0,0,0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        date.setDate(date.getDate() + 4 - (date.getDay()||7));
        // Get first day of year
        let yearStart:any = new Date(date.getFullYear(),0,1);
        // Calculate full weeks to nearest Thursday
        let weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
        return weekNo;
    }
}