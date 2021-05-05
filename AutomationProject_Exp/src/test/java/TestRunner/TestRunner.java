package TestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",glue={"StepDefinations"},
monochrome = true,

plugin= {"pretty","html:test-output",
		"json:target/cucumber-reports/cucumber.json",
		"de.monochromata.cucumber.report.PrettyReports:target/maven-cucumber-report"},

tags="@SignInFunctionality"
//tags = {"@LoginCheck","@SearchCourse"}

)

public class TestRunner {

}
