import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.resolve("content");

/**
 * Obtém todos os arquivos Markdown e gera os paths de forma recursiva.
 */
export function getAllPaths(dir = CONTENT_DIR, basePath = "") {
  let paths: { params: { slug: string } }[] = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = basePath ? `${basePath}/${file}` : file;

    if (fs.statSync(fullPath).isDirectory()) {
      paths = [...paths, ...getAllPaths(fullPath, relativePath)];
    } else if (file.endsWith(".md")) {
      const slug = relativePath.replace(".md", "");
      paths.push({ params: { slug } });
    }
  });

  return paths;
}

/**
 * Obtém o conteúdo de um arquivo Markdown com múltiplos níveis de slug.
 */
export function getContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content: marked(content),
  };
}

