package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

//Path of features
        //html: type of report, target: folder name, folder under target: default-cucumber-reports
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-report/cucumber.json",
                "junit:target/xml-report/cucumber.xml",
                "rerun:target/failedRerun.txt"
        },
        features = "src/test/resources/features",
        //Path of step definitions
        glue = "stepdefinitions" ,
        //tags = "@cryspositive or @crysnegative",
        tags = "@failLogin",
        dryRun = false


)
public class Runner {
}
