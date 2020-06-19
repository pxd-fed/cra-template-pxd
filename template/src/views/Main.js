import React, {useEffect, useState} from 'react';
import * as Users from '../apis/Users';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    const getUsersAll = async () => {
        await Users.getUsers().then((res) => {
            console.log(res);
            // console.log(res.data);
            // setUsers(res.data);
        });
    };

    const selectUser = async (e) => {
        let select = e.currentTarget;
        let selectIdx = select.selectedIndex + 1;

        await Users.getUser(selectIdx).then((res) => {
            console.log(res.data);
            setSelectedUser(res.data);
        });
    };

    const selectedUserBind = () => {
        if (selectedUser === '') {
            return false;
        } else {
            return (
                <div>
                    <p>selectedUser</p>
                    <textarea cols={100} rows={22} defaultValue={JSON.stringify(selectedUser)}></textarea>
                    <button onClick={editUser}>Edit</button>
                    <button onClick={deleteUser}>Delete</button>
                    <dl>
                        <dt>Name : </dt>
                        <dd>{selectedUser.name}</dd>

                        <dt>UserName : </dt>
                        <dd>{selectedUser.username}</dd>

                        <dt>E-Mail : </dt>
                        <dd>{selectedUser.email}</dd>

                        <dt>Phone : </dt>
                        <dd>{selectedUser.phone}</dd>

                        <dt>WebSite : </dt>
                        <dd>
                            <a href={selectedUser.website} target="_blank" rel="noopener">
                                {selectedUser.website}
                            </a>
                        </dd>
                    </dl>
                </div>
            );
        }
    };

    const editUser = async () => {
        let userId = selectedUser.id;
        await Users.putUser(userId).then((res) => {
            console.log(res);
        });
    };

    const deleteUser = () => {
        let userId = selectedUser.id;
        Users.delUser(userId).then((res) => {
            console.log(res);
        });
    };

    useEffect(() => {

    });

    return (
        <div>
            <div>
                <p>Users</p>
                <p>
                    <button onClick={getUsersAll}>GetUsersAll</button>
                </p>
                <select onChange={selectUser}>
                    {
                        users.map((v, i) => {
                            return(
                                <option key={i}>{v.name}</option>
                            )
                        })
                    }
                </select>
                {selectedUserBind()}
            </div>
        </div>
    );
};

export default Main;