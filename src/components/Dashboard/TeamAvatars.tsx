import { Avatar } from '@mantine/core'
import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.jpg'
/**
 * @returns team members statistics 
 */
function TeamAvatars() {
    return (
        <Avatar.Group spacing="md">
            <Avatar src={avatar1} size={35} radius="xl" />
            <Avatar src={avatar2} size={35} radius="xl" />
            <Avatar size={35} radius="xl" color="indigo">+3</Avatar>
        </Avatar.Group>
    )
}

export default TeamAvatars
