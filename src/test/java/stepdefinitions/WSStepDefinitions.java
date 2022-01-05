package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import testdata.TestData;
import utilities.Driver;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertEquals;


public class WSStepDefinitions {
    Response response;
    TestData reqObj = new TestData();
    Map<String, Object> postReqBody;
    Map<String, Object> putReqBody;
    Map<String, Object> patchReqBody;
    JsonPath json;

    //Get Request Single User
    @When("user call get single user request")
    public void userCallGetSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id", 2);
    }

    @And("user gets the single user response")
    public void userGetsTheSingleUserResponse() {
        response = given().spec(ReqResBaseUrl.baseUrl).when().get("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("verifies the names of the id")
    public void verifiesTheNamesOfTheId() {
        response.then().assertThat().statusCode(200).body("data.first_name", equalTo("Janet"),
                "data.last_name", equalTo("Weaver"));
    }

    //Post Request Single User
    @When("user call post single user request")
    public void userCallPostSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users");
        postReqBody = reqObj.postTestData();
        response = given().
                contentType(ContentType.JSON).
                spec(ReqResBaseUrl.baseUrl).
                body(postReqBody).
                when().
                post("{usersPath}");
        //System.out.println(postReqBody);
        response.prettyPrint();

    }

    @Then("verifies the response with expected data")
    public void verifiesTheResponseWithExpectedData() {
        json = response.jsonPath();
        assertEquals(201, response.getStatusCode());
        assertEquals(postReqBody.get("name"), json.getString("name"));
        assertEquals(postReqBody.get("job"), json.getString("job"));

    }

    //Put Request Single User
    @When("user call put single user request")
    public void userCallPutSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id", 2);

        putReqBody = reqObj.putTestData();
        response = given().
                contentType(ContentType.JSON).
                spec(ReqResBaseUrl.baseUrl).
                body(putReqBody).
                when().
                post("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("verifies the put response with expected data")
    public void verifiesThePutResponseWithExpectedData() {
        json = response.jsonPath();
        assertEquals(201, response.getStatusCode());
        assertEquals(putReqBody.get("name"), json.getString("name"));
        assertEquals(putReqBody.get("job"), json.getString("job"));
    }

    //Patch Request Single User
    @When("user call patch single user request")
    public void userCallPatchSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id", 2);

        patchReqBody = reqObj.patchTestData();
        response = given().
                contentType(ContentType.JSON).
                spec(ReqResBaseUrl.baseUrl).
                body(patchReqBody).
                when().
                patch("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("verifies the patch response with expected data")
    public void verifiesThePatchResponseWithExpectedData() {
        json = response.jsonPath();
        assertEquals(200, response.getStatusCode());
        assertEquals(patchReqBody.get("name"), json.getString("name"));

    }

    //Delete Request Single User
    @When("user call delete single user request")
    public void userCallDeleteSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id", 2);
        response = given().spec(ReqResBaseUrl.baseUrl).when().delete("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("user closes the driver")
    public void userClosesTheDriver() {
        Driver.closeDriver();
    }


    @When("user call the endpoint with {string} for parameters {string} and {string} for {string}")
    public void userCallTheEndpointWithForPathParametersAndFor(String pathParName1, String pathParam1, String pathParName2, String pathParam2) {
        ReqResBaseUrl.baseUrl.pathParams(pathParName1, pathParam1,
                pathParName2, pathParam2);
    }

    @When("user gets the single user response with path parameters {string} and {string}")
    public void user_gets_the_single_user_response_with_path_parameters_and(String pathParName1, String pathParName2) {
        String getEndpointParams = String.format("{%s}/{%s}", pathParName1, pathParName2);
        response = given().spec(ReqResBaseUrl.baseUrl).when().get(getEndpointParams);
        response.prettyPrint();
    }

    @Then("verifies the names of the id when {string} for {string} and {string} for {string}")
    public void verifies_the_names_of_the_id_when_for_and_for(String jsonPath1, String testData1, String jsonPath2, String testData2) {
        response.then().assertThat().statusCode(200).body(jsonPath1, equalTo(testData1),
                                                          jsonPath2, equalTo(testData2));


    }


    @Then("verifies the data for that user")
    public void verifies_the_data_for_that_user(List<List<String>> dataTable) {
        JsonPath json = response.jsonPath();
        assertEquals(200, response.getStatusCode());
        for (int i = 0; i < dataTable.size(); i++) {
            assertEquals(dataTable.get(i).get(1), json.getString(dataTable.get(i).get(0)));

        }
    }




}
