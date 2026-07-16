/** 
 * flipkart.com
 * 
 * <input class="nw1UBF v1zwn25" style="color:#3d3d3dff" 
 * type="text" title="Search for Products, Brands and More" 
 * autocomplete="off" placeholder="Search for Products, 
 * Brands and More" name="q" value="">
 * 
 * Locators
 * class="nw1UBF v1zwn25"
 * 
 *   SELECTOR-->.nw1UBF
 *   SELECTOR-->[class="nw1UBF v1zwn25"]
 *  
 * 
 * 
 * amazon.in
 * 
 * <input type="text" id="twotabsearchtextbox" 
 * value="" name="field-keywords" autocomplete="off" 
 * placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" 
 * dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" 
 * aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" 
 * aria-expanded="true" aria-haspopup="grid" spellcheck="false">
 * 
 * Locators
 * ID locator 
 * SELCTOR-->#twotabsearchtextbox
 * SELCTOR-->[id="twotabsearchtextbox"]
 * 
 * class locator
 * SELCTOR-->.nav-input nav-progressive-attribute
 * SELCTOR-->[class="nav-input nav-progressive-attribute"]
 * 
 * role locator
 * SELCTOR-->[role="searchbox"]
 * 
 * 
 *
 * 1. HBNO LOGIN - USERNAME INPUT
 * 
 * ELEMENT

<input ebankinput="" type="text" autocomplete="on" data-test="ssn"
class="ng-pristine ng-invalid ebank-input ng-star-inserted ng-untouched"
maxlength="128" id="ebank-input-4">

 * 1. TAG NAME
 * SELECTOR -->
   input

 * 2. BY CLASS

 * USING . AT START OF CLASS VALUE -->
.ng-pristine.ng-invalid.ebank-input.ng-star-inserted.ng-untouched

 * USING ATTRIBUTE AND VALUE -->
[class="ng-pristine ng-invalid ebank-input ng-star-inserted ng-untouched"]

 * 3. BY ID

 * USING # AT START OF ID VALUE -->
#ebank-input-4

 * USING ATTRIBUTE AND VALUE -->
   [id="ebank-input-4"]

 * 4. BY ATTRIBUTE AND VALUE

 * USING ATTRIBUTE AND VALUE -->
   [data-test="ssn"]

   [type="text"]

   [autocomplete="on"]

   [maxlength="128"]

 * 5. GENERAL FORMULA

input[data-test="ssn"]

input[id="ebank-input-4"]

input[autocomplete="on"]


// 2. LFANT LOGIN - USERNAME OR EMAIL INPUT

ELEMENT

<input
type="text"
autocomplete="new-password"
name="userNameOrEmailAddress"
required=""
class="form-control form-control-solid h-auto py-5 px-6 rounded-lg fs-h6 form-input-padding-y form-input-no-border shadow-none ng-tns-c314009209-1 ng-pristine ng-invalid ng-touched"
placeholder="User name or email *">


 * 1. TAG NAME
SELECTOR -->
input

 * 2. BY CLASS

 * USING . AT START OF CLASS VALUE -->
  .form-control.form-control-solid.h-auto.py-5.px-6.rounded-lg.fs-h6.form-input-padding-y.form-input-no-border.shadow-none.ng-tns-c314009209-1.ng-pristine.ng-invalid.ng-touched

 * USING ATTRIBUTE AND VALUE -->
[class="form-control form-control-solid h-auto py-5 px-6 rounded-lg fs-h6 form-input-padding-y form-input-no-border shadow-none ng-tns-c314009209-1 ng-pristine ng-invalid ng-touched"]

 *  3. BY ID

 *  NO ID AVAILABLE FOR THIS ELEMENT

 *  4. BY ATTRIBUTE AND VALUE

[name="userNameOrEmailAddress"]

[placeholder="User name or email *"]

[autocomplete="new-password"]

[type="text"]

 *  5. GENERAL FORMULA

input[name="userNameOrEmailAddress"]

input[placeholder="User name or email *"]

input[autocomplete="new-password"]


 *  3. DEMOBLAZE LOGIN - USERNAME INPUT


ELEMENT

<input type="text" class="form-control" id="loginusername">


 * 1. TAG NAME
 * SELECTOR -->
input

 *  2. BY CLASS

 * USING . AT START OF CLASS VALUE -->
  .form-control

 * USING ATTRIBUTE AND VALUE -->
[class="form-control"]

// 3. BY ID

// USING # AT START OF ID VALUE -->
#loginusername

// USING ATTRIBUTE AND VALUE -->
[id="loginusername"]

// 4. BY ATTRIBUTE AND VALUE

[type="text"]

// 5. GENERAL FORMULA

input[id="loginusername"]

input[class="form-control"]

input[type="text"]



HBNO LOGIN
------------
#ebank-input-4
[data-test="ssn"]
input[data-test="ssn"]

LFANT LOGIN
------------
[name="userNameOrEmailAddress"]
[placeholder="User name or email *"]
input[name="userNameOrEmailAddress"]

DEMOBLAZE LOGIN
---------------
#loginusername
[id="loginusername"]
input[id="loginusername"]

*/
