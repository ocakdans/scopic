package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import testdata.TestData;

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




    @When("user call get single user request")
    public void userCallGetSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath" , "users",
                            "id", 2) ;
    }

    @And("user gets the single user response")
    public void userGetsTheSingleUserResponse() {
         response= given().spec(ReqResBaseUrl.baseUrl).when().get("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("verifies the names of the id")
    public void verifiesTheNamesOfTheId() {
        response.then().assertThat().statusCode(200).body("data.first_name", equalTo("Janet"),
                "data.last_name",equalTo("Weaver"))        ;
    }

    @When("user call post single user request")
    public void userCallPostSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users");
        postReqBody= reqObj.postTestData();
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

    @When("user call put single user request")
    public void userCallPutSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id",2);

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

    @When("user call patch single user request")
    public void userCallPatchSingleUserRequest() {
        ReqResBaseUrl.baseUrl.pathParams("usersPath", "users",
                "id",2);

        patchReqBody = reqObj.patchTestData();
        response = given().
                contentType(ContentType.JSON).
                spec(ReqResBaseUrl.baseUrl).
                body(patchReqBody).
                when().
                post("{usersPath}/{id}");
        response.prettyPrint();
    }

    @Then("verifies the patch response with expected data")
    public void verifiesThePatchResponseWithExpectedData() {
        json = response.jsonPath();
        assertEquals(201, response.getStatusCode());
        assertEquals(patchReqBody.get("name"), json.getString("name"));

    }
}
