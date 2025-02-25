export interface UpdateUserDTO {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string; 
  token: string;
}