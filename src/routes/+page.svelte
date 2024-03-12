<script lang="ts">
  import PackageInfo from "./PackageInfo.svelte";

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};

</script>

<h1>Hello Santiago</h1>
<PackageInfo {...pkg} />


<style>
    h1 {
        color: red;
        background-color: blue;
    }
</style>