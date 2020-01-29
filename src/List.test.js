//snapshot test
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

    it('renders this as expected', ()=> {

        const trial = document.createElement('trial');
     ReactDOM.render(<List participants={[]} />, trial);
     ReactDOM.unmountComponentAtNode(trial);
    });

