# Coding Conventions

## Always include a file description.

For better understanding and maintenance of the code, the header of different files should follow some standard format and information. The header should contain:

* Name: What's the name of this file?
* Author: Who wrote the code?
* Synopsis: Concisely, what does this code do?
* Function Info: Different functions supported in the file along with their inputs and outputs.
* Globals Info: Global variables accessed or modified by the file.


## Name things properly.

* Names must be meaningful and understandable.
* Local variables use camel case starting with a lowercase letter (e.g. `localData`).
* Global variables use camel case starting with a capital letter (e.g. `GlobalData`).
* Constant variables use capital letters only (e.g. `CONSTDATA`).
* It is better to avoid the use of digits in variable names.
* Function names use camel case starting with a lowercase letter (e.g. `myFunction`).
* A Function name must describe the purpose of the function clearly and concisely.

## Try to avoid using globals.

* Notify the team when you make a new global variable.

## Format your code properly.

* Proper formatting increases the readability of the code.
* Code must be properly indented and spaced.

## Return 0 or 1 for errors.

* All functions encountering an error condition should either return a 0 or 1 to simplify debugging.

## Keep it simple, stupid.

* Code should be easily understandable.
* Complex code makes maintenance and debugging difficult and expensive.

## Don't use a variable for multiple purposes.

* Each variable should be given a descriptive and meaningful name indicating its purpose. This is not possible if a variable is used for multiple purposes.
* If a variable is used for multiple purposes, someone who is unfamiliar with the code will probably find it confusing. Moreover, it leads difficulty during future enhancements.

## Document your code.

* The code should be properly commented.
* Comments should only exist if the code is difficult to understand.
* Try to make comments as concise and descriptive as possible.

## Keep functions short.

* Long functions are difficult to understand.
* Break long functions into multiple short functions.