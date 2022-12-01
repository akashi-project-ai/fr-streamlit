import React, { Component, ReactNode } from 'react';

export class Tags extends Component {
    public render = (): ReactNode =>{
        return (
            <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                    <div className="tags has-addons">
                        
                        <span className="tag is-primary">on gitter</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;
