import { _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";

describe("Test function _saveQuestion", () => {
  it("save question", async () => {
    var result = await _saveQuestion({
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "tylermcginnis",
    });

    expect(result.author).toEqual("tylermcginnis");
    expect(result.optionOne.text).toEqual("Option 1");
    expect(result.optionTwo.text).toEqual("Option 2");
  });

  it("save question error", async () => {
    await expect(
      _saveQuestion({
        author: "tylermcginnis",
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("test function saveQuestionAnswer", () => {
  it("saved success", async () => {
    var result = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionTwo",
    });

    expect(result).toEqual(true);
  });

  it("save failed", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "tylermcginnis",
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
