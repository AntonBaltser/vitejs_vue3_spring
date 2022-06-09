import axios from "axios";

export default {
    actions: {
        async addMessageAction({commit, state}, message) {
            const data = await axios.post(`/message/${message.id}`, message)

            const index = state.messages.findIndex(item => item.id === data.data.id)
            if (index > -1) {
                commit('updateMessageMutation', data.data)
            } else {
                commit('addMessageMutation', data.data)
            }
        },
        async updateMessageAction({commit}, message) {
            const data = await axios.put(`/message/${message.id}`, message)
            commit('updateMessageMutation', data.data)

        },
        async removeMessageAction({commit}, message) {
            const data = await axios.delete(`/message/${message.id}`)
            if (data.status === 200) {
                commit('removeMessageMutation', message)
            }
        }
    },
    mutations: {
        addMessageMutation(state, message) {
            state.messages = [
                ...state.messages,
                message
            ]
        },
        updateMessageMutation(state, message) {
            const updateIndex = state.messages.findIndex(item => item.id === message.id)
            state.messages = [
                ...state.messages.slice(0, updateIndex),
                message,
                ...state.messages.slice(updateIndex + 1)
            ]
        },
        removeMessageMutation(state, message) {
            const deletionIndex = state.messages.findIndex(item => item.id === message.id)
            if (deletionIndex > -1) {
                state.messages = [
                    ...state.messages.slice(0, deletionIndex),
                    ...state.messages.slice(deletionIndex + 1)
                ]
            }
        }
    },
    state:() =>({
        messages: frontendData.messages,
        profile: frontendData.profile
    }),
    getters: {
        sortedMessages: state => (state.messages || []).sort((a, b) => -(a.id - b.id)),
        profileGetters: state => state.profile || ''
    },
}