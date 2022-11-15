import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import SignUp from "./Signup";

describe("App component", () => {
  beforeAll(() => {
    render(<SignUp />);
  });
  it("should have the input field for name", () => {
    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toBeInTheDocument();
  });
  it("should have the input field for email", () => {
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });
  it("should have the input field for password", () => {
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });
  afterAll(cleanup);
});
