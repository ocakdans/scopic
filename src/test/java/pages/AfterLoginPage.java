package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class AfterLoginPage {

    public AfterLoginPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "nav-link-accountList-nav-line-1")
    public WebElement userName;

    @FindBy(css = "#twotabsearchtextbox")
    public WebElement searchBox;

    @FindBy(className = "a-price-symbol")
    public List<WebElement> randomProduct;

    @FindBy(id="add-to-cart-button")
    public WebElement addToCart;

    @FindBy(xpath = "//span[@class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']")
    public WebElement addedToCartText;
}
