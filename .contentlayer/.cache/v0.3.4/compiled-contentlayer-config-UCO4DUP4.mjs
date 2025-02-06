// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

// utils/rehyprettyCode.ts
var rehypePrettyCodeOptions = {
  theme: "github-dark"
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
//# sourceMappingURL=compiled-contentlayer-config-UCO4DUP4.mjs.map
