import { IAuthService } from "@/src/domain/ports/auth-service";

export class LocalStorageAuthService implements IAuthService {
  private readonly TOKEN_KEY = "adminToken";
  private readonly VALID_TOKEN = "resume-admin-token-2023";

  async login(token: string): Promise<void> {
    if (token !== this.VALID_TOKEN) {
      throw new Error("Invalid token");
    }
    if (typeof window === "undefined") return;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  async logout(): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.TOKEN_KEY);
  }

  async isAuthenticated(): Promise<boolean> {
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token === this.VALID_TOKEN;
  }
}
