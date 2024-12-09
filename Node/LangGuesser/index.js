import {franc} from "franc";
import langs from "langs";
import colors from "colors";

const langCode = franc(process.argv[2]);
if(langCode == "und"){
    console.log("Sorry, the given language was not detected!".red);
}
else{
    const language = langs.where("3", langCode);
    console.log(`Language Detected: ${language.name}`.green);
}
