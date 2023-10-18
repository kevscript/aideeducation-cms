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
  Documents,
  Jobs,
  Members,
  News,
  Reviews,
} from "./collections";

export default buildConfig({
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
    dateFormat: "dd/LL/yyyy",
  },
  editor: lexicalEditor({}),
  collections: [Users, Members, Faqs, Jobs, News, Reviews, Avatars, Documents],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
