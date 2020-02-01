# Code Review Checklist

## Include file description.

- [ ] Has name.
- [ ] Has author.
- [ ] Has synopsis.
- [ ] Has function info.
- [ ] Has globals info.

## Name things properly.

- [ ] Names are meaningful and understandable.
- [ ] Local variables use camel case starting with a lowercase letter (e.g. `localData`).
- [ ] Global variables use camel case starting with a capital letter (e.g. `GlobalData`).
- [ ] Constant variables use capital letters only (e.g. `CONSTDATA`).
- [ ] No digits in variable names.
- [ ] Function names use camel case starting with a lowercase letter (e.g. `myFunction`).
- [ ] Function names describe the purpose of the function clearly and concisely.

## Try to avoid using globals.

- [ ] No new globals.
- [ ] Team was notified of new global(s).

## Format your code properly.

- [ ] Code is formatted properly.

## Return 0 or 1 for errors.

- [ ] All functions encountering an error condition return a 0 or 1.

## Keep it simple, stupid.

- [ ] Code is easily understandable.

## Don't use a variable for multiple purposes.

- [ ] No variable is used for multiple purposes.

## Document your code.

- [ ] Code is properly commented.
- [ ] Comments only exist when the code is difficult to understand.
- [ ] Comments are as concise and descriptive as possible.

## Keep functions short.

- [ ] Long functions are broken up into short functions.
