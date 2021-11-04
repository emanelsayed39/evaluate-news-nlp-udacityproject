import {post} from '../src/client/js/formHandler'


test('Testing post fetch successfully',async ()=>{
   jest.mock('../src/client/js/formHandler');
    const testValue="www.yahoo.com";
   // const value= await post({URL:testValue});
    expect(post({URL:testValue})).toBeDefined();
})
