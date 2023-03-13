import { environment } from "src/environments/environment"


export const apiConstants = {
    getAccessToken: 'Auth/GetAcessToken',
    refreshIdToken: 'Auth/RefreshIdToken',
    getCurrentUserDetails : 'Users/GetCurrentUserDetails'
}


export const StudentServiceName = {
    AddStudent :environment.studentApiUrl+'Student/CreateStudent',
    GetAllStudents:environment.studentApiUrl+'Student/GetStudentList',
    GetStudentDetails:environment.studentApiUrl+'Student/GetStudentDetails',
}