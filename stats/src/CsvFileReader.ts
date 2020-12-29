import fs from 'fs'
import { DataReader } from './FootbalReader'

export class CsvFileReader implements DataReader {
  data: string[][] = []
  
  constructor(public fileName: string) {}
  
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((line: string): string[] => line.split(','))
      }

}
