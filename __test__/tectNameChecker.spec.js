import {checkForName} from '../src/client/js/nameChecker'


test('Testing  the name checker function return false for invalid URL',()=>{
    expect(checkForName("fsdfsfweffwefwerewrfw")).toBe(false);
})


test('Testing  the name checker function return true for valid URL',()=>{
   
    expect(checkForName("www.yahoo.com")).toBe(true);
    })