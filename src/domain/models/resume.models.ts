import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Experience {
  @Property({ required: true })
  public title!: string;

  @Property({ required: true })
  public company!: string;

  @Property({ required: true })
  public location!: string;

  @Property({ required: true })
  public startDate!: string;

  @Property({ required: false })
  public endDate?: string;

  @Property({ type: () => [String], required: true })
  public description!: string[];

  @Property({ type: () => [String], required: true })
  public skills!: string[];
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Education {
  @Property({ required: true })
  public degree!: string;

  @Property({ required: true })
  public institution!: string;

  @Property({ required: true })
  public location!: string;

  @Property({ required: true })
  public startDate!: string;

  @Property({ required: true })
  public endDate!: string;

  @Property({ required: true })
  public description!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Skill {
  @Property({ required: true })
  public name!: string;

  @Property({ required: true, min: 1, max: 5 })
  public level!: number;

  @Property({ required: true })
  public category!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Project {
  @Property({ required: true })
  public title!: string;

  @Property({ required: true })
  public description!: string;

  @Property({ type: () => [String], required: true })
  public technologies!: string[];

  @Property({ required: false })
  public url?: string;

  @Property({ required: false })
  public image?: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class BurndownPoint {
  @Property({ required: true })
  public date!: string;

  @Property({ required: true })
  public planned!: number;

  @Property({ required: true })
  public actual!: number;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Profile {
  @Property({ required: true })
  public name!: string;

  @Property({ required: true })
  public title!: string;

  @Property({ required: true })
  public summary!: string;

  @Property({ required: true })
  public email!: string;

  @Property({ required: true })
  public phone!: string;

  @Property({ required: true })
  public location!: string;

  @Property({ required: false })
  public linkedin?: string;

  @Property({ required: false })
  public github?: string;

  @Property({ required: false })
  public website?: string;

  @Property({ required: false })
  public avatar?: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Resume {
  @Property({ type: () => Profile, required: true })
  public profile!: Profile;

  @Property({ type: () => [Experience], required: true })
  public experiences!: Experience[];

  @Property({ type: () => [Education], required: true })
  public educations!: Education[];

  @Property({ type: () => [Skill], required: true })
  public skills!: Skill[];

  @Property({ type: () => [Project], required: true })
  public projects!: Project[];

  @Property({ type: () => [BurndownPoint], required: true })
  public burndownPoints!: BurndownPoint[];
}

// Export models
export const ExperienceModel = getModelForClass(Experience);
export const EducationModel = getModelForClass(Education);
export const SkillModel = getModelForClass(Skill);
export const ProjectModel = getModelForClass(Project);
export const BurndownPointModel = getModelForClass(BurndownPoint);
export const ProfileModel = getModelForClass(Profile);
export const ResumeModel = getModelForClass(Resume); 