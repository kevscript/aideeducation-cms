import path from "path";
import { Config } from "./payload-types";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";
import Logo from "./components/Logo";
import Icon from "./components/Icon";
import {
  Users,
  Services,
  TeamValues,
  Statistics,
  Testimonials,
  Faqs,
  Jobs,
  Orientations,
  Members,
  Socials,
  Avatars,
  Documents,
  Icons,
  Videos,
  Logos,
  Partners,
  Images,
} from "./collections";
import { Association, Dons } from "./globals";
import GoogleLogin from "./components/GoogleLogin";

declare module "payload" {
  export interface GeneratedTypes extends Config {}
}

const prod = process.env.NODE_ENV === "production";
const serverUrl = prod ? process.env.PAYLOAD_SERVER_URL : `http://localhost:4000`;
const clientUrl = prod ? process.env.PAYLOAD_CLIENT_URL : `http://localhost:3000`;

export default buildConfig({
  serverURL: serverUrl,
  cors: [clientUrl],
  csrf: [clientUrl],
  cookiePrefix: "payload-cms",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- AideEducation",
      favicon: "/assets/logo.svg",
      ogImage: "/assets/logo.svg",
    },
    components: {
      graphics: { Logo: Logo, Icon: Icon },
      afterLogin: [GoogleLogin],
    },
    dateFormat: "HH:mm dd/LL/yy",
  },
  editor: lexicalEditor({}),
  globals: [Association, Dons],
  collections: [
    Users,
    Services,
    TeamValues,
    Statistics,
    Faqs,
    Testimonials,
    Members,
    Orientations,
    Partners,
    Jobs,
    Socials,
    Avatars,
    Documents,
    Icons,
    Images,
    Videos,
    Logos,
  ],
  upload: {
    limits: {
      fileSize: 10000000,
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
