import "@testing-library/dom";
import { sum } from "../components/sum";

test("should add two numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
