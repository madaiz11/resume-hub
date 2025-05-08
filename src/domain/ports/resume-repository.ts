import { IResumeData } from "../entities/resume";

export interface IResumeRepository {
  getResumeData(): Promise<IResumeData>;
  updateResumeData(data: IResumeData): Promise<void>;
}
