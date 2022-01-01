package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class ABCStepDefinitions {

    Response response;
    @When("user call get single user request with {string} for path parameters {string} and {string} for {string}")
    public void user_call_get_single_user_request_with_for_path_parameters_and_for(String pathParName1, String pathParam1, String pathParName2, String pathParam2) {
        ReqResBaseUrl.baseUrl.pathParams(pathParName1, pathParam1,
                pathParName2, pathParam2);
    }
    @When("user gets the single user response with path parameters {string} and {string}")
    public void user_gets_the_single_user_response_with_path_parameters_and(String pathParName1, String pathParName2) {
        String pathParameterForGroovy=String.format("{%s}/{%s}" ,pathParName1,pathParName2);
        response = given().spec(ReqResBaseUrl.baseUrl).when().get(pathParameterForGroovy);
        response.prettyPrint();
    }
    @Then("verifies the names of the id when {string} for {string} and {string} for {string}")
    public void verifies_the_names_of_the_id_when_for_and_for(String jsonPath1, String testData1, String jsonPath2, String testData2) {
        response.then().assertThat().statusCode(200).body(jsonPath1, equalTo(testData1),
                jsonPath2, equalTo(testData2));
    }

}
