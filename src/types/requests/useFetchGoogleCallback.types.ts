export interface FetchGoogleCallbackResponse {
  success: boolean;
  user: User;
  access_token: string;
}

interface User {
  _id: string;
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
}
