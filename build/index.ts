import { promises as fs } from "fs";
import { join } from "path";
import * as md from "markdown-it";

const parser = md({
	html:true,

}).use(require('markdown-it-named-headings'));

const mark = (m)=>parser.render(m);

let base:string = '';

async function processFile(path)
{
	let lines:string[] = (await fs.readFile(join(__dirname, '../docs', path))).toString().split('\n');
	let data:string = lines.join('\n');
	data = mark(data);
	const result = base.replace('__page__', data).replace('__title__', path.replace('.md', '')==='index' ? 'lightspeed.js' : path.replace('.md', ''));
	await fs.writeFile(join(__dirname, '../pages/' + path.replace('.md', '.html')), result);
}

async function main(path='')
{
	base = (await fs.readFile(join(__dirname, './base.html'))).toString();
	const files = (await fs.readdir(join(__dirname, '../docs', path)));
	for(const file of files)
	{
		if(file.indexOf('.')===-1)main(file);
		else processFile(file);
	}
}
main();