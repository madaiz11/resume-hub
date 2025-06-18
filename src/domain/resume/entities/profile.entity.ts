import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class ProfileEntity {
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

export const ProfileModel = getModelForClass(ProfileEntity);

export type ProfileType = InstanceType<typeof ProfileEntity>;



