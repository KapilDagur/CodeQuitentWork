const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function copyFilesWithExtension(sourceDir, targetDir, extension) {
  const files = await readdir(sourceDir);
  
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    const fileStat = await stat(sourcePath);
    
    if (fileStat.isDirectory()) {
      const newTargetDir = path.join(targetDir, file);
      await fs.promises.mkdir(newTargetDir, { recursive: true });
      await copyFilesWithExtension(sourcePath, newTargetDir, extension);
    } else if (file.endsWith(extension)) {
      await copyFile(sourcePath, targetPath);
      console.log(`Copied ${sourcePath} to ${targetPath}`);
    }
  }
}

// Usage example
const sourceDirectory = './SourceDirectory';
const targetDirectory = './DestinyDirectory';
const fileExtension = '.txt'; // Specify the desired file extension here

copyFilesWithExtension(sourceDirectory, targetDirectory, fileExtension)
  .catch(err => console.error(err));
