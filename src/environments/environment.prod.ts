export const environment = {
  production: true,
  domainName: 'https://qa-garnishmenteks',
  region: 'ap-south-1',
  clientId: '6prj77smb5aqumrjuehue61rcj',
  responseType: 'code',
  redirectUrl: 'http://localhost:4200/authentication/verification',          
  authApiUrl: 'https://localhost:44300/api/', 
  employeeApiUrl: 'https://localhost:44383/api/', 
  userApiUrl: 'https://localhost:44384/api/', 
  companyApiUrl: 'https://localhost:44385/api/',
  amountApiUrl: 'https://localhost:44386/api/',
  deductionApiUrl :'https://localhost:44387/api/',
  deductionDisbursementBatchApiUrl : 'https://localhost:44336/api/',
  importApiUrl:'https://localhost:44388/api/',  
    
  idleTime: 600,
  idleTimeOut: 5,
  keepAliveInterval: 5
};