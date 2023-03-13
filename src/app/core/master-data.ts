export enum StatusEnum {
    Active = 1,
    Inactive = 2,
}

export enum EmploymentStatusEnum {
    Active = 1,
    Inactive = 2,
}
export enum PayFrequencyEnum {
    'Daily' = 1,
    'Weekly' = 2,
    'Biweekly' = 3,
    'Semi-Monthly' = 4,
    'Monthly' = 5,
}

export enum DeductionStatusEnum {
    Active = 1,
    Inactive = 2,
}


export enum DeductionAccountStatusEnum {
    Active = 1,
    Inactive = 2,
}

export enum CalculationTypeEnum {
    "Flat Dollar Amount" = 1,
    "Percentage Amount" = 2,
    "Leave Employee with Net Pay Equal To A Specified Amount" = 3
}

export enum PercentageAmountTargetWagesEnum {
    "Federal Definition of Disposable Income" = 1,
    "Net Pay" = 2,
    "All Earnings" = 3
}

export enum PercentageAmountProtectedWagesEnum {
    "Federal Definition of Disposable Income" = 1,
    "Net Pay" = 2,
    "All Earnings" = 3
}

export enum ProtectedIncomeTypeEnum {
    "Percentage" = 1,
    "Flat Amount" = 2,
    "Federal Minimum Take Home Schedule" = 3
}

export enum FrequencyEnum {
    "Every Payroll" = 1,
    "1st Payroll of the Month" = 2,
    "2nd Payroll of the Month" = 3,
    "3rd Payroll of the Month" = 4,
    "4th Payroll of the Month" = 5,
    "Last Payroll of the Month" = 6,
    "Monthly" = 7,
    "Quarterly" = 8
}


export enum SecondaryFrequencyEnum {
    "1st Payroll of the Month" = 1,
    "2nd Payroll of the Month" = 2,
    "3rd Payroll of the Month" = 3,
    "4th Payroll of the Month" = 4,
    "Last Payroll of the Month" = 5,
}
       
export enum TertiaryFrequencyEnum {
    "1st Month" = 1,
    "2nd Month" = 2,
    "3rd Month" = 3,
}

export enum AdminFeeTypeEnum {
    "Percentage" = 1,
    "Flat Amount" = 2
}

export enum AdminFeeSubTypeEnum {
    Exclusive = 1,
    Inclusive = 2
}


export enum RoleEnum {
    Admin = "Admin",
    Processor = "Processor",
}

export const ValidationLength = {
    MaxLengthName: 60,
    MinLengthName: 2,
    MinLengthPhone: 10,
    MaxLengthPhone: 10,
    maxLengthNoteSubject: 100,
    maxLengthBodyEditor: 300,
}

export const DeductionValidationLength={
    MinLength: 2,
    MaxLength: 50,
}

export const AsciiCode = {
    Zero: 48,
    Nine: 57,
    Space: 32,
    A: 65,
    Z: 90,
    a: 97,
    z: 122,
}

export const MaximumFileSize = {
    MAX_FILE_SIZE: 5242880
}

export enum UserStatusEnum {
    Active = 1,
    Inactive = 0,
}

export enum UserRoleEnum {
    Admin = "Admin",
    Processor = "Processor",
}


export enum noteType {
    Note = "Note",
    Comment = "Comment",
    Error = "Error",
    Authentication = "Authentication"
}
export enum UserType{
    Admin ="User Admin",
    Processor= "User Processor",
    Employee="Employee"
}

export enum GeneralValueEnum{
    Ssn='000000000',
    maxForm=98
}

export enum SsnMaximumLength{
    MaximumLength = 11
}

export enum DeductionBatchStatus{
   "Pending" = 1,
   "In Progress" = 2,
   "Processed" = 3,
   "Approved" = 4,
   "Process Queued" = 5,
   "Approve Queued" = 6,
   "Process Started" = 7,
   "Approve Started" = 8
}

export enum DeductionBatchType{
    "Deduction Disbursement" = 1
}

export enum Imports{
    "Deduction Accounts"=1,
    "Employees" = 2,
    "Deduction Details" = 3,
    "Edit Deduction Details" = 4
}
export enum AttachmentItemType{
    "Import" = 1
}

export enum PayLoadEntryStatus{
    "Pending" = 1,
    "Rejected" = 2,
    "Approved" = 3,
    "In Process" = 4
}

export enum UserEnumRole {
    Admin = "admin",
    Processor = "processor",
}

export enum DeductionEntriesEnum{
    DeductionDisbursementBatch =1,
    DeductionAccount = 2,
    Deduction = 3,
    Employee = 4,
    DeductionEntry = 5
}

export enum EntryType{
    "Deduction"= 1,
    "Admin Fee"= 2
}
export enum DeductionEntryStatus
{
    Pending = 1,
    Approved = 2,
    Processed = 3,
    Paid = 4,
    Batched = 5,
    Rejected = 6,
    Cancelled = 7,
    Completed = 8,
    Void = 9,
}
export enum PayLoadEnums{
    DeductionUrl = "deduction-disbursement-list",
    For="for"
}
