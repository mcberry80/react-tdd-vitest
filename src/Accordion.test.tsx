import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Accordion from './Accordion';

describe("Accordion", () => {

    beforeEach(() => {
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    });

    test("should show title all the time", () => {
        expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    })

    test("should not show the content at the start", () => {

        expect(screen.queryByText(/Content/i)).not.toBeInTheDocument()

    })

    test("should show the content on accordion click",async () => {

        const title = screen.getByText(/Show/i);
        fireEvent.click(title)
        expect(await screen.queryByText(/Content/i)).toBeInTheDocument();
    })

})