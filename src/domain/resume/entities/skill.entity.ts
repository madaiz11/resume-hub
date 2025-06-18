import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { SkillLevelEnum, SkillCategoryEnum } from "../enums";

@modelOptions({ schemaOptions: { timestamps: true } })
export class SkillEntity {
  @Property({ required: true })
  public name!: string;

  @Property({ required: true, enum: SkillLevelEnum })
  public level!: SkillLevelEnum;

  @Property({ required: true, enum: SkillCategoryEnum })
  public category!: SkillCategoryEnum;
}

export const SkillModel = getModelForClass(SkillEntity);

export type SkillType = InstanceType<typeof SkillEntity>;
