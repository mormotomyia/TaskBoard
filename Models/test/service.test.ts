import { equal } from "assert";
import { Service } from "../src/service";

describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    equal(true, true);
  });
  it("should return expected string", () => {
    equal(new Service().HelloText, "Hello Service");
  });
});