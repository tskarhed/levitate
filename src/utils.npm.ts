import * as path from "path";
import * as fs from "fs";
import execa from "execa";

export const TYPE_DEFINITION_FILE_NAME = "index.d.ts";
export const TMP_FOLDER_PREFIX = ".tmp-";

export async function installPackage(packageName: string) {
  const tmpPackageFolder = createTmpPackageFolder(packageName);

  await execa("npm", ["install"], { execPath: tmpPackageFolder });

  return tmpPackageFolder;
}

export function uninstallPackage(packageName: string) {
  removeTmpFolder(packageName);
}

export function getTmpFolderName(packageName: string) {
  return path.resolve(path.join(__dirname, "..", `${TMP_FOLDER_PREFIX}-${packageName}`));
}

export function removeTmpFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  if (fs.existsSync(tmpPackageFolder)) {
    fs.unlinkSync(tmpPackageFolder);
  }
}

export function createTmpPackageFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  removeTmpFolder(packageName);
  fs.mkdirSync(tmpPackageFolder);

  return tmpPackageFolder;
}

export function getTypeDefinitionFilePath(folder: string) {
  return path.join(folder, TMP_FOLDER_PREFIX);
}
