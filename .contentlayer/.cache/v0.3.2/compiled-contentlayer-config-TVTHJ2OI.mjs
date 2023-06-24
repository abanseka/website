// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

// utils/rehyprettyCode.ts
var rehypePrettyCodeOptions = {
  theme: "github-light"
  // keepBackground: true,
};
var rehyprettyCode_default = rehypePrettyCodeOptions;

// utils/NoteSchema.ts
import { defineDocumentType } from "contentlayer/source-files";
var Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      required: true,
      type: "string",
      description: "The title of the note"
    },
    date: {
      required: true,
      description: "The date of the note",
      type: "date"
    },
    description: {
      required: false,
      type: "string",
      description: "The Summary of the note"
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (note) => `/notes/${note._raw.flattenedPath}`
    }
  }
}));
var NoteSchema_default = Note;

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "notes",
  documentTypes: [NoteSchema_default],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehyprettyCode_default]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TVTHJ2OI.mjs.map
