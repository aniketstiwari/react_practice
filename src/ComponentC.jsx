import React, { Component } from 'react';
import ComponentE from './ComponentE';
import { UserProvider } from './UserContext';

class ComponentC extends Component {
    render() {
        return (
            <div>
              <UserProvider value="aniket">
                <ComponentE/>
              </UserProvider>
            </div>
        );
    }
}

export default ComponentC;