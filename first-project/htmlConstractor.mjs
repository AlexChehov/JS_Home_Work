import fs from "fs";

export class HTMLConstractor {
    constructor(fileName = "", content = "") {
        this.fileName = fileName;
        this.content = content;
    }

    genereteFolderFromPath(path) {
        if (!path.includes("/")) return path;


        const pathItems = path.split("/");
        console.log(pathItems, '!!!');

        pathItems.forEach((p) =>
            !fs.existsSync(p) && fs.mkdirSync(p));
    };

    genereteFile(path = "") {

        this.genereteFolderFromPath(path);

        if (path) {
            !fs.existsSync(path) && fs.mkdirSync(path);
        }

        fs.writeFileSync(`${path}/${this.fileName}.HTML`,
            this.content);

        return this;
    }
}
