import fs from "fs";

export class HTMLConstractor {
    constructor(fileName = "", content = "") {
        this.fileName = fileName;
        this.content = content;
    }

    genereteFile(path = "") {
        if (path) {
            !fs.existsSync(path) && fs.mkdirSync(path);
        }
     
        fs.writeFileSync(`${path}/${this.fileName}.HTML`,
        this.content);

        return this;
    }
}
