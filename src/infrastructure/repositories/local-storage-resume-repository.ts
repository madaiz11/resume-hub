import { ResumeType } from "@/src/domain/resume/entities";
import { IResumeRepository } from "@/src/domain/resume/ports/resume-repository";
import { mockResumeData } from "../mock/mock-data";

export class LocalStorageResumeRepository implements IResumeRepository {
  private readonly STORAGE_KEY = "resumeData";

  async getResumeData(): Promise<ResumeType> {
    if (typeof window === "undefined") {
      return mockResumeData;
    }

    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) {
      const initialData = mockResumeData;
      await this.updateResumeData(initialData);
      return initialData;
    }

    return JSON.parse(storedData);
  }

  async updateResumeData(data: ResumeType): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
