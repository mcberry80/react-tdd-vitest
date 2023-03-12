import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Accordion from './Accordion';
import { server } from './mocks/server'

describe("Accordion", () => {

beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

    beforeEach(() => {
        
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    });

    test("should show title all the time", () => {
        expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    })

    test("should not show the content at the start", () => {

        expect(screen.queryByText(/Content/i)).not.toBeInTheDocument()

    })
    test("button should update text on click", async () => {
        const actionButton = screen.getByText(/Toggle/i);
        fireEvent.click(actionButton);
        expect(await screen.queryByText(/wxyz/i)).toBeInTheDocument();
    })

    test("should show the content on accordion click",async () => {

        const title = screen.getByText(/Toggle/i);
        fireEvent.click(title);
        expect(await screen.queryByText(/Content/i)).toBeInTheDocument();
    })

})