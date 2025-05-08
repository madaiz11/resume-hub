"use client";

import { useEffect, useState } from "react";
import { mockResumeData, ResumeData, getStoredResumeData, storeResumeData } from "./mock-data";

export function useResumeData() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to get data from local storage first
    const storedData = getStoredResumeData();
    
    if (storedData) {
      setResumeData(storedData);
    } else {
      // If no stored data, use mock data
      setResumeData(mockResumeData);
      // Store mock data for future use
      storeResumeData(mockResumeData);
    }
    
    setIsLoading(false);
  }, []);

  const updateResumeData = (newData: ResumeData) => {
    setResumeData(newData);
    storeResumeData(newData);
  };

  return {
    resumeData,
    isLoading,
    updateResumeData
  };
}

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check for token in localStorage
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
    
    // Listen for storage changes (in case user logs in/out in another tab)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);
  
  const login = (token: string) => {
    localStorage.setItem('adminToken', token);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };
  
  return {
    isAuthenticated,
    login,
    logout
  };
}