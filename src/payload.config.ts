import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";
import Logo from "./components/Logo";
import Icon from "./components/Icon";
import {
  Users,
  Faqs,
  Avatars,
  Icons,
  Illustrations,
  Logos,
  Services,
  Statistics,
  Testimonials,
  Values,
  Partners,
  Socials,
} from "./collections";
import { Config } from "./payload-types";

declare module "payload" {
  export interface GeneratedTypes extends Config {}
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.CLIENT_DEV_URL],
  csrf: [process.env.CLIENT_DEV_URL],
  cookiePrefix: "payload-cms",
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
    meta: {
      titleSuffix: "- AideEducation",
      favicon: "/assets/logo.svg",
      ogImage: "/assets/logo.svg",
    },
    components: {
      graphics: { Logo: Logo, Icon: Icon },
    },
    dateFormat: "HH:mm dd/LL/yy",
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Icons,
    Illustrations,
    Avatars,
    Logos,
    Services,
    Values,
    Statistics,
    Partners,
    Testimonials,
    Faqs,
    Socials,
  ],
  upload: {
    limits: {
      fileSize: 1000000,
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
