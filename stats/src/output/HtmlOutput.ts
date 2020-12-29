import fs from 'fs'
import { Output } from "../Summary";

export class HtmlOutput implements Output {
  print(data: string) {
    const html = `
      <h3>Analyzed data</h3>
      <p>${data}</p>
    `
    fs.writeFileSync('report.html', html)
  }
}