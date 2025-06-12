import sum from "../sum";

test("Sum function should calculate sum",()=>{
    const result=sum(3,4);

    expect(result).toBe(7);
})