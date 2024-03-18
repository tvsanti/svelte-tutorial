<script lang="ts">
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
  import { onDestroy } from 'svelte';

	// let count_value: number;

	// const unsubscribe = count.subscribe((value) => {
	// 	console.log("Update")
	// 	count_value = value;
	// });

	// onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
