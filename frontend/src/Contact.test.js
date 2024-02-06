import {render,screen} from "@testing-library/react";
import Contact from "./pages/ContactPage";

test("Should load contact page",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should have button on the contact page",()=>{
    render(<Contact/>)
    const headingd =screen.getByRole("headingd ");

    expect(headingd ).toBeInTheDocument();
});