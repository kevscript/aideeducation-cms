import { User } from "../payload-types";
import { testCredentials } from "./credentials";

describe("Users", () => {
  it("should allow a user to log in", async () => {
    const result: {
      token: string;
      user: User;
    } = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testCredentials),
    }).then((res) => res.json());

    expect(result.token).toBeDefined();
  });
});
