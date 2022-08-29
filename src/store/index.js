import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contactsList: [],
    contactModalOpen: false,
    deleteContactModalOpen: false,
    contactToEdit: {
      name: "",
      email: "",
      phone: "",
      highlight: false,
      contactIndex: 0
    },
    contactToDelete: 0,
    search: ''
  },

  mutations: {
    addContact(state, payload) {
      state.contactsList = [...state.contactsList, payload]
    },
    updateContactsList(state, payload) {
      const updateIndex = payload.contactIndex
      const newContacts = state.contactsList
      newContacts[updateIndex] = payload
      state.contactsList = [...newContacts]
    },
    updateSearch(state, payload) {
      state.search = payload
    },
    toggleContactModalOpen(state) {
      state.contactModalOpen = !state.contactModalOpen
    },
    toggleDeleteContactModalOpen(state) {
      state.deleteContactModalOpen = !state.deleteContactModalOpen
    },
    setContactToEdit(state, payload) {
      state.contactToEdit = { ...payload }
    },
    cleanContactToEdit(state) {
      state.contactToEdit = {
        name: "",
        email: "",
        phone: "",
        highlight: false,
        contactIndex: 0
      }
    },
    setContactToDelete(state, payload) {
      state.contactToDelete = payload
    },
    deleteContact(state, payload) {
      state.contactsList = [...payload]
    }
  }
})

export default store