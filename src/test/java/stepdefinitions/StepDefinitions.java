package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.AfterLoginPage;
import pages.HomePage;
import pages.SignInPage;
import utilities.ConfigReader;
import utilities.Driver;
import utilities.ReusableMethods;

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

    @And("user enters valid e-mail address")
    public void userEntersValidEMailAddress() {
        signInPage.email.sendKeys(ConfigReader.getProperty("validEmail"));

    }

    @And("user clicks on Continue button")
    public void userClicksOnContinueButton() {
        signInPage.continueButton.click();
    }

    @And("user enters valid password")
    public void userEntersValidPassword() {
        signInPage.password.sendKeys(ConfigReader.getProperty("validPassword"));
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
        String actualName = "Hello, Selim";
        Assert.assertEquals("Not equal", actualName, afterLoginPage.userName.getText().toString()) ;

    }


}
