import { SignUpPage } from "../pages/signUp.page";
import { faker } from "@faker-js/faker";

const signUpPage = new SignUpPage();

describe("registration", () => {
  beforeEach(() => {
    signUpPage.navigate();
  });

  it("should be able to sign up with valid data", () => {
    signUpPage.registration(
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    );
    signUpPage.signUpValidation();
  });
});
