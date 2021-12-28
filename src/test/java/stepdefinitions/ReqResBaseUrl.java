package stepdefinitions;

import io.cucumber.java.en.Given;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;

public class ReqResBaseUrl {
    public static RequestSpecification baseUrl;

    @Given("user calls the base url")
    public void userCallsTheBaseUrl() {
        baseUrl = new RequestSpecBuilder().setBaseUri("https://reqres.in/api/").build();
    }

}
