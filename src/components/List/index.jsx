
import React, { Component } from 'react'
import { Row, Col, Table, Input, Button, Icon, Skeleton } from 'antd'
import { withAuth } from '../../auth'
import Highlighter from 'react-highlight-words'
import axios from 'axios'
import { toast } from 'react-toastify'
import './index.scss'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            data: null
        }
        this.getUrl = this.props.getUrl
        this.headers = this.props.auth.getHeaderAuthToken()
        this.columns = this.props.columns
    }

    getData = async() => {
        try {
            const response = await axios.get(this.getUrl, this.headers)
            if(response.status === 200) {
                this.setState({
                    data: response.data,
                    loaded: true
                })
            }
        } catch (error) {
            console.log(error)
            toast.error('Error al traer información')

        }
    }

    componentDidMount = async () => {
        await this.getData()
    }

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) =>
            <div style = {{ padding: 8 }}>
                <Input
                    ref = { node => {this.searchInput = node} }
                    placeholder = { `Buscar ${dataIndex}` }
                    value = { selectedKeys[0] }
                    onChange = { e => setSelectedKeys(
                        e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter = { () => this.handleSearch(selectedKeys, confirm) }
                    style = {{ width: 188, marginBotton: 9, display: 'block' }}
                />
                <Button
                    type = 'primary'
                    onClick = { () => this.handleSearch(selectedKeys, confirm) }
                    icon = 'search'
                    size = 'small'
                    style = {{ width: 90, marginRight: 8 }}
                >
                    Buscar
                </Button>
                <Button
                    onClick = { () => this.handleReset(clearFilters) }
                    size = 'small'
                    style = {{ width: 90 }}
                >
                    Limpiar
                </Button>

            </div>
        ,
        filterIcon: filtered =>
            <Icon
                type = 'search'
                style = {{ color: filtered ? '#1890ff' : undefined }}
            />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase().
                includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select())
            }
        },
        render: (text) =>
            <Highlighter
                highlightStyle = {{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords = { [this.state.searchText] }
                autoEscape
                textToHighlight = { text.toString() }
            />
    })

    handleSearch = (selectedKeys, confirm) => {
        confirm()
        this.setState({ searchText: selectedKeys[0] })
    }
    handleReset = (clearFilters) => {
        clearFilters()
        this.setState({ searchText: '' })
    }

    generateColumns = (columns) => {
        const columnsAnt = columns.map(column => {
            let object = {
                title: column.title,
                dataIndex: column.value,
                key: column.value,
                width: 1000,
                ...this.getColumnSearchProps(column.value)
            }
            return object
        })
        return columnsAnt
    }

    render() {
        const suputamadre = this.generateColumns(this.columns)
        const { loaded, data } = this.state
        console.log(this.props)
        return (
            <Row className = 'list-list'>
                <Col span = { 24 }>
                    <p className = 'list-title'>
                        { this.props.title }
                    </p>
                </Col>
                <Col span = { 24 }>
                    {
                        loaded  && suputamadre ?
                            <Table
                                onRow = { record => ({
                                    onClick: () =>
                                        this.props.history.push(this.props.match.url + record._id)
                                }) }
                                columns = { suputamadre }
                                dataSource = { data ? data : null }
                            />
                            :
                            <Skeleton active />
                    }
                </Col>
            </Row>
        )
    }

}

export default withAuth(List)