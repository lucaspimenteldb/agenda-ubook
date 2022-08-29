<template>
	<div class="empty-agenda">
		<img src="../assets/open-agenda.svg" alt="" />

		<p class="empty-agenda__description">
			Nenhum contato foi criado ainda.
		</p>

		<button
			class="empty-agenda__add-contact-button"
			type="button"
			@click="openHandleContactModalOpen"
		>
			<img src="../assets/add-icon.svg" alt="" />
			Criar contato
		</button>
	</div>
</template>

<script>
export default {
	name: "EmptyAgenda",
	methods: {
		openHandleContactModalOpen() {
			this.$store.commit("toggleContactModalOpen");
		},
	},
};
</script>

<style lang="scss" scoped>
.empty-agenda {
	margin-top: 6rem;
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;

	&__description {
		margin: 1.5rem 0;
		font-family: inherit;
		font-size: 1rem;
		color: var(--dark);
	}

	&__add-contact-button {
		padding: 0.75rem 1.375rem 0.75rem 1rem;
		display: flex;
		align-items: center;
		width: 9rem;
		color: #fa7268;
		font-weight: 500;
		background-color: var(--light-yellowish-green);
		border-radius: 20px;
		border: 1px solid var(--black-8);
		outline: none;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
		cursor: pointer;

		img {
			margin-right: 0.5rem;
		}
	}
}
</style>
