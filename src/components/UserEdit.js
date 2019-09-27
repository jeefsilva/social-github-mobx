import React, { Component } from "react"
import { observer } from "mobx-react"
import TextField from "@material-ui/core/TextField";

class UserEdit extends Component {
    render() {
        const { user } = this.props
        return <div>
            Login: <TextField label="Edit Login" value={user.login} onChange={this.onLoginChange}></TextField>
            Id: <TextField label="Edit Id" value={user.id} onChange={this.onIdChange}></TextField>
            Name: <TextField label="Edit Name" value={user.name} onChange={this.onNameChange}></TextField>
            Blog: <TextField label="Edit Blog" value={user.blog} onChange={this.onBlogChange}></TextField>
            Location: <TextField label="Edit Location" value={user.location} onChange={this.onLocationChange}></TextField>
            Public Repos: <TextField label="Edit Public Repos" value={user.public_repos} onChange={this.onPublicReposChange}></TextField>
            Followers: <TextField label="Edit Followers" value={user.followers} onChange={this.onFollowersChange}></TextField>
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