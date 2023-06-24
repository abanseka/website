import { defineDocumentType } from "contentlayer/source-files";

const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      required: true,
      type: "string",
      description: "The title of the note",
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

export default Note;
