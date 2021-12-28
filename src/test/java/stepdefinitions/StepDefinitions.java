package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.AfterLoginPage;
import pages.HomePage;
import pages.SignInPage;
import utilities.ConfigReader;
import utilities.Driver;
import utilities.ReusableMethods;

import static org.junit.Assert.assertEquals;

public class StepDefinitions {
    HomePage homePage = new HomePage();
    SignInPage signInPage = new SignInPage();
    AfterLoginPage afterLoginPage = new AfterLoginPage();

    @When("user is on the amazon homepage")
    public void user_is_on_the_amazon_homepage() {
        // Write code here that turns the phrase above into concrete actions
        Driver.getDriver().get(ConfigReader.getProperty("url"));
    }

    @And("user hover over account&lists")
    public void userHoverOverAccountLists() {
        ReusableMethods.hover(homePage.accountListBlock);
    }

    @And("user clicks on Sign in button")
    public void userClicksOnSignInButton() {
        homePage.signInButton.click();
    }

    @And("user enters valid {string} address")
    public void userEntersValidAddress(String arg0) {
        signInPage.email.sendKeys(arg0);

    }

    @And("user clicks on Continue button")
    public void userClicksOnContinueButton() {
        signInPage.continueButton.click();
    }


    @And("user enters {string}")
    public void userEnters(String arg0) {
        signInPage.password.sendKeys(arg0);
    }

    @And("user clicks on second Sign in button")
    public void userClicksOnSecondSignInButton() {
        signInPage.signInButton.click();
    }

    @And("user clicks on not now link")
    public void userClicksOnNotNowLink() {
        signInPage.notNowLink.click();

    }

    @Then("user verifies name")
    public void userVerifiesName() {
        String expName = "Hello, Selim";
        assertEquals("Not equal", expName, afterLoginPage.userName.getText().toString()) ;

    }


    @Then("user gets password error")
    public void userGetsPasswordError() {
        String expPassErrorMsg= "Your password is incorrect";
        assertEquals("password error message doesnt work",expPassErrorMsg,signInPage.passErrorMessage.getText().toString());
    }

}
