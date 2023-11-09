import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobCreation from '../components/JobCreation';

describe('boundary', () => {
    test('JobCreation boundary renders without crashing', () => {
        render(<JobCreation />);
    });

    test('JobCreation boundary has "Title" label', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Title:')).toBeInTheDocument();
    });

    test('JobCreation boundary has "Company" label', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Company:')).toBeInTheDocument();
    });

    test('JobCreation boundary has "Location" label', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Location:')).toBeInTheDocument();
    });

    test('JobCreation boundary has "Type" label', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Type:')).toBeInTheDocument();
    });

    test('JobCreation boundary has "Description" label', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Description:')).toBeInTheDocument();
    });

    test('JobCreation boundary has a "Create Job" button', () => {
        render(<JobCreation />);
        expect(screen.queryByText('Create Job')).toBeInTheDocument();
    });

    test('JobCreation boundary should handle input changes', () => {
        render(<JobCreation />);
        const titleInput = screen.getByLabelText('Title:');
        const companyInput = screen.getByLabelText('Company:');
        const locationInput = screen.getByLabelText('Location:');
        const typeInput = screen.getByLabelText('Type:');
        const descriptionInput = screen.getByLabelText('Description:');

        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(companyInput, { target: { value: 'Test Company' } });
        fireEvent.change(locationInput, { target: { value: 'Test Location' } });
        fireEvent.change(typeInput, { target: { value: 'Test Type' } });
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });

        expect(titleInput).toHaveValue('Test Title');
        expect(companyInput).toHaveValue('Test Company');
        expect(locationInput).toHaveValue('Test Location');
        expect(typeInput).toHaveValue('Test Type');
        expect(descriptionInput).toHaveValue('Test Description');
    });

    test('JobCreation boundary should handle form submission', () => {
        const onJobCreated = jest.fn();
        render(<JobCreation onJobCreated={onJobCreated} />);
        const titleInput = screen.getByLabelText('Title:');
        const companyInput = screen.getByLabelText('Company:');
        const locationInput = screen.getByLabelText('Location:');
        const typeInput = screen.getByLabelText('Type:');
        const descriptionInput = screen.getByLabelText('Description:');
        const createJobButton = screen.getByText('Create Job');

        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(companyInput, { target: { value: 'Test Company' } });
        fireEvent.change(locationInput, { target: { value: 'Test Location' } });
        fireEvent.change(typeInput, { target: { value: 'Test Type' } });
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });

        fireEvent.click(createJobButton);

        expect(onJobCreated).toHaveBeenCalledWith({
            title: 'Test Title',
            company: 'Test Company',
            location: 'Test Location',
            type: 'Test Type',
            description: 'Test Description',
        });
    });
});
