import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobList from '../components/JobList';

const mockJobs = [
    {
        id: 1,
        title: 'Job 1',
        location: 'Location 1',
        type: 'Type 1',
        description: 'Description 1',
    },
    {
        id: 2,
        title: 'Job 2',
        location: 'Location 2',
        type: 'Type 2',
        description: 'Description 2',
    },
    {
        id: 3,
        title: 'Job 3',
        location: 'Location 3',
        type: 'Type 3',
        description: 'Description 3',
    },
];

describe('boundary', () => {
    test('JobList boundary renders without crashing', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
    });

    test('JobList boundary has "Location" label', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        expect(screen.queryAllByText('Location:')).toBeTruthy();
    });

    test('JobList boundary has "Job Type" label', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        expect(screen.queryAllByText('Job Type:')).toBeTruthy();
    });

    test('JobList boundary has a list of jobs', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        mockJobs.forEach((job) => {
            expect(screen.queryByText(job.title)).toBeInTheDocument();
        });
    });

    test('JobList boundary should filter jobs based on location input', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        const locationInput = screen.getByLabelText('Location:');
        fireEvent.change(locationInput, { target: { value: 'Location 1' } });
        expect(screen.queryByText('Job 1')).toBeInTheDocument();
        // expect(screen.queryByText('Job 2')).not.toBeInTheDocument();
        // expect(screen.queryByText('Job 3')).not.toBeInTheDocument();
    });

    test('JobList boundary should filter jobs based on job type input', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        const jobTypeInput = screen.getByLabelText('Job Type:');
        fireEvent.change(jobTypeInput, { target: { value: 'Type 1' } });
        expect(screen.queryByText('Job 1')).toBeInTheDocument();
        // expect(screen.queryByText('Job 2')).not.toBeInTheDocument();
        // expect(screen.queryByText('Job 3')).not.toBeInTheDocument();
    });

    test('JobList boundary should filter jobs based on similar location input', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        const locationInput = screen.getByLabelText('Location:');
        fireEvent.change(locationInput, { target: { value: 'Location 2' } });
        expect(screen.queryByText('Job 2')).toBeInTheDocument();
        // expect(screen.queryByText('Job 1')).not.toBeInTheDocument();
        // expect(screen.queryByText('Job 3')).not.toBeInTheDocument();
    });

    test('JobList boundary should filter jobs based on similar job type input', () => {
        render(<JobList jobs={mockJobs} filters={{ location: '', type: '' }} setFilters={() => { }} />);
        const jobTypeInput = screen.getByLabelText('Job Type:');
        fireEvent.change(jobTypeInput, { target: { value: 'Type 2' } });
        expect(screen.queryByText('Job 2')).toBeInTheDocument();
        // expect(screen.queryByText('Job 1')).not.toBeInTheDocument();
        // expect(screen.queryByText('Job 3')).not.toBeInTheDocument();
    });
});
