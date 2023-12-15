/**
 * @jest-environment jsdom
 */

import PostList from '..components/AllPosts';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@tsting-library/react';

// where we are testing
describe('PostList Component', () => {
    // what are we testing
    test('displays book posts in the browser', () => {
        // renders the postlist componenet in the testing environment
        render(<PostList />)


        // checking the jest-environment browser window for the string
        const theOnlyOneLeft = screen.getByText("The Only One Left")

        // how are we testing/what do we expect to see
        expect(theOnlyOneLeft).toBeInTheDocument()
    })
})