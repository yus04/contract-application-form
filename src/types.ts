export interface BasicInfo {
  fullName: string;
  furigana: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  myNumber: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mailingAddress: string;
}

export interface EmploymentInfo {
  occupation: string;
  employer: string;
  employerAddress: string;
  annualIncome: number;
  yearsEmployed: number;
}

export interface TransferAccount {
  bank: string;
  branch: string;
  accountNumber: string;
}

export interface AccountInfo {
  accountType: string;
  transferAccount: TransferAccount;
  usagePurpose: string;
}

export interface IdentityVerification {
  documentType: string;
  documentNumber: string;
  submissionMethod: string;
}

export interface AgreementChecks {
  termsAccepted: boolean;
  antiSocialCheck: boolean;
  electronicDeliveryConsent: boolean;
}

export interface ApplicationForm {
  applicantType: 'individual' | 'corporate';
  basicInfo: BasicInfo;
  contactInfo: ContactInfo;
  employmentInfo: EmploymentInfo;
  accountInfo: AccountInfo;
  identityVerification: IdentityVerification;
  agreementChecks: AgreementChecks;
}
