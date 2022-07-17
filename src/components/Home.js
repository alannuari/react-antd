import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.searchInput = createRef(null);

        this.columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              width: '30%',
              ...this.getColumnSearchProps('name'),
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              width: '20%',
              ...this.getColumnSearchProps('age'),
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              ...this.getColumnSearchProps('address'),
            },
            {
              title: 'Actions',
              key: 'actions',
              render: (record) => {
                return (
                    <Link 
                        to={`detail/${record.key}`} 
                        onClick={() => this.props.handleDetail(record)} 
                        style={{ 
                            color: 'white',
                            padding: '4px 8px',
                            backgroundColor: '#1890ff',
                            borderRadius: '5px'
                        }}>
                        Detail
                    </Link>
                );
              }
            },
        ];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.getColumnSearchProps = this.getColumnSearchProps.bind(this);
    }
    state = { 
        searchText: '',
        searchedColumn: ''
    }
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState(() => {
            return {
                searchText: selectedKeys[0],
                searchedColumn: dataIndex
            }
        })
    };
    handleReset = (clearFilters) => {
        clearFilters();
        this.setState((prevState) => {
            return {
                ...prevState,
                searchText: ''
            }
        })
    };
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={this.searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && this.handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  this.setState(() => {
                    return {
                        searchText: selectedKeys[0],
                        searchedColumn: dataIndex
                    }
                  })
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1890ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.current?.select(), 100);
            }
        },
        render: (text) => this.state.searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{
                    backgroundColor: '#ffc069',
                    padding: 0,
                }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
    });
    
    render() { 
        return <Table 
                    columns={this.columns} 
                    dataSource={this.props.data}
                />;
    }
}
 
export default Home;