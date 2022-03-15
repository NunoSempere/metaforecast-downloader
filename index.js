import axios from "axios";
import fs from "fs";

async function main() {
  let response = await axios.get(
    "https://api.metaforecast.org/metaforecast-all-questions"
  );
  let data = response.data;

  let ids = ["polymarket-0x515370f1", "metaculus-9584", "predictit-7720"];
  let questionsOfInterest = data.filter((response) =>
    ids.includes(response.id)
  );
  console.log("Saving results to results.json");
  fs.writeFileSync("results.json", JSON.stringify(data, null, 4));

  let tsvHeaders = "title\tplatform\tdate\tforecast\n";
  let tsvRows = questionsOfInterest
    .map(
      (question) =>
        `${question.title}\t${question.platform}\t${
          question.timestamp
        }\t${JSON.stringify(question.options)}`
    )
    .join("\n");
  let tsvFile = tsvHeaders + tsvRows;
  console.log("Saving results to results.tsv");
  fs.writeFileSync("results.tsv", tsvFile);
}
main();
