import React, { Component } from 'react';


class User extends Component {
    render() {
        let list = [
            {
                name: "Natália",
                email: "nataliadeolive@gmail.com"
            },
            {
                name: "Josefino",
                email: "josefino@gmail.com"
            }
        ]
        return (
            <div>
                <table border="1">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>

                    })}
                </table>
            </div>
        );
    }
}

export default User;