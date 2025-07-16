export interface Certificate{
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialCode: string;
  credentialUrl?: string;
  skills?: string;
}