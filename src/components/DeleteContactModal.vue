<template>
	<div class="modal-container">
		<div class="modal">
			<div class="modal__header">Excluir contato</div>
			<div class="modal__body">
				<p>Deseja realmente excluir o contato?</p>
			</div>
			<div class="modal__footer">
				<button class="modal__button--cancel" @click="close">
					Cancelar
				</button>
				<button class="modal__button--delete" @click="deleteContact">
					Excluir
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "HandleContactModal",
	computed: {
		...mapState({
			contactsList: (state) => state.contactsList,
			index: (state) => state.contactToDelete,
		}),
	},
	methods: {
		close() {
			this.$store.commit("toggleDeleteContactModalOpen");
		},
		deleteContact() {
			const newContacts = [...this.contactsList];
			newContacts.splice(this.index, 1);
			this.$store.commit("deleteContact", newContacts);
			this.close();
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.4);

	.modal {
		width: 27rem;
		display: flex;
		flex-direction: column;
		background-color: var(--white-two);
		box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
		border-radius: 16px;

		&__header {
			padding: 1rem 1rem 0.78rem;
			color: var(--dark);
			font-size: 1rem;
			border-bottom: solid 1px #c0c3d2;
		}

		&__body {
			padding: 1.219rem 1.5rem 3.563rem;

			p {
				margin: 0;
				font-size: 14px;
				color: var(--dark);
			}
		}

		&__footer {
			padding: 0.938rem 1rem 1rem;
			display: flex;
			justify-content: end;
			border-top: solid 1px #c0c3d2;

			.modal__button {
				padding: 0.5rem 1rem;
				font-size: 0.875rem;
				font-weight: 500;
				cursor: pointer;

				&--delete {
					@extend .modal__button;
					color: var(--white-two);
					background-color: #fa7268;
					border: 1px solid var(--black-8);
					border-radius: 16px;
					box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
				}
				&--cancel {
					@extend .modal__button;
					color: #fa7268;
					background: none;
					border: none;
				}
				&--disabled {
					opacity: 0.32;
					cursor: default;
				}
			}
		}
	}
}
</style>