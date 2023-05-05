import { makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePrettyCodeOptions from "./utils/rehyprettyCode";
import Note from "./utils/NoteSchema";

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
