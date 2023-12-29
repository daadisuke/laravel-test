import axios from 'axios'
import type { User } from '@/types/User'
 
export const getUser = async () => {
    const { data } = await axios.get<User>('/api/user')
    return data
}