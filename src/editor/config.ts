import {
  AlignFeature,
  BlockQuoteFeature,
  BoldTextFeature,
  FeatureProvider,
  HTMLConverterFeature,
  HeadingFeature,
  IndentFeature,
  ItalicTextFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
  UnoderedListFeature,
} from "@payloadcms/richtext-lexical";

export const customDefaultLexicalFeatures: FeatureProvider[] = [
  BoldTextFeature(),
  ItalicTextFeature(),
  UnderlineTextFeature(),
  StrikethroughTextFeature(),
  ParagraphFeature(),
  HeadingFeature({}),
  AlignFeature(),
  IndentFeature(),
  UnoderedListFeature(),
  OrderedListFeature(),
  LinkFeature({}),
  BlockQuoteFeature(),
  // The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.
  HTMLConverterFeature({}),
];
