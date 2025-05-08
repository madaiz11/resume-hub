"use client";

import { IResumeData } from "@/src/domain/entities/resume";
import { LocalStorageResumeRepository } from "@/src/infrastructure/repositories/local-storage-resume-repository";
import { useEffect, useState } from "react";

const resumeRepository = new LocalStorageResumeRepository();

export function useResumeData() {
  const [resumeData, setResumeData] = useState<IResumeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResumeData();
  }, []);

  async function loadResumeData() {
    try {
      const data = await resumeRepository.getResumeData();
      setResumeData(data);
    } catch (error) {
      console.error("Failed to load resume data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateResumeData(newData: IResumeData) {
    try {
      await resumeRepository.updateResumeData(newData);
      setResumeData(newData);
    } catch (error) {
      console.error("Failed to update resume data:", error);
      throw error;
    }
  }

  return {
    resumeData,
    isLoading,
    updateResumeData,
  };
}
