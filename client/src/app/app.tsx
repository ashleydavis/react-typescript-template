import * as React from 'react';

export interface IAppProps {
}

export interface IAppState {
}

export class AppUI extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <p>Your app goes here</p>
        );
    }
}