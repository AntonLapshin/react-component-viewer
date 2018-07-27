const fs = require("fs");

const root = __dirname + "/../../../";
const { path } = require(root + "package.json").viewer;
const components = [];

const readDir = dir => {
  fs.readdirSync(dir, "utf8").forEach(filename => {
    const path = dir + "/" + filename;
    if (fs.lstatSync(path).isDirectory()) {
      readDir(path);
    } else if (
      filename.endsWith(".js") &&
      filename.indexOf(".mock.js") === -1
    ) {
      if (filename[0] === filename[0].toUpperCase()) {
        const name = filename.replace(".js", "");
        const mockPath = path.replace(name, name + ".mock");
        components.push({
          name,
          path,
          mockPath: fs.existsSync(mockPath) ? mockPath : undefined
        });
      }
    }
  });
};

readDir(path);

const imports = components
  .map(c => {
    const mockImport = c.mockPath
      ? `import ${c.name}Mock from "../../../${c.mockPath}";\r\n`
      : "";
    return `import ${c.name} from "../../../${c.path}";\r\n${mockImport}`;
  })
  .join("");

const items = components
  .map(c => {
    const mock = c.mockPath ? `, mock: ${c.name}Mock ` : "";
    return `  { name: '${c.name}', Component: ${c.name}${mock} }`;
  })
  .join(",\r\n");

const data = `/* This file is auto generated */

${imports}
export const items = [
${items}
];
`;

fs.writeFileSync(root + "src/viewer/generated/meta.js", data);
