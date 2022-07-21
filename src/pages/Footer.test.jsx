import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("link correctly", () => {
  const { getByRole } = render(<Footer />);
  const link = getByRole("link", { name: /Miraç/i });
  expect(link.getAttribute("href")).toBe("/");
});
