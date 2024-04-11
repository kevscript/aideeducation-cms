import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";
import { isEditor } from "../../access/isEditor";
import {
  BoldTextFeature,
  HTMLConverterFeature,
  HeadingFeature,
  ItalicTextFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
  UnorderedListFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const Tutorials: CollectionConfig = {
  slug: "tutorials",
  admin: {
    group: "Acceuil",
    description: "Les tutoriels proposés par l'association.",
    useAsTitle: "title",
    defaultColumns: ["title", "order", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Tutoriel",
    plural: "Tutoriels",
  },
  access: {
    read: isEditorOrPublished,
    update: isEditor,
    create: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
      maxLength: 300,
      admin: {
        placeholder: "ex: Comment demander de l'aide.",
      },
    },
    {
      name: "steps",
      type: "array",
      required: true,
      label: "Etape(s)",
      fields: [
        {
          type: "text",
          name: "title",
          maxLength: 300,
          required: true,
          label: "Titre de l'étape",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "images",
          label: "Image (format smartphone)",
          required: true,
        },
        {
          type: "richText",
          name: "description",
          required: true,
          label: "Description de l'étape",
          editor: lexicalEditor({
            features: () => [
              BoldTextFeature(),
              ItalicTextFeature(),
              UnderlineTextFeature(),
              StrikethroughTextFeature(),
              ParagraphFeature(),
              HeadingFeature({}),
              UnorderedListFeature(),
              OrderedListFeature(),
              LinkFeature({}),
              HTMLConverterFeature({}),
            ],
          }),
        },
        lexicalHTML("description", { name: "description_html" }),
        orderField,
      ],
    },
    orderField,
    publishedField,
  ],
};
