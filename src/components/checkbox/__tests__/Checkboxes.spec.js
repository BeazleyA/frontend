import React from 'react';
import Checkbox from '../Checkbox';
import { render, screen, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


//Test for checked
describe('Checkboxes', () => { 
    it('should be true when value is checked"', () => {
        const { getByTestId } = render(<Checkbox />);
        const test = getByTestId('Cohort One')
        //  const rightClick = { Checkboxes: 2 }  
          userEvent.click(test)

          expect(test.checked).toBe(true)
    }
    )

    it('should be false when value is not checked"', () => {
        const { getByTestId } = render(<Checkbox />);
        const test = getByTestId('Cohort One')
        //  const rightClick = { Checkboxes: 2 }  
        //   userEvent.click(test)

          expect(test.checked).toBe(false)
    }
    )
})

// // Test for two check boxes being ticked
// it('should be checked for two of the boxes when value is true', () => {
//     // Arrange
//     //Act
//     const { getByID } = render(<Checkbox handleCH1check={true} />);
//     const handleCH1check = getByID('Cohort One');
//     //Assert
//     expect(handleCH1check).toBe(True);
// })