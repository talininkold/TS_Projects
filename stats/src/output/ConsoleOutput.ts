import { Output } from "../Summary";

export class ConsoleOutput implements Output {
  print(data: string) {
    console.log(data)
  }
}