package StepDefinations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.LoginPage;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class guru99StepDef {

	WebDriver driver = null;
	LoginPage login; 

	@Before(order=1)
	public void BeforeScenario() {

		System.out.println("Inside Before Scenario");
		//	driver = new ChromeDriver();

	}
	
	@Before(order=0)
	public void BeforeScenario1() {

		System.out.println("Inside Before2 Scenario");
		//	driver = new ChromeDriver();

	}

	@After("@Smoke")
	public void AfterScenario() {

		System.out.println("Inside After Scenario");
		driver.quit();

	}

	@BeforeStep
	public void BeforeStep() {
		System.out.println("Before Step");
	}
	
	@AfterStep
	public void AfterStep() {
		System.out.println("After Step");
	}
	
	@Given("user visits guru99 newtours page")
	public void user_visits_guru99_newtours_page() {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\eclipse-workspace\\DemoProject_Capgemini\\AutomationProject_Exp\\src\\test\\resources\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demo.guru99.com/test/newtours/");

	}

	@When("^enters (.*) and (.*) to signin$")
	public void enters_abc_and_abc_to_signin(String username, String password) {

		login = new LoginPage(driver);
		login.enterUnameAndPwd(username, password);

	}

	@When("clicks on submit button")
	public void clicks_on_submit_button() {

		login.clickSubmit();

	}

	@Then("user is succesfully signed in")
	public void user_is_succesfully_signed_in() {

		if(driver.getTitle().contentEquals("Login: Mercury Tours")){
			System.out.println("Sign-in Succesful!");
		}
		else{
			System.out.println("Sign-in Failed!");
		}

	}


}
