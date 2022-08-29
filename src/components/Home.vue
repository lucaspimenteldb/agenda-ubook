<template>
	<div>
		<ContactsTable v-show="hasContacts" />
		<EmptyAgenda v-if="!hasContacts" />
		<HandleContactModal v-if="contactModalOpen" />
		<DeleteContactModal v-if="deleteContactModalOpen" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import EmptyAgenda from "./EmptyAgenda.vue";
import ContactsTable from "./ContactsTable.vue";
import HandleContactModal from "./HandleContactModal.vue";
import DeleteContactModal from "./DeleteContactModal.vue";

export default {
	name: "Home",
	components: {
		EmptyAgenda,
		ContactsTable,
		HandleContactModal,
		DeleteContactModal,
	},
	data() {
		return {
			handleContactModalOpen: false,
		};
	},
	computed: {
		...mapState({
			hasContacts: (state) => state.contactsList.length > 0,
			contactModalOpen: (state) => state.contactModalOpen,
			deleteContactModalOpen: (state) => state.deleteContactModalOpen,
		}),
	},
	methods: {
		toggleHandleContactModalOpen() {
			this.handleContactModalOpen = !this.handleContactModalOpen;
		},
	},
};
</script>

<style>
</style>
