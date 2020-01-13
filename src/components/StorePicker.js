import React from 'react';

class StorePicker extends React.Component {
    render() {
        // return <p>I am the StorePicker!</p>
        return ( // Mandatory parenthesis si it does not explode
            <>{/* <React.Fragment> */}{/* // only needed when using more sobling elements and not just one parent element */}
            <form className="store-selector"> {/* This is JSX */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
            </>/* </React.Fragment> */

        )
    }
}

export default StorePicker