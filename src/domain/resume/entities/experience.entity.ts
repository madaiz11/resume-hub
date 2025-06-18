import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { SkillEntity } from ".";

@modelOptions({ schemaOptions: { timestamps: true } })
export class ExperienceEntity {
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

  @Property({ type: () => [SkillEntity], required: true })
  public skills!: SkillEntity[];
}

export const ExperienceModel = getModelForClass(ExperienceEntity);

export type ExperienceType = InstanceType<typeof ExperienceEntity>;
