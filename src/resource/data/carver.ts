import * as path from "path";
import { getResources, makeDir, readJSON, writeJSON } from "../../util";
import ResourceMap = require("../../resource-map");

export interface Carver {
  type: string;
  config: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

export async function readCarvers(dir: string, map: ResourceMap<Carver>): Promise<void> {
  for (const id of await getResources(dir, "worldgen/configured_carver", ".json")) {
    const filePath = path.join(dir, id.toPath("worldgen/configured_carver", ".json"));
    map.set(id, await readJSON(filePath));
  }
}

export async function writeCarvers(dir: string, map: ResourceMap<Carver>): Promise<void> {
  for (const [id, value] of map.entries()) {
    const filePath = path.join(dir, id.toPath("worldgen/configured_carver", ".json"));
    await makeDir(path.dirname(filePath));
    await writeJSON(filePath, value);
  }
}
