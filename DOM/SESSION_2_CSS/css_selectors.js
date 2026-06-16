// SELCTORS ARE USED TO FIND THE  UNIQUE ELEMENT ON THE WEBPAGE SO THAT WE CAN PERFORM ACTION/VADLITION


// CSS SELECTORS -- THESE ARE HIGHLY COMPACTIBLE WITH MODERN LIKE CYPRESS AND PLAYWRIGHT

// NOW OUR AIM WITH SELECTORS IS TO GET THE UNIQUE LOCATION OF THE ELEMENT (ITS SHOULD BE ONLY 1 IN THE PAGE )

// NOW HOW WE CANB GET OR BUILD CSS SELECTORS
// FOLLOWING ARE THE WAY TO BULID SELECTORS

//1 TAGNAME (OPENING TAG)
//2 BY CLASS TAG
//3 BY ID
//4 BY ATTRIBUTE AND ITS VALUE
//5 GENERAL FORMULA

// NOTE:- ANY SPACE BETWEEN TO ELEMENTS WHILE CREATING SELECTOR DOES SHOW PARENT TO CHILD TRAVEL

//1 TAGNAME (OPENING TAG) -->

// ELEMENT --> <title>WebDriver | Contact Us</title>
// SELECTOR --> title


// SHOWING DEMO OF TRAVEL

/* ELEMENT -->  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Free Online (Interaction) Training Platform. Enhance yours skills within Automation Testing (Selenium WebDriver), Complicated Tasks &amp; Framework Design…">
  <meta name="author" content="Gianni Bruno">
  <meta name="keywords" content="WebDriver University, WebDriver, Webdriver, Selenium, Selenium WebDriver, Automation Testing, Automation Testing Platform, Java, Jenkins, Cucumber, BDD, TestNG, JUNit">
  <title>WebDriver | Contact Us</title>
  <!-- Bootstrap Core CSS -->
  <link href="../css/bootstrap.min.css" rel="stylesheet">
</head>

// SELECTOR --> head title

*/


//2 BY CLASS TAG -- THIS IS UNIQUE CASE


/**
 * ELEMENT HAVING SINGLE CLASS VALUE
 *
 * <input class="contact_button" type="reset" value="RESET">
 *
 * THERE ARE 2 WAYS TO CREATE CALSS SELECTOR
 *
 * 1 USING .  AT START OF CLASS VALUE ->
 *
 * SELECTOR --> .contact_button
 *
 * 2 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 *
 * [class="contact_button"]
 *
 * ELEMENT HAVE MUTIPLE CLASS
 *
 *
 * <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off"
 * placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0"
 * aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container"
 * aria-expanded="true" aria-haspopup="grid" spellcheck="false">
 *
 * class="nav-input nav-progressive-attribute"


 * 1 USING . AT START OF CLASS VALUE  ->
SELECTOR-->.nav-input.nav-progressive-attribute

 2 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 *
 * [class="nav-input nav-progressive-attribute"]

// IN CLASS IF WE HAVE SAPCES BETWEEN VALUES OF CLASS IT SHOWS THAT THE ELEMENT HAS MULTIPLE CLASS

// HOW TO BUILD SELECTOR FOR CLASS

 */


//3 BY ID

/**
 * <form action="javascript:void(0);" method="post" id="contact_form" onsubmit="return validateContactForm();">
              </form>
 * 
 * 
 1 USING # AT START OF ID VALUE  ->
    SELECTOR-->#contact_form

 2 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 *
 * [id="contact_form"]
 * 
 * 
 * 
 * <input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
 *  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto"
 *  tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
 * aria-controls="sac-autocomplete-results-container" 
 * aria-expanded="true" aria-haspopup="grid" spellcheck="false">
 * 
1 USING # AT START OF ID VALUE  ->
    SELECTOR-->#twotabsearchtextbox

 2 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 [id="twotabsearchtextbox"]

 * 
 * 
 * 
 * 
 */


//2 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->

/** 
 * 
 *  <input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
 *  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto"
 *  tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
 * aria-controls="sac-autocomplete-results-container" 
 * aria-expanded="true" aria-haspopup="grid" spellcheck="false">
 * 
  USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 [id="twotabsearchtextbox"]


 
<input name="first_name" type="text" class="feedback-input" placeholder="First Name" fdprocessedid="40h32t">
 USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->

[placeholder="First Name"]


 * 
*/

//5 GENERAL FORMULA --> ITS COMBINATION OF TITLE AND ATTRIBUTE AND VALUE 
// FORMULA IS --> TITLE[ATTRIBUTE="VALUE"]

/**
 * 
 * <input name="first_name" type="text" class="feedback-input" placeholder="First Name" fdprocessedid="40h32t">

GENERAL FORMULA -->
input[name="first_name"]


 */