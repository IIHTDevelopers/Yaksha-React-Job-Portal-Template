import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Create a Job" h2', () => {
        render(<App />);
        expect(screen.queryByText('Create a Job')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Job Listings" h2', () => {
        render(<App />);
        expect(screen.queryByText('Job Listings')).toBeInTheDocument();
    });
});
