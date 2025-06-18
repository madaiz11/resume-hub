import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class ProjectEntity {
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

export const ProjectModel = getModelForClass(ProjectEntity);

export type ProjectType = InstanceType<typeof ProjectEntity>;
