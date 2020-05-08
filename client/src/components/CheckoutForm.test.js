import React from "react";
import { render, getByText, fireEvent, getByLabelText, findByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const header = getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId } = render(<CheckoutForm />)

    const successMessage = findByText(/You have ordered some plants! Woo-hoo!/i)

    fireEvent.change(getByLabelText(/first name/i), { target: {value: "Michael"}})
    fireEvent.change(getByLabelText(/last name/i), { target: {value: "Gregory"}})
    fireEvent.change(getByLabelText(/address/i), { target: {value: "14605 34th Ave N"}})
    fireEvent.change(getByLabelText(/city/i), { target: {value: "Plymouth"}})
    fireEvent.change(getByLabelText(/state/i), { target: {value: "MN"}})
    fireEvent.change(getByLabelText(/zip/i), { target: {value: "55447"}})
    fireEvent.click(getByTestId(/checkout-button/))

    expect(successMessage).toBeInTheDocument

});
