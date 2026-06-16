//ASSIGNMENT 27
// 1. amezon.com -search amezon
// 1. title
//==========

/*
1.www.amezon.com
--------------

2.www.flipkart.com
------------------
<title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books &amp; More.
 Best Offers!</title>
selector==> title

3.www.redbus.com
------------------
<title>Online Bus Ticket Booking, Book Bus Tickets at Lowest Price, Bus Reservation - redBus</title>
selector==> title

4.https://www.programiz.com
---------------------------

5.https://www.youtube.com/
--------------------------
<title>YouTube</title>
selector==> title

*/

//=======================================================================================================


//2.class 
//==========
/*
1. amezon.com
--------------
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" 
  dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
  aria-controls="sac-autocomplete-results-container" 
  aria-expanded="true" aria-haspopup="grid" spellcheck="false">

  class="nav-input nav-progressive-attribute" 

  1 using . -> 
  selector==> .nav-input .nav-progressive-attribute

  2 using the classic way attribute and value
  [class="nav-input nav-progressive-attribute"]


 2.www.flipkart.com
------------------
<input class="nw1UBF v1zwn25" style="color:#3d3d3dff" type="text" title="Search for Products, Brands 
and More" autocomplete="off" placeholder="Search for Products, Brands and More" name="q" value="">

class="nw1UBF v1zwn25"

  1 using . -> 
  selector==> .nw1UBF .v1zwn25

  2 using the classic way attribute and value
  [class="nw1UBF v1zwn25"]

 3.www.redbus.com
------------------
<label class="lbl" for="src">source</label>
class="lbl"

  1 using . -> 
  selector==> .lbl

  2 using the classic way attribute and value
  
  [class="lbl"


4.https://www.programiz.com
---------------------------
<div class="file-name" id="executed-file-name" title="main.js">
            main.js          </div>

class="file-name" 

  1 using . -> 
  selector==> .file-name

  2 using the classic way attribute and value
  
  [class="file-name"]


  5.https://www.youtube.com/
--------------------------
<input class="ytSearchboxComponentInput yt-searchbox-input title" name="search_query" aria-controls="i0"
 aria-expanded="true" type="text" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="
 list" role="combobox" placeholder="Search" aria-activedescendant="searchbox-suggestion:3">

 class="ytSearchboxComponentInput yt-searchbox-input title"

 
  1 using . -> 
  selector==> .ytSearchboxComponentInput

  2 using the classic way attribute and value
  
  [class="ytSearchboxComponentInput yt-searchbox-input title"]
*/
//=======================================================================================================


// 3. by ID
//===========

/*
1. amezon.com
--------------
  <input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" 
  dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
  aria-controls="sac-autocomplete-results-container" 
  aria-expanded="true" aria-haspopup="grid" spellcheck="false">
 
1 USING #   ->
    SELECTOR-->#twotabsearchtextbox

 2 using the classic way attribute and value->
 selector==> [id="twotabsearchtextbox"]


 2.www.flipkart.com
------------------
<div id="rcontaine">...</div>

1 USING #   ->
    SELECTOR-->#rcontainer

 2 using the classic way attribute and value->
 selector==> [id="rcontaine"]

  3.www.redbus.com
------------------
<input class="inputField___5fae5a" id="srcinput" autocomplete="off" value="">
1 USING #   ->
    SELECTOR-->#srcinput

 2 using the classic way attribute and value->
 selector==> [id="srcinput"]

 4.https://www.programiz.com
---------------------------
<div class="file-name" id="executed-file-name" title="main.js">
            main.js          </div>
1 USING #   ->
    SELECTOR-->#executed-file-name

 2 using the classic way attribute and value->
 selector==> [id="executed-file-name"]


 5.https://www.youtube.com/
--------------------------

<div id="frosted-glass" class="with-chipbar style-scope ytd-app style-scope ytd-app"></div>
1 USING #   ->
    SELECTOR-->#frosted-glass

 2 using the classic way attribute and value->
 selector==> [ id="frosted-glass"


*/
//=======================================================================================================


 // 4. USING THE CLASSIC WAY  ATTRIBUTE AND VALUE->
 //==============================================
/*
1. amezon.com
--------------
 <input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" 
  dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
  aria-controls="sac-autocomplete-results-container"
  aria-expanded="true" aria-haspopup="grid" spellcheck="false"></input>

  selector ==> [name="field-keywords"]
 

 2.www.flipkart.com
------------------
<input class="nw1UBF v1zwn25" style="color:#3d3d3dff" type="text" title="Search for Products, Brands 
and More" autocomplete="off" placeholder="Search for Products, Brands and More" name="q" value="">
selector==> [name="q"]

  3.www.redbus.com
------------------
<input class="inputField___5fae5a" id="srcinput" autocomplete="off" value="">
selector==> [id="srcinput"]

 4.https://www.programiz.com
---------------------------
<div class="file-name" id="executed-file-name" title="main.js">
            main.js          </div>

selector==> [autocomplete="off"]

 5.https://www.youtube.com/
--------------------------
<input class="ytSearchboxComponentInput yt-searchbox-input title" name="search_query" aria-controls="i0"
 aria-expanded="true" type="text" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete
 ="list" role="combobox" placeholder="Search">

  selector ==> [name="search_query"]
*/


//=======================================================================================================


//5.general formula==>
//===============================================
// FORMULA IS --> TITLE[ATTRIBUTE="VALUE"]
/*
1. amezon.com
--------------
 <input type="text" id="twotabsearchtextbox" value="" name="field-keywords"
  autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" 
  dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" 
  aria-controls="sac-autocomplete-results-container" 
  aria-expanded="true" aria-haspopup="grid" spellcheck="false"></input>

  selector ==> input[name="field-keywords"]
 

 2.www.flipkart.com
------------------
<input class="nw1UBF v1zwn25" style="color:#3d3d3dff" type="text" title="Search for Products, Brands 
and More" autocomplete="off" placeholder="Search for Products, Brands and More" name="q" value="">

selector==> input[placeholder="Search for Products, Brands and More"]


  3.www.redbus.com
------------------
<input class="inputField___5fae5a" id="srcinput" autocomplete="off" value="">

selector==> input[autocomplete="off"]

 4.https://www.programiz.com
---------------------------
<div class="file-name" id="executed-file-name" title="main.js">
            main.js          </div>
selector==> div[title="main.js"]

 5.https://www.youtube.com/
--------------------------
<input class="ytSearchboxComponentInput yt-searchbox-input title" name="search_query" aria-controls="i0"
 aria-expanded="true" type="text" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete
 ="list" role="combobox" placeholder="Search">
    selector ==> input[placeholder="Search"]
*/