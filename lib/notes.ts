import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

const notesDirectory = path.join(process.cwd(), "notes");

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(notesDirectory);

  const allNotesData = fileNames.map((fileName) => {
    const noteslug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      noteslug,
      ...matterResult.data,
    };
  });

  return allNotesData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(notesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getNotesData(id: string) {
  const fullPath = path.join(notesDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedNotes = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content);
  const htmlContent = processedNotes.toString();

  return {
    id,
    htmlContent,
    ...matterResult.data,
  };
}
