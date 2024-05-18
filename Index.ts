import AskQuest, { score } from "./AnsQuest.js";
import ch from "chalk";
console.log(
  ch.bgGreen.bold.white("\n*****  Welcome To SSHR Quiz App  *****\n")
);
await AskQuest();
let per = (score.obt / score.totl) * 100;
if (per > 50) {
  console.log(ch.bgGreen(`Your Score is ${score.obt}/${score.totl}`));
} else {
  console.log(ch.bgRed(`Your Score is ${score.obt}/${score.totl}`));
}
