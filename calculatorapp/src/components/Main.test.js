import Main from "./Main";
import {fireEvent, render} from "@testing-library/react"



describe(Main, ()=>{
    test("initial display is blank", ()=>{
        const {getByRole} = render(<Main/>)
        const displayValue = getByRole("textbox").value;
        expect(displayValue).toBe("");
    });

    test('display updates with the number button clicked',() => {
        const {getByRole, getByText} = render(<Main />);
        const btn5 = getByText('5')
        fireEvent.click(btn5)
        const dvalue = getByRole("textbox");
        expect(dvalue.value).toBe("5");
        const btn6 = getByText("6");
        fireEvent.click(btn6);
        expect(dvalue.value).toBe("56")
    });

    test("should add two values", ()=>{
        const {getByText, getByRole} = render(<Main/>);
        const btn8 = getByText("8");
        const btn9 = getByText("9");
        const plusbtn = getByText("+");
        const resultbtn = getByText("=");
        const display = getByRole("textbox");

        fireEvent.click(btn8);
        fireEvent.click(plusbtn);
        fireEvent.click(btn9);
        fireEvent.click(resultbtn);
        expect(display.value).toBe("17")
    });

    test("should divide two values", ()=>{
        const {getByText, getByRole} = render(<Main/>);
        const btn6 = getByText("6");
        const btn0 = getByText("0");
        const btn5 = getByText("5");
        const divbtn = getByText("/");
        const resultbtn = getByText("=");
        const display = getByRole("textbox");

        fireEvent.click(btn6);
        fireEvent.click(btn0);
        fireEvent.click(divbtn);
        fireEvent.click(btn5);
        fireEvent.click(resultbtn);

        expect(display.value).toBe("12");
    });

    test("should multiply two values", ()=>{
        const {getByText, getByRole} = render(<Main/>);
        const btn6 = getByText("6");
        const btn0 = getByText("0");
        const btn5 = getByText("5");
        const mulbtn = getByText("x");
        const resultbtn = getByText("=");
        const display = getByRole("textbox");

        fireEvent.click(btn6);
        fireEvent.click(btn0);
        fireEvent.click(mulbtn);
        fireEvent.click(btn5);
        fireEvent.click(resultbtn);

        expect(display.value).toBe("300");
    });

    test("should change to theme2", ()=>{
        const {getByText, container} = render(<Main/>);
        const theme2btn = getByText("2", {selector:".theme2"});
        const wholediv = container.querySelector('.whole');
        fireEvent.click(theme2btn);
        expect(wholediv).toHaveClass("whole2");

    })

    test('should reset display value when RESET is clicked', () => {
        const { getByText, getByRole } = render(<Main />);
        const btn7 = getByText('7');
        const resetButton = getByText('RESET');
        const display = getByRole("textbox");
        
        fireEvent.click(btn7);
        fireEvent.click(resetButton);
        
        expect(display.value).toBe('');
    });

    test('should remove last digit when DEL is clicked', () => {
        const { getByText, getByRole } = render(<Main />);
        const btn8 = getByText('8');
        const btn9 = getByText('9');
        const delButton = getByText('DEL');
        const display = getByRole("textbox");
        
        fireEvent.click(btn8);
        fireEvent.click(btn9); 
        fireEvent.click(delButton);
        
        expect(display.value).toBe('8');
    });

    test('should handle division by zero', () => {
        const { getByText, getByRole } = render(<Main />);
        const btn8 = getByText('8');
        const divButton = getByText('/');
        const btn0 = getByText('0');
        const equalButton = getByText('=');
        const display = getByRole("textbox");
        
        fireEvent.click(btn8);
        fireEvent.click(divButton);
        fireEvent.click(btn0);
        fireEvent.click(equalButton);
        
        expect(display.value).toBe('Infinity'); 
    });
    
    
    

    
})
