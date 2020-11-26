import React, {useState} from 'react';
import { Table, Tag } from 'antd';

const Word = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tag',
            key: 'tag',
            dataIndex: 'tag',
            render: tag => {
                return (
                    <Tag color={tag === '名词' ? 'green' : 'geekblue'} key={tag}>
                        {tag}
                    </Tag>
                );
            },
        }
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            tag: '名词',
        },
        {
            key: '2',
            name: 'Jim Green',
            tag: '名词',
        },
        {
            key: '3',
            name: 'John Brown',
            tag: '名词',
        },
        {
            key: '4',
            name: 'Jim Green',
            tag: '动词',
        },
        {
            key: '5',
            name: 'John Brown',
            tag: '动词',
        }
    ];

    return (
        <div style={{margin: '1rem'}}>
            <Table columns={columns} dataSource={data} pagination={false} size={'small'} />
        </div>
    );
}

export default Word;