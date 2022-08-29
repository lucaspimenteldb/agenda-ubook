<template>
	<div class="header">
		<img src="../assets/ubook-logo.svg" alt="" />
		<button
			class="header__add-contact-button"
			type="button"
			v-if="hasContacts"
			@click="openHandleContactModalOpen"
		>
			<img src="../assets/add-icon.svg" alt="" />
			Criar contato
		</button>
		<input
			class="header__search-bar"
			:class="{ 'header__search-bar--with-contacts': hasContacts }"
			type="text"
			placeholder="Buscar..."
      v-model="search"
      @input="updateSearch"
		/>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "Header",
  data () {
    return {
      search: ''
    }
  },
	computed: {
		...mapState({
			hasContacts: (state) => state.contactsList.length > 0,
		}),
	},
	methods: {
		openHandleContactModalOpen() {
			this.$store.commit("toggleContactModalOpen");
		},
    updateSearch() {
      this.$store.commit("updateSearch", this.search)
    }
	},
};
</script>

<style lang="scss" scoped>
.header {
	padding: 1rem;
	display: flex;
	align-items: center;

	&__search-bar {
		margin-left: 14.25rem;
		padding: 0.438rem 0.5rem 0.375rem;
		width: 100%;
		border: none;
		outline: none;
		background-color: var(--pale-grey);
		border-radius: 4px;

		&--with-contacts {
			margin-left: 1.5rem;
		}
	}

	&__add-contact-button {
		margin-left: 3.75rem;
		min-width: 9rem;
		height: 2rem;
		display: flex;
		align-items: center;
		padding: 0.5rem 1.375rem 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: #fa7268;
		background-color: var(--light-yellowish-green);
		border-radius: 1rem;
		border: none;
		outline: none;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
		cursor: pointer;

		img {
			margin-right: 0.5rem;
		}
	}
}
</style>