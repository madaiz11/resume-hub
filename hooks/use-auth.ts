"use client";

import { useState, useEffect } from "react";
import { LocalStorageAuthService } from "@/src/infrastructure/services/local-storage-auth-service";

const authService = new LocalStorageAuthService();

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  async function checkAuth() {
    const authenticated = await authService.isAuthenticated();
    setIsAuthenticated(authenticated);
  }

  async function login(token: string) {
    await authService.login(token);
    setIsAuthenticated(true);
  }

  async function logout() {
    await authService.logout();
    setIsAuthenticated(false);
  }

  return {
    isAuthenticated,
    login,
    logout
  };
} 