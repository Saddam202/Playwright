import { expect } from '@playwright/test';
import {test} from '../fixtures/fixtures'
//CURD Operation 
//C=> Create , U => Put/Patch , R => Read , D => Delete

//page fixture for Web 
// request Fixture for API 

//Creating test Suit
//serial here means running all the tests sequental 
test.describe.serial("CRUD Operation" ,()=>{


let id :string = '' ; 
const objectEndPoints = 'https://api.restful-api.dev/objects/';

test('Create object - post request', async ({ request }) => {
const payload ={
    
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }

};
const startingTime = Date.now();
const response = await request.post(`${objectEndPoints}`,{
data:  payload,
headers :  {
    "Content-Type" :"application/json"
} 


});
const endingTime = Date.now();
const resposneTime = endingTime - startingTime;
const responseBody = await response.json();

console.log(responseBody);
console.log(`the response time is: ${resposneTime}`);
console.log(`the response status is: ${await response.status()}`);
console.log(`the response content-type is: ${response.headers()['content-type']}`);
console.log(`the object id is: ${responseBody.id}`);
console.log(`the response length is: ${(await response.body()).byteLength}`)
console.log(`the object Name is: ${responseBody.name}`);
console.log(`the object year is : ${responseBody.data.year}`);
console.log(`the object price is : ${responseBody.data.price}`);
console.log(`the object CPUModel is : ${responseBody.data['CPU model']}`);
console.log(`the object HardDiskSize is: ${responseBody.data['Hard disk size']}`);


id = responseBody.id


});
//Automate get api 
test('Get object by id ${id}', async ({ request }) => {

const startingTime = Date.now();
const response = await request.get(`${objectEndPoints}${id}`);
const endingTime = Date.now();
const resposneTime = endingTime - startingTime;
const responseBody = await response.json();
const responseStatus = await response.status() ;
console.log(responseBody);
console.log(`the response time is: ${resposneTime}`);
console.log(`the response status is: ${await response.status()}`);
//Asseration response status is 200
await expect(responseStatus).toBe(200);
console.log(`the response content-type is: ${response.headers()['content-type']}`);
console.log(`the object id is: ${responseBody.id}`);
console.log(`the response length is: ${(await response.body()).byteLength}`)
console.log(`the object Name is: ${responseBody.name}`);
console.log(`the object year is : ${responseBody.data.year}`);
console.log(`the object price is : ${responseBody.data.price}`);
console.log(`the object CPUModel is : ${responseBody.data['CPU model']}`);
console.log(`the object HardDiskSize is: ${responseBody.data['Hard disk size']}`);





});

test('Update object - put request', async ({ request }) => {
const payload ={
    
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2026,
    "price": 20000,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }

};
const startingTime = Date.now();
const response = await request.put(`${objectEndPoints}${id}`,{
data:  payload,
headers :  {
    "Content-Type" :"application/json"
} 


});
const endingTime = Date.now();
const resposneTime = endingTime - startingTime;
const responseBody = await response.json();

console.log(responseBody);
console.log(`the response time is: ${resposneTime}`);
console.log(`the response status is: ${await response.status()}`);
console.log(`the response content-type is: ${response.headers()['content-type']}`);
console.log(`the object id is: ${responseBody.id}`);
console.log(`the response length is: ${(await response.body()).byteLength}`)
console.log(`the object Name is: ${responseBody.name}`);
console.log(`the object year is : ${responseBody.data.year}`);
console.log(`the object price is : ${responseBody.data.price}`);
console.log(`the object CPUModel is : ${responseBody.data['CPU model']}`);
console.log(`the object HardDiskSize is: ${responseBody.data['Hard disk size']}`);

//Asserations
expect(response).toBeOK();
expect(responseBody.id).toBe(id);
expect(responseBody.name).toContain('16')
});

test('Update object - patch request', async ({ request }) => {
const payload ={
    
  "name": "Apple MacBook Pro 12",
  

};
const startingTime = Date.now();
const response = await request.patch(`${objectEndPoints}${id}`,{
data:  payload,
headers :  {
    "Content-Type" :"application/json"
} 


});
const endingTime = Date.now();
const resposneTime = endingTime - startingTime;
const responseBody = await response.json();

console.log(responseBody);
console.log(`the response time is: ${resposneTime}`);
console.log(`the response status is: ${await response.status()}`);
console.log(`the response content-type is: ${response.headers()['content-type']}`);
console.log(`the object id is: ${responseBody.id}`);
console.log(`the response length is: ${(await response.body()).byteLength}`)
console.log(`the object Name is: ${responseBody.name}`);
console.log(`the object year is : ${responseBody.data.year}`);
console.log(`the object price is : ${responseBody.data.price}`);
console.log(`the object CPUModel is : ${responseBody.data['CPU model']}`);
console.log(`the object HardDiskSize is: ${responseBody.data['Hard disk size']}`);

});

test('Delete object - Delete request', async ({ request }) => {

const startingTime = Date.now();
const response = await request.delete(`${objectEndPoints}${id}`,);
const endingTime = Date.now();
const resposneTime = endingTime - startingTime;
const responseBody = await response.json();

console.log(responseBody);
console.log(`the response time is: ${resposneTime}`);
console.log(`the response status is: ${await response.status()}`);
console.log(`the response length is: ${(await response.body()).byteLength}`)


});

});