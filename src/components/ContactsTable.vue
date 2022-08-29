<template>
	<div class="contacts-container">
		<table class="contacts-table">
			<thead class="contacts-table__header">
				<tr>
					<th class="contacts-table__column-title">Contatos</th>
					<th class="contacts-table__column-title">E-mail</th>
					<th class="contacts-table__column-title">Telefone</th>
					<th
						class="contacts-table__column-title"
						aria-label="Editar ou excluir contatos"
					/>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(contact, index) in contacts"
					:key="contact.name + index"
					:class="{
						highlight: contact.highlight,
						'd-none':
							hasSearchParameter &&
							!searchFieldMatchesInfo(contact),
					}"
				>
					<td class="contacts-table__row-data">
						<div class="contacts-table__name-initial">
							{{ contact.name.slice(0, 1) }}
						</div>
						{{ contact.name }}
					</td>
					<td class="contacts-table__row-data">
						{{ contact.email }}
					</td>
					<td class="contacts-table__row-data">
						{{ contact.phone }}
					</td>
					<td class="contacts-table__row-data">
						<button
							title="Editar contato"
							aria-label="Editar contato"
							class="contacts-table__button"
							@click="editContact(index, contact)"
						>
							<img src="../assets/edit-icon.svg" />
						</button>
						<button
							title="Excluir contato"
							aria-label="Excluir contato"
							class="contacts-table__button"
							@click="deleteContact(index)"
						>
							<img src="../assets/delete-icon.svg" />
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "ContactsTable",
	computed: {
		...mapState({
			contacts: (state) => state.contactsList,
			search: (state) => state.search,
			hasSearchParameter: (state) => state.search.length > 0,
		}),
	},
	watch: {
		contacts(newList) {
			setTimeout(() => {
				newList.at(-1).highlight = false;
			}, 10000);
		},
	},
	methods: {
		editContact(index, contact) {
			this.$store.commit("toggleContactModalOpen");
			this.$store.commit("setContactToEdit", {
				...contact,
				contactIndex: index,
			});
		},
		deleteContact(index) {
			this.$store.commit("setContactToDelete", index);
			this.$store.commit("toggleDeleteContactModalOpen");
		},
		searchFieldMatchesInfo({ name, email, phone }) {
			if (!this.hasSearchParameter) return;

			const phoneWithoutFormatting = phone
				.replace(/\(/g, "")
				.replace(/\)/g, "")
				.replace(/-/g, "")
				.replace(/\s/g, "");
			return (
				name.toLowerCase().includes(this.search.toLowerCase()) ||
				email.toLowerCase().includes(this.search.toLowerCase()) ||
				phoneWithoutFormatting.includes(this.search)
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.contacts-container {
	padding: 1rem;
}
.contacts-table {
	width: 100%;
	background-color: var(--white-two);
	border-radius: 4px;
	border: 1px solid var(--white);
	border-spacing: 0;

	&__header {
		position: relative;

		&::after {
			content: "";
			width: 100%;
			height: 1px;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: var(--white);
		}
	}

	&__column-title {
		padding-top: 1rem;
		padding-bottom: 0.563rem;
		width: 30%;
		text-align: left;
		color: var(--bluey-grey);
		font-size: 13px;
		font-weight: normal;

		&:first-child {
			padding-left: 2.938rem;
		}
		&:last-child {
			min-width: 3.5rem;
			width: 10%;
		}
	}

	tbody tr {
		transition: background 0.2s ease-in-out;
		position: relative;

		&.d-none {
			display: none;
		}

		&:not(:last-child)::after {
			content: "";
			width: 100%;
			height: 1px;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: var(--white);
		}

		&:hover {
			background-color: var(--very-light-pink);
		}

		&.highlight {
			background-color: var(--very-light-pink);
		}
	}
	&__row-data {
		padding: 0.5rem 0;
		font-size: 0.875rem;
		color: var(--dark);

		&:first-child {
			padding-left: 0.5rem;
		}
		&:last-child {
			padding-right: 0.5rem;
		}
	}
	&__name-initial {
		margin: 0 0.8rem 0 0;
		width: 24px;
		height: 24px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--white-two);
		background-color: #fa8d68;
		border-radius: 50%;
	}
	&__button {
		width: 1rem;
		height: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;

		&:first-child {
			margin-right: 1.5rem;
		}
	}
}
</style>