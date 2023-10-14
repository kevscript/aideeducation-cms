/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    faqs: Faq;
    jobs: Job;
    members: Member;
    news: News;
    reviews: Review;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  firstname?: string;
  lastname?: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface Faq {
  id: string;
  question: string;
  answer: string;
  active: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface Job {
  id: string;
  role: string;
  description?: string;
  active: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface Member {
  id: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  role?: string;
  quote?: string;
  joined?: string;
  rank?: number;
  status?: "active" | "retired";
  visible?: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface News {
  id: string;
  title: string;
  description?: string;
  content?: {
    [k: string]: unknown;
  }[];
  date?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Review {
  id: string;
  username: string;
  title?: string;
  comment?: string;
  active?: boolean;
  date?: string;
  rating?: number;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}

declare module "payload" {
  export interface GeneratedTypes {
    collections: {
      users: User;
      faqs: Faq;
      jobs: Job;
      members: Member;
      news: News;
      reviews: Review;
      "payload-preferences": PayloadPreference;
      "payload-migrations": PayloadMigration;
    };
  }
}
