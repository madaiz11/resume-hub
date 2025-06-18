import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { DegreeLevelEnum } from "../enums";


@modelOptions({ schemaOptions: { timestamps: true } })
export class EducationEntity {
  @Property({ required: true, enum: DegreeLevelEnum })
  public degree!: DegreeLevelEnum;

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

export const EducationModel = getModelForClass(EducationEntity);

export type EducationType = InstanceType<typeof EducationEntity>;