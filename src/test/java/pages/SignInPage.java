package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SignInPage {

    public SignInPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id= "ap_email")
    public WebElement email;

    @FindBy(xpath = "//input[@type = 'submit']")
    public WebElement continueButton;

    @FindBy(css = "#ap_password")
    public WebElement password;

    @FindBy(className = "a-button-input")
    public WebElement signInButton;

    @FindBy(id = "ap-account-fixup-phone-skip-link")
    public WebElement notNowLink;

    @FindBy(className = "a-list-item")
    public WebElement passErrorMessage;

}
