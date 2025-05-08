export interface IAuthService {
  login(token: string): Promise<void>;
  logout(): Promise<void>;
  isAuthenticated(): Promise<boolean>;
}
