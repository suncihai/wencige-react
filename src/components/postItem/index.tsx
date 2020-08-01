import * as React from 'react';
import _ from 'lodash';
import { Post } from '../../models/Post';
import { Table, Icon, Tooltip } from 'antd';
import './style.scss';

export const PostItem = (item: Post, index: number) => {
    return (
        <div className="post-item-container">
            <h3>{item.title}</h3>
        </div>
    );
};
