import path from 'path';
import fs from 'fs';

const savePath = path.join(__dirname, '..', '..', '../data');

export function saveInfoToJson(name: string, data: any) {
   const fullPath = name.endsWith('.json')
      ? path.join(savePath, name)
      : path.join(savePath, name + '.json');

   const cleanedData = typeof data === 'string' ? data : JSON.stringify(data);

   fs.writeFileSync(fullPath, cleanedData);
}
