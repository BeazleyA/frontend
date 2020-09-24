import React from 'react';
import Checkbox from '../Checkbox';
import { render, screen, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from '../../../Pages/MainPage/MainPage';


//Test for checked
describe('Checkboxes', () => { 
    it('should be false when checkbox has been clicked once', () => {
        const { getByTestId } = render(<MainPage />);
        const test = getByTestId('Cohort One')
        //  const rightClick = { Checkboxes: 2 }  
          userEvent.click(test)

          expect(test.checked).toBe(false)
    }
    )

    it('should be true when checkbox by default', () => {
        const { getByTestId } = render(<MainPage />);
        const test = getByTestId('Cohort One')
        //  const rightClick = { Checkboxes: 2 }  
        //   userEvent.click(test)

          expect(test.checked).toBe(true)
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