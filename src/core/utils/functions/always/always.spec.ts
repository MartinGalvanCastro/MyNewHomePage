import { always } from "./always";

describe("always", () => {
  describe("void", () => {
    it("should return a function that returns void", () => {
      const voidFunction = always.void;
      expect(voidFunction).toBeInstanceOf(Function);
      expect(always.void()()).toBeUndefined();
    });
  });
  describe("result", () => {
    it("returns a function which returns the value passed in", () => {
      const resultFunction = always.result("test");
      expect(resultFunction).toBeInstanceOf(Function);
      expect(resultFunction()).toBe("test");
    });
  });
  describe("resolve", () => {
    it("returns a function which resolves into void", async () => {
      const resolveFunction = always.resolve();
      expect(resolveFunction).toBeInstanceOf(Function);
      await expect(resolveFunction()).resolves.toBeUndefined();
    });
    it("returns a function which resolves into the value passed in", async () => {
      const resolveFunction = always.resolve("test");
      expect(resolveFunction).toBeInstanceOf(Function);
      await expect(resolveFunction()).resolves.toBe("test");
    });
  });
  describe("reject", () => {
    it("returns a function which rejects with a default error", async () => {
      const rejectFunction = always.reject();
      expect(rejectFunction).toBeInstanceOf(Function);
      await expect(rejectFunction()).rejects.toThrowError("Rejected");
    });
    it("returns a function which rejects with the error passed in", async () => {
      const rejectFunction = always.reject(new Error("Custom error"));
      expect(rejectFunction).toBeInstanceOf(Function);
      await expect(rejectFunction()).rejects.toThrowError("Custom error");
    });
  });
});
