import mongoose from 'mongoose';
import { ResumeModel } from '../../../domain/resume/entities/resume.entity';

export async function up() {
  // Create collections with schema validation
  await mongoose.connection.createCollection('resumes', {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["profile", "experiences", "educations", "skills", "projects"],
        properties: {
          profile: {
            bsonType: "object",
            required: ["name", "title", "summary", "email", "phone", "location"],
          },
          experiences: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["title", "company", "location", "startDate", "description", "skills"],
            },
          },
          educations: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["degree", "institution", "location", "startDate", "endDate", "description"],
            },
          },
          skills: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["name", "level", "category"],
            },
          },
          projects: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["title", "description", "technologies"],
            },
          },
        },
      },
    },
  });
}

export async function down() {
  await mongoose.connection.dropCollection('resumes');
} 