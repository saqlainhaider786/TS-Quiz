import qst from "./Questions.js";
import inq from "inquirer";
import ch from "chalk";

let score = {
  obt: 0,
  totl: qst.length,
};
const AskQuest = async () => {
  for (let i = 0; i < qst.length; i++) {
    const q = qst[i];
    console.log(ch.bold(`Q${i + 1}. ${q.q}\n`));

    let usrAns = await inq.prompt([
      {
        name: "ans",
        type: "list",
        choices: [q.op1, q.op2, q.op3, q.op4],
      },
    ]);
    if (usrAns.ans === q.ans) {
      score.obt += 1;
    }
  }
};

export default AskQuest;
export { score };
