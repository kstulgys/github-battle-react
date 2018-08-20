import React from "react"
import PropTypes from "prop-types"
import PlayerPreview from "./PlayerPreview"
import { Button, ListItem, List, ListItemText } from "@material-ui/core"
const Profile = ({ info }) => {
	return (
		<div>
			<PlayerPreview avatar={info.avatar_url} username={info.login} />

			<List dense={true}>
				<ListItem>
					<ListItemText
						primary={info.name && <span>Name: {info.name} </span>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={info.location && <span>Location: {info.location} </span>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary={<span>Company: {info.company} </span>} />
				</ListItem>
				<ListItem>
					<ListItemText primary={<span>Followers: {info.followers}</span>} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary={info.following && <span>Following: {info.following}</span>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							info.public_repos && <span>Repos: {info.public_repos}</span>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							info.blog && (
								<span>
									Blog: <a href={info.blog}>{info.blog}</a>
								</span>
							)
						}
					/>
				</ListItem>
			</List>
		</div>
	)
}
export default Profile
