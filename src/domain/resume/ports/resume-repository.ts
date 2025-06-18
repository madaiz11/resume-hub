import { ResumeType } from "../entities";

export interface IResumeRepository {
  getResumeData(): Promise<ResumeType>;
  updateResumeData(data: ResumeType): Promise<void>;
}
