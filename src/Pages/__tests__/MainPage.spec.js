import React, { useState } from 'react';
import MainPage from '../MainPage/MainPage';


    describe('associates array', () => {
        it('should be matching cohort one ', () => {
          wrapper.instance().displayUsers('07.09.18');
          expect(associates.length).to.equal(5);
        });
      });