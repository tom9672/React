import React from "react";

export default class List extends React.Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <ul>

                {
                    isFirst ? <h2>Welcome</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2>{err}</h2> :
                    users.map((each) => {
                        return (
                            <li key={each.id}>
                                <img src={each.avatar_url} alt="" style={{ width: '20px' }} />
                                <a href={each.html_url}>{each.login}</a>
                            </li>
                        )
                    })

                }

            </ul>
        )
    }
}