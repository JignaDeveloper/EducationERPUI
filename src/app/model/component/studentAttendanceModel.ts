export class StudentAttendanceModel {
    attendanceDate: string;
    classList: any[];
    classId: number;
    sectionList: any[];
    sectionId: number;
    attendanceMarkList: StudentAttendanceMark[];
  }
  
  export class StudentAttendanceMark {
    srno: number;
    studentId: number;
    studentName: string;
    rollNo: number;
    attendanceMark: string;
    remarks: string;
  }
  
  export class StudentAttendanceListModel {
    studentName: string;
    class: string;
    section: string;
    month: string;
    year: string;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    nine: string;
    ten: string;
    eleven: string;
    twelve: string;
    thirteen: string;
    fourteen: string;
    fifteen: string;
    sixteen: string;
    seventeen: string;
    eightteen: string;
    nineteen: string;
    twenty: string;
    twentyOne: string;
    twentyTwo: string;
    twentyThree: string;
    twentyFour: string;
    twentyFive: string;
    twentySix: string;
    twentySeven: string;
    twentyEight: string;
    twentyNine: string;
    thirty: string;
    thirtyOne: string;
  }
  