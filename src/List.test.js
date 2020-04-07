import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Card from './Card'
import List from './List'
import './List.css';

describe('<List />', () => {
    it('renders without crashing', () => {
        const sec = document.createElement('section');

        ReactDOM.render(
            <List 
                header="Jeopardy"
                cards= {[{ key: "a", title: "test123", content: "123" }]}
                />,
                sec

        )

        ReactDOM.unmountComponentAtNode(sec);
    });
});

describe('<List />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer
        .create(<List header="Jeopardy" cards= {[{ key: "a", title: "test123", content: "123" }]}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})