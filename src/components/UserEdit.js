import React, { Component } from "react"
import { observer } from "mobx-react"

class UserEdit extends Component {
    render() {
        const { user } = this.props
        return <div>
        </div>
    }
    onLoginChange = event => {
        this.props.user.changeLogin(event.target.value)
    }
    onIdChange = event => {
        const id = parseInt(event.target.value)
        if (!isNaN(id)) this.props.user.changeId(id)
    }
    onNameChange = event => {
        this.props.user.changeName(event.target.value)
    }
    onCompanyChange = event => {
        this.props.user.changeCompany(event.target.value)
    }
    onBlogChange = event => {
        this.props.user.changeBlog(event.target.value)
    }
    onLocationChange = event => {
        this.props.user.changeLocation(event.target.value)
    }
    onPublicReposChange = event => {
        const publicRepo = parseInt(event.target.value)
        if (!isNaN(publicRepo)) this.props.user.changePublicRepos(publicRepo)
    }
    onFollowersChange = event => {
        const publicRepo = parseInt(event.target.value)
        if (!isNaN(publicRepo)) this.props.user.changeFollowers(publicRepo)
    }
}

export default observer(UserEdit)