
# simple palindrome challenge

please write complete the script given in `./src/palindrome.js` so that it returns `true` if the word is a plindrome and `false` if it is not

the cases described below are tested in the `palindrome.spec.js` which can be run by `npm test`  and should

## Definition of a palindrome

any sequence of numbers or letters that contain the same letters or numbers read forward or reverse is considered a palindrome. Case of the letters do _not_ matter

e.g.

- `abccba`  is a palindrome and `palindrome('abccba')` should return `true`
- `Racecar` is a palindrome and `palindrome('Racecar')`  should return `true`
- `1221` is a plaindrome  and `palindrome('1221')`  should return `true`
- `1234` is not a plaindrome and `palindrome('1234')` should return `false`
- `Whatever` is not a plaindrome and `palindrome('1234')` should return `false`

a string is even considered a palindrome, even if spaces or _any non-word_ characters are injected

- `Abc Cba`  is a palindrome
- `#!Race Car?`  is a palindrome
- `1.221`  is a palindrome
- `F#cking Gnikcf!!!` is a palindrome
- `#qwe!!!` is not a palindrome

## use this project

1. clone this project
2. run `npm install` in the root directory
3. happy coding
4. run `npm run test` and see if some test fails, if yes, go back to 3. (or fix the tests ;)
