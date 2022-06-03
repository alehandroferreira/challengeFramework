import Notification from "./notification";

describe("Unit tests for notifications", () => {
  it("Should create errors", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "calcular",
    };
    notification.addError(error);

    expect(notification.messages("calcular")).toBe("calcular: error message,");

    const error2 = {
      message: "error message2",
      context: "calcular",
    };
    notification.addError(error2);

    expect(notification.messages("calcular")).toBe(
      "calcular: error message,calcular: error message2,"
    );
  });
});
