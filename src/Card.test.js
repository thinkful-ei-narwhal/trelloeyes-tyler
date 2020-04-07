import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Card from './Card.js'
import './Card.css';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Card 
                title="Jeopardy"
                content="asndjjasndjn"
                />,
                div

        )

        ReactDOM.unmountComponentAtNode(div);
    })

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
})
