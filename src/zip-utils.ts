function createFileTreeAsText(entries) {
    let result = 'Contents:\n';
    entries.forEach(e => result += '  - ' + (e.isDirectory ? 'Folder: ' : 'File:   ') + ' ' + e.entryName + '\n');
    return result;
}

export function getTextForZipContents(filePath): Promise<string> {
    return new Promise((resolve, reject) => {
        let AdmZip = require('adm-zip');
        let zip = new AdmZip(filePath);
        let zipEntries = zip.getEntries(); // an array of ZipEntry records
        return resolve(createFileTreeAsText(JSON.parse(JSON.stringify(zipEntries))));
    })
}