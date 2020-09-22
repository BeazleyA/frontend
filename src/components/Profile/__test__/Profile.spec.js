import React from 'react';
import { render, getByRole } from '@testing-library/react';
import Profile from '../Profile';

describe('Profile collection', () => {
    it('should render name', () => {
        //arrange

        // Act
        const { getByText } = render(<Profile name ='Mock name'/>);
        const name = getByText('Mock name');

        //Assert
        expect(name).toBeInTheDocument();
    })

    it('should render image', () => {
        //arrange

        // Act
        const { getByRole } = render(<Profile src ='test.jpg'/>);
        const src = getByRole(Image);

        //Assert
        expect(src).toBeInTheDocument();
    })

})


