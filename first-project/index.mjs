import fs from "fs";
import countrycodeslist from "country-codes-list";
import { HTMLConstractor } from "./htmlConstractor.mjs";


console.log(countrycodeslist.all().find((country) =>
    country.countryCode === "UA"), "!!!");

const data = JSON.parse(fs.readFileSync("./posts.json"));

function main(data) {

    //   console.table(data);

    const countriesLayouts = countrycodeslist
        .all()
        .slice(0, 10)
        .map(

            (country) => `<div>
            <p>${country.countryNameEn}</p>
            <p>${country.region}</p>
            <p>${country.officialLanguageNameEn}</p>
        </div>`
        );

    console.log(countriesLayouts, "!!!");

    const htmlConstructor = new HTMLConstractor("countries.html", );

}
main(data);
