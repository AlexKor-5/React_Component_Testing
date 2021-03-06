import React from 'react';
import {create, act} from 'react-test-renderer';
import Link from "../Link"

test('Link changes the class when hovered', () => {
    const component = create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    act(() => {
        tree.props.onMouseEnter();
    })
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    act(() => {
        tree.props.onMouseLeave();
    })
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});