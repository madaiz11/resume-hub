import { prop as Property, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { EducationEntity, ExperienceEntity, ProfileEntity, ProjectEntity, SkillEntity } from ".";

@modelOptions({ schemaOptions: { timestamps: true } })
export class ResumeEntity {
    @Property({ type: () => ProfileEntity, required: true })
    public profile!: ProfileEntity;

    @Property({ type: () => [ExperienceEntity], required: true })
    public experiences!: ExperienceEntity[];

    @Property({ type: () => [EducationEntity], required: true })
    public educations!: EducationEntity[];

    @Property({ type: () => [SkillEntity], required: true })
    public skills!: SkillEntity[];

    @Property({ type: () => [ProjectEntity], required: true })
    public projects!: ProjectEntity[];
}

export const ResumeModel = getModelForClass(ResumeEntity);

export type ResumeType = InstanceType<typeof ResumeEntity>;
