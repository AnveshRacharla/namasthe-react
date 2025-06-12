import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us text cases",()=>{
    it("should load contact us component",()=>{
        render(<Contact/>);
        
        const heading =screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button in contact component",()=>{
        render(<Contact/>);
        
        const button =screen.getByText("Submit");
        
        expect(button).toBeInTheDocument();
    });
    
    test("should find by placeholder text in contact component",()=>{
        render(<Contact/>);
        
        const button =screen.getByPlaceholderText("name");
        
        expect(button).toBeInTheDocument();
    });
    
    test("should find 2 inputs contact component",()=>{
        render(<Contact/>);
        
        const inputBoxes =screen.getAllByRole("textbox");
        
        expect(inputBoxes.length).toBe(2);
    });
});
    
    