import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class UpdateUser extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/user/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}
class DeleteUser extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the user ${this.props.id} permanently?`,
            )
        ) {
            api.deleteUserById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllUsers().then(users => {
            this.setState({
                users: users.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { users, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Username',
                accessor: 'username',
                filterable: true,
            },
            {
                Header: 'Display Name',
                accessor: 'displayName',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteUser id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateUser id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!users.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={users}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}
// function Admin() {
//   return (
//     <div>
//       <h1>Welcome Admin!</h1>
//     </div>
//   )
//}

export default Admin;