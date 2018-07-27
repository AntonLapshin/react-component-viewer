const fs = require('fs');

const root = __dirname + '/../../../';

const { path } = require(root + 'package.json').viewer;
console.log(path);

const components = [];

const readDir = dir => {
    fs.readdirSync(dir, 'utf8').forEach(filename => {
        const path = dir + '/' + filename;
        console.log(path);
        if (fs.lstatSync(path).isDirectory()) {
            readDir(path);
        } else if (filename.endsWith('.js') && filename.indexOf('.mock.js') === -1) {
            if (filename[0] === filename[0].toUpperCase()) {
                const name = filename.replace('.js', '');
                const mockPath = path.replace(name, name + '.mock');
                components.push({
                    name,
                    path,
                    mockPath
                });
            }
        }
    });
};

readDir(path);

const imports = components.map(c => {
    return `import ${c.name} from "../../../${c.path}";\r\n`;
}).join('');

const items = components.map(c => {
    return `  { name: '${c.name}', Component: ${c.name} }`;
}).join(',\r\n');

const data = `${imports}
export const items = [
${items}
];
`;

fs.writeFileSync(root + 'src/viewer/generated/meta2.js', data);
