import sum from "./sum";

test("Sum to be tested",()=>{
  const result=sum(3,4);
// assertion
  expect(result).toBe(7);
})