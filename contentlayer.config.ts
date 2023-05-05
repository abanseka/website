import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      required: true,
      type: "string",
      description: "The title of the note",
    },
    date: {
      required: true,
      description: "The date of the note",
      type: "date",
    },
    description: {
      required: false,
      type: "string",
      description: "The Summary of the note",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (note) => `/notes/${note._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
});
