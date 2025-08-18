export interface FetchGoogleCallbackResponse {
  success: boolean;
  // TODO: update user type
  user: User;
  access_token: string;
}

interface User {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
}
